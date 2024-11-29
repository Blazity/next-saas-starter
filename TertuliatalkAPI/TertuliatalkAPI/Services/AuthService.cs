using System.Security.Claims;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Exceptions;
using TertuliatalkAPI.Infrastructure.Repositories.Interfaces;
using TertuliatalkAPI.Interfaces;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Services;

public class AuthService : IAuthService
{
    private readonly ITokenService _tokenService;
    private readonly IUserRepository _userRepository;
    private readonly IInstructorRepository _instructorRepository;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AuthService(IUserRepository userRepository, ITokenService tokenService,
        IHttpContextAccessor httpContextAccessor, IInstructorRepository instructorRepository)
    {
        _tokenService = tokenService;
        _userRepository = userRepository;
        _httpContextAccessor = httpContextAccessor;
        _instructorRepository = instructorRepository;
    }

    public async Task<UserLoginResponse> LoginUser(UserLoginRequest request)
    {
        var user = await _userRepository.GetUserByEmail(request.Email);
        if (user == null)
            throw new NotFoundException($"User with Email {request.Email} not found");

        var verified = BCrypt.Net.BCrypt.Verify(request.Password, user.Password);
        if (!verified)
            throw new UnauthorizedException("Wrong Password or Email.");

        var generatedTokenInformation =
            await _tokenService.GenerateToken(new GenerateTokenRequest { Email = user.Email, Role = user.Role });

        UserLoginResponse response = new()
        {
            AccessTokenExpireDate = generatedTokenInformation.TokenExpireDate,
            AuthenticateResult = true,
            AuthToken = generatedTokenInformation.Token,
            Role = user.Role
        };

        return response;
    }

    public async Task<InstructorLoginResponse> LoginInstructor(InstructorLoginRequest request)
    {
        var instructor = await _instructorRepository.GetInstructorByEmail(request.Email);
        if (instructor == null)
            throw new NotFoundException($"Instructor with Email {request.Email} not found");

        var verified = BCrypt.Net.BCrypt.Verify(request.Password, instructor.Password);
        if (!verified)
            throw new UnauthorizedException("Wrong Password or Email.");

        var generatedTokenInformation =
            await _tokenService.GenerateToken(new GenerateTokenRequest
                { Email = instructor.Email, Role = instructor.Role });

        InstructorLoginResponse response = new()
        {
            AccessTokenExpireDate = generatedTokenInformation.TokenExpireDate,
            AuthenticateResult = true,
            AuthToken = generatedTokenInformation.Token,
            Role = instructor.Role
        };

        return response;
    }

    public async Task<User?> RegisterUser(UserRegisterRequest request)
    {
        var userEmailExist = await _userRepository.GetUserByEmail(request.Email);
        if (userEmailExist != null)
            throw new BadRequestException("User email must be unique!");

        User? user = new()
        {
            Name = request.Name,
            Email = request.Email,
            Password = BCrypt.Net.BCrypt.HashPassword(request.Password)
        };

        return await _userRepository.AddUserAsync(user);
    }

    public async Task<User> GetLoggedUser()
    {
        var userClaim = _httpContextAccessor.HttpContext?.User;

        var email = userClaim?.FindFirst(ClaimTypes.Email)?.Value;
        if (email == null)
            throw new UnauthorizedAccessException("User email is not available in token");

        var user = await _userRepository.GetUserByEmail(email);
        if (user == null)
            throw new NotFoundException("User not found");

        return user;
    }

    public async Task<Instructor> GetLoggedInstructor()
    {
        var userClaim = _httpContextAccessor.HttpContext?.User;

        var email = userClaim?.FindFirst(ClaimTypes.Email)?.Value;
        if (email == null)
            throw new UnauthorizedAccessException("User email is not available in token");

        var instructor = await _instructorRepository.GetInstructorByEmail(email);
        if (instructor == null)
            throw new NotFoundException("Instructor not found");

        return instructor;
    }
}