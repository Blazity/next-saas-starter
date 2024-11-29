using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using TertuliatalkAPI.Base;
using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Infrastructure;
using TertuliatalkAPI.Interfaces;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CourseController : ControllerBase
{
    private readonly ICourseService _courseService;
    
    public CourseController(ICourseService courseService)
    {
        _courseService = courseService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<ApiResponse<List<Course>>>> GetAllCourses()
    {
        var response = await _courseService.GetAllCourses();
        return Ok(new ApiResponse<List<Course>>(response));
    }

    [HttpGet("{id}")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<Course>>> GetCourseById(Guid id)
    {
        var response = await _courseService.GetCourseById(id);
        return Ok(new ApiResponse<Course>(response));
    }

    [HttpGet("get-by-date-range")]
    public async Task<ActionResult<ApiResponse<List<Course>>>> GetCourseByDateRange(DateTime startDate,
        DateTime endDate)
    {
        var response = await _courseService.GetCoursesByDateRange(startDate, endDate);
        return Ok(new ApiResponse<List<Course>>(response));
    }

    [HttpPost("create-course")]
    [Authorize(Roles = Roles.Instructor)]
    public async Task<ActionResult<ApiResponse<EntityEntry<Course>>>> CreateCourse(
        [FromForm] CreateCourseRequest request)
    {
        var response = await _courseService.CreateCourse(request);
        return Ok(new ApiResponse<Course>(response));
    }

    [HttpDelete]
    [Authorize(Roles = Roles.Instructor)]
    public async Task<ActionResult<ApiResponse<string>>> DeleteCourse(Guid courseId)
    {
        await _courseService.DeleteCourse(courseId);
        return Ok(new ApiResponse<string>($"{courseId} deleted!"));
    }

    [HttpPost("join-course")]
    [Authorize(Roles = Roles.Student)]
    public async Task<ActionResult<ApiResponse<Course>>> JoinCourse(Guid courseId)
    {
        var response = await _courseService.AddUserToCourse(courseId);
        return Ok(new ApiResponse<Course>(response));
    }

    [HttpPost("leave-course")]
    [Authorize(Roles = Roles.Student)]
    public async Task<ActionResult<ApiResponse<Course>>> LeaveCourse(Guid courseId)
    {
        var response = await _courseService.RemoveUserToCourse(courseId);
        return Ok(new ApiResponse<Course>(response));
    }
}