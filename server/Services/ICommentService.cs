using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model;

namespace webapi.Services
{
    public interface ICommentService
    {
        Task<CommentResource> GetCommentAsync(Guid id, CancellationToken ct);

        Task<Page<CommentResource>> GetCommentsAsync(
            Guid? conversationId,
            PagingOptions pagingOptions,
            CancellationToken ct);
    }
}
