using webapi.Model;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [Route("/")]
    public class RootController : Controller
    {
        [HttpGet(Name = nameof(GetRoot))]
        public IActionResult GetRoot()
        {
            var response = new RootResource
            {
                Self = Link.To(nameof(GetRoot)),
                Conversations = Link.ToCollection(nameof(ConversationsController.GetConversationsAsync)),
                Comments = Link.ToCollection(nameof(CommentsController.GetCommentsAsync))
            };

            return Ok(response);
        }
    }
}
