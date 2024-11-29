namespace TertuliatalkAPI.Entities;

public class UserCourse
{
    public Guid UserId { get; set; }

    public Guid CourseId { get; set; }

    public Guid Id { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public virtual Course Course { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}