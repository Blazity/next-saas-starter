namespace TertuliatalkAPI.Models;

public class UserUpdateRequest
{
    public string Name { get; set; }
    public string Email { get; set; }
    public int Age { get; set; }
    public string Hobbies { get; set; }
    public string LanguageLevel { get; set; }
    public IFormFile? ProfilePicture { get; set; }
}