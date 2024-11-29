using TertuliatalkAPI.Entities;

namespace TertuliatalkAPI.Infrastructure.Repositories.Interfaces;

public interface ICourseRepository
{
    Task<List<Course>> GetAllCoursesAsync();
    Task<Course?> GetCourseByIdAsync(Guid courseId);
    Task<List<Course>> GetCoursesByDateRangeAsync(DateTime startDate, DateTime endDate);
    Task<Course> AddCourseAsync(Course course);
    Task UpdateCourseAsync(Course course);
    Task DeleteCourseAsync(Course course);
}