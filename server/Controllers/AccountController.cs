using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using webapi.Infrastructure;
using webapi.Model.Domain;
using webapi.Model.Common;
using webapi.Services;
using webapi.Services.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly DbContext _appDbContext;
        private readonly UserManager<UserEntity> _userManager;

        public AccountController(UserManager<UserEntity> userManager, DbContext appDbContext)
        {
            _userManager = userManager;
            _appDbContext = appDbContext;
        }

        [HttpPost("RegisterUser")]
        public async Task<IActionResult> RegisterUserAsync([FromBody]RegisterForm form)
        {
            UserEntity userIdentity = new UserEntity
            {
                Email = form.Email,
                UserName = form.Email,
                FirstName = form.FirstName,
                LastName = form.LastName,
            };

            var result = await _userManager.CreateAsync(userIdentity, form.Password);

            if (!result.Succeeded) new BadRequestObjectResult(new ApiError("chuj dupa"));

            await _appDbContext.Users.AddAsync(userIdentity);
            await _appDbContext.SaveChangesAsync();

            return Ok(result);
        }

        // private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        // {
        //     if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
        //         return await Task.FromResult<ClaimsIdentity>(null);

        //     // get the user to verifty
        //     var userToVerify = await _userManager.FindByNameAsync(userName);

        //     if (userToVerify == null) return await Task.FromResult<ClaimsIdentity>(null);

        //     // check the credentials
        //     if (await _userManager.CheckPasswordAsync(userToVerify, password))
        //     {
        //         return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
        //     }

        //     // Credentials are invalid, or account doesn't exist
        //     return await Task.FromResult<ClaimsIdentity>(null);
        // }
    }
}