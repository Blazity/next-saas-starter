using LinqToDB;
using Quartz;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Infrastructure;

public class CourseStatusUpdaterService : IJob
{
    private readonly TertuliatalksDbContext _context;
    private readonly ILogger<CourseStatusUpdaterService> _logger;

    public CourseStatusUpdaterService(TertuliatalksDbContext context, ILogger<CourseStatusUpdaterService> logger)
    {
        _logger = logger;
        _context = context;
    }

    public async Task Execute(IJobExecutionContext context)
    {
        var coursesToUpdate = await GetCoursesToUpdateAsync();

        foreach (var course in coursesToUpdate) UpdateCourseStatus(course);

        if (coursesToUpdate.Any()) await _context.SaveChangesAsync();
    }

    private async Task<List<Course>> GetCoursesToUpdateAsync()
    {
        var now = DateTime.UtcNow;

        return await _context.Courses
            .Where(c => c.StartDate <= now && (c.Status == CourseStatus.Active || c.Status == CourseStatus.Started))
            .ToListAsync();
    }

    private void UpdateCourseStatus(Course course)
    {
        var now = DateTime.UtcNow;

        if (course.Status != CourseStatus.Started && course.StartDate <= now)
        {
            course.UpdatedDate = now;
            course.Status = CourseStatus.Started;

            _logger.LogInformation("Course {CourseId} updated status to {Status}. [{Date}]", course.Id,
                CourseStatus.Started, now);
        }
        else if (course.StartDate + course.Duration <= now)
        {
            course.UpdatedDate = now;
            course.Status = CourseStatus.Finished;

            _logger.LogInformation("Course {CourseId} updated status to {Status}. [{Date}]", course.Id,
                CourseStatus.Finished, now);
        }
    }
}