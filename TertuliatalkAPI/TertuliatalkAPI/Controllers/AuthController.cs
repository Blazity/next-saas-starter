using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using TertuliatalkAPI.Base;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Interfaces;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<UserLoginResponse>>> LoginUser([FromBody] UserLoginRequest request)
    {
        var response = await _authService.LoginUser(request);
        return Ok(new ApiResponse<UserLoginResponse>(response));
    }

    [HttpPost("instructor-login")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<InstructorLoginResponse>>> LoginInstructor(
        [FromBody] InstructorLoginRequest request)
    {
        var response = await _authService.LoginInstructor(request);
        return Ok(new ApiResponse<InstructorLoginResponse>(response));
    }

    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<EntityEntry<User>>>> RegisterUser([FromBody] UserRegisterRequest request)
    {
        var response = await _authService.RegisterUser(request);
        return Ok(new ApiResponse<User?>(response));
    }

    [HttpGet("get-logged-user")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<User>>> GetLoggedUser()
    {
        var response = await _authService.GetLoggedUser();
        return Ok(new ApiResponse<User>(response));
    }
    
    [HttpGet("get-logged-instructor")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<Instructor>>> GetLoggedInstructor()
    {
        var response = await _authService.GetLoggedInstructor();
        return Ok(new ApiResponse<Instructor>(response));
    }
}