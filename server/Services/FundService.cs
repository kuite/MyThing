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
using webapi.Model.Database.Access;
using System.Collections.Generic;

namespace webapi.Services
{
    public sealed class FundService : IFundService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;

        public FundService(DatabaseContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Fund> GetFundAsync(string fundGuid)
        {
            Guid id = new Guid(fundGuid);
            var entity = await _context
                .Funds
                .SingleOrDefaultAsync(x => x.Id == id);

            return Mapper.Map<Fund>(entity);
        }

        public async Task<Page<Fund>> GetFundsAsync(
            string fundGuid,
            PagingOptions pagingOptions)
        {
            Guid id = new Guid(fundGuid);

            IQueryable<FundEntity> query = _context.Funds;

            if (id != null)
            {
                query = query.Where(x => x.Id == id);
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

        public async Task<List<Fund>> GetFundsByCategoriesAsync(FundCategories categories)
        {
            List<FundEntity> entities = new List<FundEntity>();
            List<string> searchCategories = categories.ToString().Split(", ").ToList();

            entities.AddRange( await _context
                    .Funds
                    .Where(x => HaveCommonItems(x.Categories, searchCategories)).ToListAsync());  

            return _mapper.Map<List<Fund>>(entities);
        }

        private bool HaveCommonItems(FundCategories categories, List<string> searchedCategories)
        {
            List<string> existingCategories = categories.ToString().Split(", ").ToList();
            return existingCategories.Any(cat => searchedCategories.Contains(cat));
        }

        public async Task<List<Fund>> GetUserFundsAsync(string userId)
        {
            List<FundEntity> entities = new List<FundEntity>();

            entities.AddRange( await _context
                    .Funds
                    .Where(x => x.AuthorId.ToString() == userId).ToListAsync()
            );

            return _mapper.Map<List<Fund>>(entities);
        }

        // public Task<List<Fund>> GetEndedFunds()
        // {
        // }
    }
}
