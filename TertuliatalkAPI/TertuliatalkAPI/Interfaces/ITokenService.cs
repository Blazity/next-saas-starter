using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Interfaces;

public interface ITokenService
{
    public Task<GenerateTokenResponse> GenerateToken(GenerateTokenRequest request);
}