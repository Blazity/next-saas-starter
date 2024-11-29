using LinqToDB;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Infrastructure.Interfaces;
using TertuliatalkAPI.Infrastructure.Repositories.Interfaces;

namespace TertuliatalkAPI.Infrastructure.Repositories;

public class IntructorRepository : IInstructorRepository
{
    private readonly TertuliatalksDbContext _context;
    private readonly IRedisCacheService _cacheService;

    public IntructorRepository(TertuliatalksDbContext context, IRedisCacheService cacheService)
    {
        _context = context;
        _cacheService = cacheService;
    }

    public async Task<List<Instructor>> GetAllInstructorsAsync()
    {
        return await _context.Instructors.ToListAsync();
    }

    public async Task<Instructor?> GetInstructorByIdAsync(Guid instructorId)
    {
        return await _context.Instructors.FindAsync(instructorId);
    }

    public async Task<Instructor?> GetInstructorByEmail(string email)
    {
        return await _context.Instructors.FirstOrDefaultAsync(c => c.Email == email);
    }

    public async Task<Instructor> AddInstructorAsync(Instructor instructor)
    {
        var newInstructor = _context.Instructors.Add(instructor).Entity;
        await _context.SaveChangesAsync();

        return instructor;
    }

    public async Task UpdateInstructorAsync(Instructor instructor)
    {
        _context.Instructors.Update(instructor);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteInstructorAsync(Instructor instructor)
    {
        _context.Instructors.Remove(instructor);
        await _context.SaveChangesAsync();
    }
}