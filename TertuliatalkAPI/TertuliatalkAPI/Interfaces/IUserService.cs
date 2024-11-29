using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Interfaces;

public interface IUserService
{
    Task<User> AddUser(User user);
    Task<List<User>> GetUsers();
    Task<User?> GetUser(Guid id);
    Task<User?> GetUserByEmail(string email);
    Task<User> UpdateUser(Guid Id, UserUpdateRequest userUpdateRequest);
}