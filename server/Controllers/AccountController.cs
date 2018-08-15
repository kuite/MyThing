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
using Microsoft.AspNetCore.Authorization;
using webapi.Controllers.ViewModels;

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("RegisterUser")]
        [ValidateModel]
        public async Task<IActionResult> RegisterUserAsync([FromBody]RegisterUserForm form)
        {
            var result = await _userService.RegisterUserAsync(form);

            if (!result.Succeeded) return new BadRequestObjectResult(new ApiError("something gone wrong"));

            return Ok(result);
        }

        [HttpPost("login")]
        [ValidateModel]
        public async Task<IActionResult> Login([FromBody]LoginForm credentials)
        {
            string token = await _userService.GetTokenAsync(credentials);

            return Ok(token);
            //expires_in in [s]
        }

        [HttpPost("refreshToken")]
        [Authorize(Policy = "ApiUser")]
        [ValidateModel]
        public async Task<IActionResult> RefreshToken([FromBody]UserDataForm userData)
        {
            string token = await _userService.ExtendTokenAsync(userData.UserName, userData.Email, userData.UserId);

            return Ok(token);
        }
    }
}