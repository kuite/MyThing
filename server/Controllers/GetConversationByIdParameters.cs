using System;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    public class GetConversationByIdParameters
    {
        [FromRoute]
        public Guid ConversationId { get; set; }
    }
}