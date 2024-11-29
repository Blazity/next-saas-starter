namespace TertuliatalkAPI.Entities;

public class InstructorPayment
{
    public Guid Id { get; set; }

    public Guid InstructorId { get; set; }

    public string CardHolder { get; set; } = null!;

    public string Iban { get; set; } = null!;

    public DateTime CreatedDate { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public virtual Instructor Instructor { get; set; } = null!;
}