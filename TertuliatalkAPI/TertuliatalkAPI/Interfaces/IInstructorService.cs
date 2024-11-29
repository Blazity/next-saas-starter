using TertuliatalkAPI.Entities;

namespace TertuliatalkAPI.Interfaces;

public interface IInstructorService
{
    Task<Instructor> AddInstructor(Instructor instructor);
    Task<List<Instructor>> GetAllInstructors();
    Task<Instructor> GetInstructorById(Guid instructorId);
    Task<Instructor> GetInstructorByEmail(string email);
}