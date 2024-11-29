namespace TertuliatalkAPI.Middlewares;

public class GlobalLogger
{
    private readonly ILogger<GlobalLogger> _logger;
    private readonly RequestDelegate _next;

    public GlobalLogger(RequestDelegate next, ILogger<GlobalLogger> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        _logger.LogInformation("Handling request: {requestMethod} {requestPath} [{date}]",
            context.Request.Method, context.Request.Path, DateTime.UtcNow);
        await _next(context);
    }
}