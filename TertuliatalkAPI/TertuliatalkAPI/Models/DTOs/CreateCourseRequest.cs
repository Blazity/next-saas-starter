namespace TertuliatalkAPI.Models;

public class CreateCourseRequest
{
    public string Title { get; set; } = null!;

    public string Description { get; set; } = null!;

    public int? Participants { get; set; }

    public int? MaxParticipants { get; set; }

    public IFormFile? Document { get; set; }

    public DateTime StartDate { get; set; }

    public TimeSpan Duration { get; set; }
}