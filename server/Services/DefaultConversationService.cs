using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using webapi.Model.Domain;
using webapi.Model.Database;
using webapi.Model.Common;
using Microsoft.EntityFrameworkCore;

namespace webapi.Services
{
    public sealed class DefaultConversationService : IConversationService
    {
        private readonly ApiDbContext _context;

        public DefaultConversationService(ApiDbContext context)
        {
            _context = context;
        }

        public async Task<ConversationResource> GetConversationAsync(Guid id)
        {
            var entity = await _context
                .Conversations
                .SingleOrDefaultAsync(x => x.Id == id);

            return Mapper.Map<ConversationResource>(entity);
        }

        public async Task<Page<ConversationResource>> GetConversationsAsync(
            PagingOptions pagingOptions)
        {
            IQueryable<ConversationEntity> query = _context.Conversations;
            // todo apply search
            // todo apply sort

            var size = await query.CountAsync();

            var items = await query
                .Skip(pagingOptions.Offset.Value)
                .Take(pagingOptions.Limit.Value)
                .ProjectTo<ConversationResource>()
                .ToArrayAsync();

            return new Page<ConversationResource>
            {
                Items = items,
                TotalSize = size
            };
        }
    }
}
