using System;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    public class GetCommentByIdParameters
    {
        [FromRoute]
        public Guid CommentId { get; set; }
    }
}