using LinqToDB;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Exceptions;
using TertuliatalkAPI.Infrastructure.Repositories.Interfaces;
using TertuliatalkAPI.Interfaces;

namespace TertuliatalkAPI.Services;

public class InstructorService : IInstructorService
{
    private readonly IInstructorRepository _instructorRepository;

    public InstructorService(IInstructorRepository instructorRepository)
    {
        _instructorRepository = instructorRepository;
    }

    public async Task<Instructor> AddInstructor(Instructor instructor)
    {
        return await _instructorRepository.AddInstructorAsync(instructor);
    }

    public async Task<List<Instructor>> GetAllInstructors()
    {
        return await _instructorRepository.GetAllInstructorsAsync();
    }

    public async Task<Instructor> GetInstructorById(Guid instructorId)
    {
        var instructor = await _instructorRepository.GetInstructorByIdAsync(instructorId);
        if (instructor == null)
            throw new NotFoundException($"Instructor with ID {instructorId} not found");

        return instructor;
    }

    public async Task<Instructor> GetInstructorByEmail(string email)
    {
        var instructor = await _instructorRepository.GetInstructorByEmail(email);
        if (instructor == null)
            throw new NotFoundException($"Instructor with Email {email} not found");

        return instructor;
    }
}