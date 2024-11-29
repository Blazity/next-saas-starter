using System.Net;
using System.Net.Mail;
using TertuliatalkAPI.Interfaces;

namespace TertuliatalkAPI.Services;

public class EmailService : IEmailService
{
    private readonly IConfiguration _configuration;
    private readonly string _emailFrom;
    private readonly string _emailPassword;
    private readonly int _smtpPort;
    private readonly string _smtpServer;

    public EmailService(IConfiguration configuration)
    {
        _configuration = configuration;
        _smtpPort = 587;
        _smtpServer = "smtp.gmail.com";
        _emailFrom = _configuration["AppSettings:EmailHost"];
        _emailPassword = _configuration["AppSettings:EmailPassword"];
    }

    public async Task SendCourseJoinEmailAsync(string userName, string userEmail, string courseTitle)
    {
        var mailMessage = CreateMailMessage(
            userEmail,
            $"Course Enrollment Confirmation: {courseTitle}",
            $@"
                <html>
                   <body>
                       <h1>Hello {userName},</h1>
                       <p>Congratulations!</p>
                       <p>You have successfully enrolled in the course <strong>{courseTitle}</strong>.</p>
                       <p>We are excited to have you in our course and look forward to your active participation.</p>
                       <p>For more details about the course, please visit our website or contact us if you have any questions.</p>
                       <p>Best regards,<br/>
                       The Tertuliatalk Team</p>
                       <p><a href='https://www.tertuliatalk.com'>Visit our website</a></p>
                   </body>
                </html>"
        );
        await SendEmailAsync(mailMessage);
    }


    public async Task SendCourseReminderEmailAsync(string userName, string userEmail, string courseTitle,
        DateTime courseStartDate)
    {
        var mailMessage = CreateMailMessage(
            userEmail,
            $"Upcoming Course Reminder: {courseTitle}",
            $@"
                <html>
                    <body>
                        <h1>Hello {userName},</h1>
                        <p>This is a friendly reminder that your course <strong>{courseTitle}</strong> will start in 15 minutes.</p>
                        <p>Course Start Time: {courseStartDate.ToString("f")}</p>
                        <p>We look forward to your participation. If you have any questions or need assistance, please don't hesitate to reach out.</p>
                        <p>Best regards,<br/>
                        The Tertuliatalk Team</p>
                        <p><a href='https://www.tertuliatalk.com'>Visit our website</a></p>
                    </body>
                </html>"
        );
        await SendEmailAsync(mailMessage);
    }

    private MailMessage CreateMailMessage(string recipientEmail, string subject, string body)
    {
        var mailMessage = new MailMessage
        {
            From = new MailAddress(_emailFrom),
            Subject = subject,
            Body = body,
            IsBodyHtml = true
        };
        mailMessage.To.Add(recipientEmail);

        return mailMessage;
    }

    private async Task SendEmailAsync(MailMessage mailMessage)
    {
        using var smtpClient = new SmtpClient(_smtpServer)
        {
            Port = _smtpPort,
            Credentials = new NetworkCredential(_emailFrom, _emailPassword),
            EnableSsl = true
        };
        await smtpClient.SendMailAsync(mailMessage);
    }
}