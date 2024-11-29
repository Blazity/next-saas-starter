namespace TertuliatalkAPI.Services;

public class InvalidOperationException : Exception
{
    public InvalidOperationException(string message) : base(message)
    {
    }
}