using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class FundController : Controller
    {
        [HttpGet]
        public JsonResult GetFundsByCategory(string category)
        {
            return new JsonResult("Requested category: " + category);
        }

        [HttpPost]
        public JsonResult SubmitFund(string ideaText)
        {
            return new JsonResult("Send idea: " + ideaText);
        }
    }
}
