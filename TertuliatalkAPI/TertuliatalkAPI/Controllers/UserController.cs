using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TertuliatalkAPI.Base;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Exceptions;
using TertuliatalkAPI.Interfaces;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<ActionResult<ApiResponse<List<User>>>> GetUsers()
    {
        var response = await _userService.GetUsers();
        return Ok(new ApiResponse<List<User>>(response));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ApiResponse<User?>>> GetUser(Guid id)
    {
        var response = await _userService.GetUser(id);
        return Ok(new ApiResponse<User?>(response));
    }

    [HttpPost("{id}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<User>>> UpdateUser(Guid id, [FromBody] UserUpdateRequest userUpdateRequest)
    {
        var response = await _userService.UpdateUser(id, userUpdateRequest);
        return Ok(new ApiResponse<User>(response));
    }
}