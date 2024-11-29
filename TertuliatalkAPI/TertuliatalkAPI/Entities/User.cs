namespace TertuliatalkAPI.Entities;

public class User
{
    public Guid Id { get; set; }

    public Guid? SubscriptionId { get; set; }

    public string? StripeCustomerId { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public bool? IsActive { get; set; }

    public string? Role { get; set; }

    public string? ProfilePhotoUrl { get; set; }

    public int? TotalCourseTaken { get; set; }

    public int? Age { get; set; }

    public string? Hobbies { get; set; }

    public string? LanguageLevel { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public virtual Subscription? Subscription { get; set; }

    public virtual ICollection<UserCourse> UserCourses { get; set; } = new List<UserCourse>();
}