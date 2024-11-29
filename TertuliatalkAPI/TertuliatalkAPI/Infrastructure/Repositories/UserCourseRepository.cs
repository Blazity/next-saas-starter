using Microsoft.EntityFrameworkCore;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Infrastructure.Interfaces;
using TertuliatalkAPI.Infrastructure.Repositories.Interfaces;

namespace TertuliatalkAPI.Infrastructure.Repositories;

public class UserCourseRepository : IUserCourseRepository
{
    private readonly TertuliatalksDbContext _context;
    private readonly IRedisCacheService _cacheService;

    public UserCourseRepository(TertuliatalksDbContext context, IRedisCacheService cacheService)
    {
        _context = context;
        _cacheService = cacheService;
    }

    public async Task<List<UserCourse>> GetAllUserCoursesAsync()
    {
        return await _context.UserCourses.ToListAsync();
    }

    public async Task<UserCourse?> GetUserCourseAsync(Guid userId, Guid courseId)
    {
        return await _context.UserCourses.FirstOrDefaultAsync(uc => uc.UserId == userId && uc.CourseId == courseId);
    }

    public async Task<UserCourse> AddUserCourseAsync(UserCourse userCourse)
    {
        var newUserCourse = _context.UserCourses.Add(userCourse).Entity;
        await _context.SaveChangesAsync();

        return newUserCourse;
    }

    public async Task UpdateCourseAsync(UserCourse userCourse)
    {
        _context.UserCourses.Update(userCourse);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteUserCourseAsync(UserCourse userCourse)
    {
        _context.UserCourses.Remove(userCourse);
        await _context.SaveChangesAsync();
    }
}