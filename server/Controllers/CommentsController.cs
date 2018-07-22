using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using webapi.Infrastructure;
using webapi.Model.Database;
using webapi.Model.Domain;
using webapi.Model.Common;
using webapi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class CommentsController : Controller
    {
        private readonly ICommentService _commentService;
        private readonly PagingOptions _defaultPagingOptions;

        public CommentsController(
            ICommentService commentService,
            IOptions<PagingOptions> defaultPagingOptionsAccessor)
        {
            _commentService = commentService;
            _defaultPagingOptions = defaultPagingOptionsAccessor.Value;
        }

        [HttpGet(Name = nameof(GetCommentsAsync))]
        [ValidateModel]
        public async Task<IActionResult> GetCommentsAsync(
            [FromQuery] PagingOptions pagingOptions,
            CancellationToken ct)
        {
            pagingOptions.Offset = pagingOptions.Offset ?? _defaultPagingOptions.Offset;
            pagingOptions.Limit = pagingOptions.Limit ?? _defaultPagingOptions.Limit;

            var conversations = await _commentService.GetCommentsAsync(null, pagingOptions);

            var collection = CollectionWithPaging<CommentResource>.Create(
                Link.ToCollection(nameof(GetCommentsAsync)),
                conversations.Items.ToArray(),
                conversations.TotalSize,
                pagingOptions);

            return Ok(collection);
        }

        [HttpGet("{commentId}", Name = nameof(GetCommentByIdAsync))]
        [ValidateModel]
        public async Task<IActionResult> GetCommentByIdAsync(int commentId, CancellationToken ct)
        {
            Guid commentGuidId = Helpers.ToGuid(commentId);

            if (commentGuidId == Guid.Empty) return NotFound();

            var conversation = await _commentService.GetCommentAsync(commentGuidId);
            if (conversation == null) return NotFound();

            return Ok(conversation);
        }
    }
}
