using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using webapi.Model.Domain;
using webapi.Model.Database;
using webapi.Model.Common;
using webapi.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace webapi.Services
{
    public sealed class FundService : IFundService
    {
        private readonly ApiDbContext _context;

        public FundService(ApiDbContext context)
        {
            _context = context;
        }

        public async Task<Fund> GetFundAsync(Guid id)
        {
            var entity = await _context
                .Funds
                .SingleOrDefaultAsync(x => x.Id == id);

            return Mapper.Map<Fund>(entity);
        }

        public async Task<Page<Fund>> GetFundsAsync(
            Guid? fundId,
            PagingOptions pagingOptions)
        {
            IQueryable<FundEntity> query = _context.Funds;

            if (fundId != null)
            {
                query = query.Where(x => x.Id == fundId);
            }

            // todo apply search
            // todo apply sort

            var size = await query.CountAsync();

            var items = await query
                .Skip(pagingOptions.Offset.Value)
                .Take(pagingOptions.Limit.Value)
                .ProjectTo<Fund>()
                .ToArrayAsync();

            return new Page<Fund>
            {
                Items = items,
                TotalSize = size
            };
        }
    }
}
