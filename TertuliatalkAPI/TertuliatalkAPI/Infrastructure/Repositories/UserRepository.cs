using Microsoft.EntityFrameworkCore;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Infrastructure.Interfaces;
using TertuliatalkAPI.Infrastructure.Repositories.Interfaces;

namespace TertuliatalkAPI.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    private readonly TertuliatalksDbContext _context;
    private readonly IRedisCacheService _cacheService;

    public UserRepository(TertuliatalksDbContext context, IRedisCacheService redisCacheService)
    {
        _context = context;
        _cacheService = redisCacheService;
    }

    public async Task<List<User>> GetAllUsersAsync()
    {
        return await _context.Users
            .Include(u => u.UserCourses)
            .ToListAsync();
    }

    public async Task<User?> GetUserByIdAsync(Guid userId)
    {
        return await _context.Users
            .Include(u => u.UserCourses)
            .ThenInclude(uc => uc.Course)
            .FirstOrDefaultAsync(u => u.Id == userId);
    }

    public async Task<User?> GetUserByEmail(string email)
    {
        return await _context.Users
            .Include(u => u.UserCourses)
            .ThenInclude(uc => uc.Course)
            .FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task<User> AddUserAsync(User user)
    {
        var newUser = _context.Users.Add(user).Entity;
        await _context.SaveChangesAsync();

        return newUser;
    }

    public async Task UpdateUserAsync(User user)
    {
        _context.Users.Update(user);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteUserAsync(User user)
    {
        _context.Users.Remove(user);
        await _context.SaveChangesAsync();
    }
}