using Microsoft.EntityFrameworkCore;
using Quartz;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Interfaces;

namespace TertuliatalkAPI.Infrastructure;

public class CourseReminderService : IJob
{
    private readonly TertuliatalksDbContext _context;
    private readonly IEmailService _emailService;
    private readonly ILogger<CourseReminderService> _logger;

    public CourseReminderService(TertuliatalksDbContext context, ILogger<CourseReminderService> logger,
        IEmailService emailService)
    {
        _logger = logger;
        _context = context;
        _emailService = emailService;
    }

    public async Task Execute(IJobExecutionContext context)
    {
        var upcomingCourses = await GetUpcomingCoursesAsync();

        foreach (var course in upcomingCourses) await SendRemindersForCourseAsync(course);
    }

    private async Task<List<Course>> GetUpcomingCoursesAsync()
    {
        var now = DateTime.UtcNow;
        var fiveMinutesLater = now.AddMinutes(5);

        return await _context.Courses
            .Where(c => c.StartDate >= now && c.StartDate <= fiveMinutesLater && c.Status == "Active")
            .Include(c => c.UserCourses)
            .ThenInclude(uc => uc.User)
            .ToListAsync();
    }

    private async Task SendRemindersForCourseAsync(Course course)
    {
        foreach (var userCourse in course.UserCourses)
            if (userCourse.CourseId == course.Id)
            {
                var user = userCourse.User;
                await _emailService.SendCourseReminderEmailAsync(user.Name, user.Email, course.Title, course.StartDate);

                _logger.LogInformation("A reminder email was sent to User: {UserId}. [{Date}]", user.Id,
                    DateTime.UtcNow);
            }
    }
}