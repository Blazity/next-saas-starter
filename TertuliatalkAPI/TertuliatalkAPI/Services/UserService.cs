using Microsoft.EntityFrameworkCore;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Exceptions;
using TertuliatalkAPI.Infrastructure.Repositories.Interfaces;
using TertuliatalkAPI.Interfaces;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IAuthService _authService;

    public UserService(IUserRepository userRepository, IAuthService authService)
    {
        _userRepository = userRepository;
        _authService = authService;
    }

    public async Task<User> AddUser(User user)
    {
        return await _userRepository.AddUserAsync(user);
    }

    public async Task<List<User>> GetUsers()
    {
        return await _userRepository.GetAllUsersAsync();
    }

    public async Task<User?> GetUser(Guid id)
    {
        var user =  await _userRepository.GetUserByIdAsync(id);
        if (user == null)
            throw new NotFoundException($"User with ID {id} not found");

        return user;
    }

    public async Task<User?> GetUserByEmail(string email)
    {
        var user = await _userRepository.GetUserByEmail(email);
        if (user == null)
            throw new NotFoundException($"User with Email {email} not found");
        
        return user;
    }
    
    public async Task<User> UpdateUser(Guid Id, UserUpdateRequest userUpdateRequest)
    {
        var authUser = _authService.GetLoggedUser().Result;
        if (authUser.Id != Id)
            throw new UnauthorizedException("You are not authorized to update this user's information.");

        var user = await _userRepository.GetUserByIdAsync(Id);
        if (user == null)
            throw new NotFoundException($"User with Email {Id} not found");

        user.Name = userUpdateRequest.Name;
        user.Email = userUpdateRequest.Email;
        user.Age = userUpdateRequest.Age;
        user.Hobbies = userUpdateRequest.Hobbies;
        user.LanguageLevel = userUpdateRequest.LanguageLevel;

        await _userRepository.UpdateUserAsync(user);

        return user;
    }
}