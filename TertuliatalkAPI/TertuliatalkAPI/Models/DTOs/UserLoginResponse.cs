namespace TertuliatalkAPI.Models;

public class UserLoginResponse
{
    public bool AuthenticateResult { get; set; }
    public string AuthToken { get; set; }
    public DateTime AccessTokenExpireDate { get; set; }
    public string? Role { get; set; }
}