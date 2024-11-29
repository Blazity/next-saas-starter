namespace TertuliatalkAPI.Entities;

public class Subscription
{
    public Guid Id { get; set; }

    public Guid PackageId { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public int DurationInMonths { get; set; }

    public int RemainingSessions { get; set; }

    public bool IsTrial { get; set; }

    public string Status { get; set; } = null!;

    public Guid PackId { get; set; }

    public DateTime CreatedDate { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public virtual Pack Pack { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}