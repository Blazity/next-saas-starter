using TertuliatalkAPI.Entities;

namespace TertuliatalkAPI.Infrastructure.Repositories.Interfaces;

public interface IUserCourseRepository
{
    Task<List<UserCourse>> GetAllUserCoursesAsync();
    Task<UserCourse?> GetUserCourseAsync(Guid userId, Guid courseId);
    Task<UserCourse> AddUserCourseAsync(UserCourse userCourse);
    Task UpdateCourseAsync(UserCourse userCourse);
    Task DeleteUserCourseAsync(UserCourse userCourse);
}