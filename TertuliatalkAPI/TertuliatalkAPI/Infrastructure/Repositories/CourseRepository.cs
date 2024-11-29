using Microsoft.EntityFrameworkCore;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Infrastructure.Interfaces;
using TertuliatalkAPI.Infrastructure.Repositories.Interfaces;

namespace TertuliatalkAPI.Infrastructure.Repositories;

public class CourseRepository : ICourseRepository
{
    private readonly TertuliatalksDbContext _context;
    private readonly IRedisCacheService _cacheService;

    public CourseRepository(TertuliatalksDbContext context, IRedisCacheService cacheService)
    {
        _context = context;
        _cacheService = cacheService;
    }

    public async Task<List<Course>> GetAllCoursesAsync()
    {
        return await _context.Courses.Include(c => c.UserCourses).ToListAsync();
    }

    public async Task<Course?> GetCourseByIdAsync(Guid courseId)
    {
        return await _context.Courses.Include(c => c.Instructor)
            .Include(c => c.UserCourses)
            .FirstOrDefaultAsync(c => c.Id == courseId);
    }

    public async Task<List<Course>> GetCoursesByDateRangeAsync(DateTime startDate, DateTime endDate)
    {
        return await _context.Courses
            .Where(course => course.StartDate >= startDate && course.StartDate <= endDate)
            .Include(c => c.Instructor)
            .ToListAsync();
    }

    public async Task<Course> AddCourseAsync(Course course)
    {
        var newCourse = _context.Courses.Add(course).Entity;
        await _context.SaveChangesAsync();

        return newCourse;
    }

    public async Task UpdateCourseAsync(Course course)
    {
        _context.Courses.Update(course);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteCourseAsync(Course course)
    {
        _context.Courses.Remove(course);
        await _context.SaveChangesAsync();
    }
}