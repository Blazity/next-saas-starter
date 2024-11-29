using TertuliatalkAPI.Entities;
using TertuliatalkAPI.Exceptions;
using TertuliatalkAPI.Infrastructure;
using TertuliatalkAPI.Infrastructure.Repositories.Interfaces;
using TertuliatalkAPI.Interfaces;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Services;

public class CourseService : ICourseService
{
    private readonly IAuthService _authService;
    private readonly IEmailService _emailService;
    private readonly ILogger<CourseService> _logger;
    private readonly ICourseRepository _courseRepository;
    private readonly IUserCourseRepository _userCourseRepository;
    private readonly IUserRepository _userRepository;
    private readonly FileUploadService _fileUploadService;

    public CourseService(ILogger<CourseService> logger, IAuthService authService,
        IEmailService emailService, ICourseRepository courseRepository,
        IUserCourseRepository userCourseRepository, IUserRepository userRepository, FileUploadService fileUploadService)
    {
        _logger = logger;
        _authService = authService;
        _emailService = emailService;
        _userRepository = userRepository;
        _courseRepository = courseRepository;
        _fileUploadService = fileUploadService;
        _userCourseRepository = userCourseRepository;
    }

    public async Task<List<Course>> GetAllCourses()
    {
        return await _courseRepository.GetAllCoursesAsync();
    }

    public async Task<Course> GetCourseById(Guid courseId)
    {
        var course = await _courseRepository.GetCourseByIdAsync(courseId);
        if (course == null)
            throw new NotFoundException($"Course with ID {courseId} not found");

        return course;
    }

    public async Task<List<Course>> GetCoursesByDateRange(DateTime startDate, DateTime endDate)
    {
        var utcStartDate = DateTime.SpecifyKind(startDate, DateTimeKind.Utc);
        var utcEndDate = DateTime.SpecifyKind(endDate, DateTimeKind.Utc);

        return await _courseRepository.GetCoursesByDateRangeAsync(utcStartDate, utcEndDate);
    }

    public async Task<Course> CreateCourse(CreateCourseRequest request)
    {
        var instructor = await _authService.GetLoggedInstructor();

        string fileUrl = null;
        if (request.Document != null)
            fileUrl = await _fileUploadService.UploadFileAsync(request.Document);
        
        var course = new Course(
            request.Title,
            request.Description,
            fileUrl,
            request.MaxParticipants,
            request.StartDate,
            request.Duration,
            instructor.Id
        );

        var newCourse = await _courseRepository.AddCourseAsync(course);

        return newCourse;
    }

    public async Task DeleteCourse(Guid courseId)
    {
        var instructor = await _authService.GetLoggedInstructor();

        var course = await GetCourseById(courseId);

        if (course.InstructorId != instructor.Id)
            throw new UnauthorizedException("You are not authorized to access this course.");

        await _courseRepository.DeleteCourseAsync(course);
    }

    public async Task<Course> AddUserToCourse(Guid courseId)
    {
        var course = await GetCourseById(courseId);
        var user = await _authService.GetLoggedUser();
        var hasJoinedCourse = await HasUserJoinedInCourse(course.Id, user.Id);

        if (course.Status == "Started")
            throw new InvalidOperationException("This course has started.");

        if (course.MaxParticipants == course.Participants)
            throw new InvalidOperationException("The course has reached the maximum number of participants.");

        if (hasJoinedCourse)
            throw new InvalidOperationException("User is already join in this course.");

        var userCourse = new UserCourse
        {
            UserId = user.Id,
            CourseId = course.Id
        };
        await _userCourseRepository.AddUserCourseAsync(userCourse);

        course.Participants++;
        await _courseRepository.UpdateCourseAsync(course);

        await _emailService.SendCourseJoinEmailAsync(user.Name, user.Email, course.Title);

        return course;
    }

    public async Task<Course> RemoveUserToCourse(Guid courseId)
    {
        var course = await GetCourseById(courseId);
        var user = await _authService.GetLoggedUser();

        var hasJoinedCourse = await HasUserJoinedInCourse(course.Id, user.Id);

        if (!hasJoinedCourse)
            throw new InvalidOperationException("User is not in the this course.");

        var userCourse = await _userCourseRepository.GetUserCourseAsync(user.Id, course.Id);

        await _userCourseRepository.DeleteUserCourseAsync(userCourse);

        course.Participants--;
        await _courseRepository.UpdateCourseAsync(course);

        return course;
    }

    public async Task<bool> HasUserJoinedInCourse(Guid courseId, Guid userId)
    {
        var user = await _userRepository.GetUserByIdAsync(userId);
        foreach (var userCourse in user.UserCourses)
            if (userCourse.CourseId == courseId)
                return true;
        return false;
    }
}