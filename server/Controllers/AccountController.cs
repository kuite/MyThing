using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        // GET api/values
        // http://localhost:5000/api/Account
        [HttpGet]
        public JsonResult Login(string login, string password)
        {
            return new JsonResult("Login successfull for " + login);
        }

        [HttpGet]
        public JsonResult ForgetPassword(string login)
        {
            return new JsonResult("New password send for " + login);
        }

        [HttpGet]
        public JsonResult LogOut(string login)
        {
            return new JsonResult("Log out user " + login);
        }
    }
}
