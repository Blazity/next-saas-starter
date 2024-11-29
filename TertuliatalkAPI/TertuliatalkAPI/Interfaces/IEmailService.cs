namespace TertuliatalkAPI.Interfaces;

public interface IEmailService
{
    public Task SendCourseJoinEmailAsync(string userName, string userEmail, string courseTitle);

    public Task SendCourseReminderEmailAsync(string userName, string userEmail, string courseTitle,
        DateTime courseStartDate);
}