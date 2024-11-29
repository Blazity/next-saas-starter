using System.Text.Json.Serialization;

namespace TertuliatalkAPI.Entities;

public class Instructor
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Branch { get; set; }

    public Guid? PaymentId { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? Role { get; set; }

    [JsonIgnore] public virtual ICollection<Course> Courses { get; set; } = new List<Course>();

    public virtual InstructorPayment? InstructorPayment { get; set; }
}