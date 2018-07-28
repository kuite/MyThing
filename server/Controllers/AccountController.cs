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

            if (!result.Succeeded) new BadRequestObjectResult(new ApiError("chuj dupa"));

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
    }
}