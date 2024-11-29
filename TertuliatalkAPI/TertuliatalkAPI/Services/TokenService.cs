using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using TertuliatalkAPI.Interfaces;
using TertuliatalkAPI.Models;

namespace TertuliatalkAPI.Services;

public class TokenService : ITokenService
{
    private readonly IConfiguration _configuration;

    public TokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public Task<GenerateTokenResponse> GenerateToken(GenerateTokenRequest request)
    {
        var symmetricSecurityKey =
            new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["AppSettings:Secret"]));

        var dateTimeNow = DateTime.UtcNow;

        // role based authorization
        var claims = new List<Claim>
        {
            new(ClaimTypes.Email, request.Email),
            new(ClaimTypes.Role, request.Role) // for role based auth
        };

        var jwt = new JwtSecurityToken(
            _configuration["AppSettings:ValidIssuer"],
            _configuration["AppSettings:ValidAudience"],
            claims,
            dateTimeNow,
            dateTimeNow.Add(TimeSpan.FromMinutes(550)),
            new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256)
        );

        return Task.FromResult(new GenerateTokenResponse
        {
            Token = new JwtSecurityTokenHandler().WriteToken(jwt),
            TokenExpireDate = dateTimeNow.Add(TimeSpan.FromMinutes(550))
        });
    }
}