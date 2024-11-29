namespace TertuliatalkAPI.Infrastructure.Interfaces;

public interface IRedisCacheService
{
    Task<T?> GetAsync<T>(string key);
    Task SetAsync<T>(string key, T value, TimeSpan expirationTime);
    Task RemoveAsync(string key);
}