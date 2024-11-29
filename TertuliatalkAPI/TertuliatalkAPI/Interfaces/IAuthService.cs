using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Interfaces;

public interface IAuthService
{
    public Task<UserLoginResponse> LoginUser(UserLoginRequest request);
    public Task<InstructorLoginResponse> LoginInstructor(InstructorLoginRequest request);
    public Task<User?> RegisterUser(UserRegisterRequest request);
    public Task<User> GetLoggedUser();
    public Task<Instructor> GetLoggedInstructor();
}