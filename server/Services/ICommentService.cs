using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;

namespace webapi.Services
{
    public interface ICommentService
    {
        Task<CommentResource> GetCommentAsync(Guid id);

        Task<Page<CommentResource>> GetCommentsAsync(
            Guid? conversationId,
            PagingOptions pagingOptions);
    }
}
