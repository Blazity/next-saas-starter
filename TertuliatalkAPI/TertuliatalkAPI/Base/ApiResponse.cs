namespace TertuliatalkAPI.Base;

public class ApiResponse<T>
{
    public ApiResponse(T data)
    {
        Data = data;
        IsSuccess = true;
        Error = null;
    }

    public ApiResponse(string message)
    {
        Data = default!;
        IsSuccess = false;
        Error = message;
    }

    public T Data { get; set; }
    public string Error { get; set; }
    public bool IsSuccess { get; set; }
}