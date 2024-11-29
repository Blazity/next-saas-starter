namespace TertuliatalkAPI.Entities;

public class IEntity
{
    protected IEntity()
    {
        Id = Guid.NewGuid();
    }

    public Guid Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
}