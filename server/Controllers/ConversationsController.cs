using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using webapi.Infrastructure;
using webapi.Model.Domain;
using webapi.Model.Common;
using webapi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class ConversationsController : Controller
    {
        private readonly IConversationService _conversationService;
        private readonly ICommentService _commentService;
        private readonly PagingOptions _defaultPagingOptions;

        public ConversationsController(
            IConversationService conversationService,
            ICommentService commentService,
            IOptions<PagingOptions> defaultPagingOptionsAccessor)
        {
            _conversationService = conversationService;
            _commentService = commentService;
            _defaultPagingOptions = defaultPagingOptionsAccessor.Value;
        }

        [HttpGet(Name = nameof(GetConversationsAsync))]
        [ValidateModel]
        public async Task<IActionResult> GetConversationsAsync(
            [FromQuery] PagingOptions pagingOptions)
        {
            pagingOptions.Offset = pagingOptions?.Offset ?? _defaultPagingOptions.Offset;
            pagingOptions.Limit = pagingOptions?.Limit ?? _defaultPagingOptions.Limit;

            var conversations = await _conversationService.GetConversationsAsync(
                pagingOptions);

            // var collection = CollectionWithPaging<ConversationResource>.Create(
            //     Link.ToCollection(nameof(GetConversationsAsync)),
            //     conversations.Items.ToArray(),
            //     conversations.TotalSize,
            //     pagingOptions);

            return Ok(conversations);
        }

        [HttpGet("{conversationId}", Name = nameof(GetConversationByIdAsync))]
        [ValidateModel]
        public async Task<IActionResult> GetConversationByIdAsync(int conversationId)
        {
            Guid conversationGuidId = Helpers.ToGuid(conversationId);
            if (conversationGuidId == Guid.Empty) return NotFound();

            var conversation = await _conversationService.GetConversationAsync(conversationGuidId);
            if (conversation == null) return NotFound();

            return Ok(conversation);
        }

        [HttpGet("{conversationId}/comments", Name = nameof(GetConversationCommentsByIdAsync))]
        [ValidateModel]
        public async Task<IActionResult> GetConversationCommentsByIdAsync(
            int conversationId,
            [FromQuery] PagingOptions pagingOptions)
        {
            Guid conversationGuidId = Helpers.ToGuid(conversationId);

            pagingOptions.Offset = pagingOptions?.Offset ?? _defaultPagingOptions.Offset;
            pagingOptions.Limit = pagingOptions?.Limit ?? _defaultPagingOptions.Limit;

            var conversationComments = await _commentService.GetCommentsAsync(conversationGuidId, pagingOptions);

            var collection = CollectionWithPaging<CommentResource>.Create(
                Link.ToCollection(
                    nameof(GetConversationCommentsByIdAsync),
                    conversationGuidId),
                conversationComments.Items.ToArray(),
                conversationComments.TotalSize,
                pagingOptions);

            return Ok(collection);
        }
    }
}
