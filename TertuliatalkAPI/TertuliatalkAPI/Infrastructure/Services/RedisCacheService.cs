using System.Text.Json;
using System.Text.Json.Serialization;
using StackExchange.Redis;
using TertuliatalkAPI.Infrastructure.Interfaces;

namespace TertuliatalkAPI.Infrastructure;

public class RedisCacheService : IRedisCacheService
{
    private readonly IConnectionMultiplexer _redis;

    public RedisCacheService(IConnectionMultiplexer redis)
    {
        _redis = redis;
    }

    public async Task<T?> GetAsync<T>(string key)
    {
        var db = _redis.GetDatabase();
        var cachedValue = await db.StringGetAsync(key);
        if (!cachedValue.HasValue)
            return default;
        
        var options = new JsonSerializerOptions
        {
            ReferenceHandler = ReferenceHandler.Preserve,
            PropertyNameCaseInsensitive = true
        };

        return JsonSerializer.Deserialize<T>(cachedValue, options);
    }

    public async Task SetAsync<T>(string key, T value, TimeSpan expirationTime)
    {
        var db = _redis.GetDatabase();
        var options = new JsonSerializerOptions
        {
            ReferenceHandler = ReferenceHandler.Preserve,
        };
        var serializedValue = JsonSerializer.Serialize(value, options);
        await db.StringSetAsync(key, serializedValue, expirationTime);
    }

    public async Task RemoveAsync(string key)
    {
        var db = _redis.GetDatabase();
        await db.KeyDeleteAsync(key);
    }
}