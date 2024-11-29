using TertuliatalkAPI.Entities;

namespace TertuliatalkAPI.Infrastructure.Repositories.Interfaces;

public interface IInstructorRepository
{
    Task<List<Instructor>> GetAllInstructorsAsync();
    Task<Instructor?> GetInstructorByIdAsync(Guid instructorId);
    Task<Instructor?> GetInstructorByEmail(string email);
    Task<Instructor> AddInstructorAsync(Instructor user);
    Task UpdateInstructorAsync(Instructor user);
    Task DeleteInstructorAsync(Instructor user);
}