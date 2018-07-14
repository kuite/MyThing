using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class IdeasController : Controller
    {
        [HttpGet]
        public JsonResult GetIdeasByCategory(string category)
        {
            return new JsonResult("Requested category: " + category);
        }

        [HttpPost]
        public JsonResult SubmitIdea(string ideaText)
        {
            return new JsonResult("Send idea: " + ideaText);
        }
    }
}
