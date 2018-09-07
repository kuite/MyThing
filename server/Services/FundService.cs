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
using Microsoft.AspNetCore.Http;

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

        public async Task<Fund> GetFundByIdAsync(string fundGuid, string userId)
        {
            Guid id = new Guid(fundGuid);
            var entity = await _context
                .Funds
                .SingleOrDefaultAsync(x => x.Id == id);

            if (entity == null) { throw new ArgumentException("This fund does not exist."); }

            if (userId != null)
            {
                var fundVote = _context.FundVotes
                    .Where(x => (x.FundId == entity.Id &&
                    x.UserId == userId)).SingleOrDefault();

                if (fundVote != null) { entity.Vote = fundVote.Vote; }
            }

            return _mapper.Map<Fund>(entity);
        }

        public async Task<Page<Fund>> GetFundsAsync(
            string fundGuid,
            PagingOptions pagingOptions,
            string userId)
        {
            IQueryable<FundEntity> query = _context.Funds;

            if (fundGuid != null)
            {
                Guid id = new Guid(fundGuid);
                query = query.Where(x => x.Id == id);
            }

            // todo apply search
            // todo apply sort

            var size = await query.CountAsync();

            var itemsEntities = await query
                .OrderByDescending(x => x.CreatedAt)
                .Skip(pagingOptions.Offset.Value)
                .Take(pagingOptions.Limit.Value)
                .ToListAsync();

            if (userId != null)
            {
                foreach (var entity in itemsEntities)
                {
                    var fundVote = _context.FundVotes
                        .Where(x => (x.FundId == entity.Id &&
                        x.UserId == userId)).SingleOrDefault();

                    if (fundVote != null) { entity.Vote = fundVote.Vote; }
                }
            }

            var items = _mapper.Map<List<Fund>>(itemsEntities);

            return new Page<Fund>
            {
                Items = items,
                TotalSize = size
            };
        }

        public async Task<List<Fund>> GetFundsByCategoriesAsync(FundCategories categories, string userId)
        {
            List<FundEntity> entities = new List<FundEntity>();
            List<string> searchCategories = categories.ToString().Split(", ").ToList();

            entities.AddRange( await _context
                    .Funds
                    .Where(x => HaveCommonItems(x.Categories, searchCategories)).ToListAsync());

            if (userId != null)
            {
                foreach (var entity in entities)
                {
                    var fundVote = _context.FundVotes
                        .Where(x => (x.FundId == entity.Id &&
                        x.UserId == userId)).SingleOrDefault();

                    if (fundVote != null) { entity.Vote = fundVote.Vote; }
                }
            }

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

            foreach (var entity in entities)
            {
                var fundVote = _context.FundVotes
                    .Where(x => (x.FundId == entity.Id &&
                    x.UserId == userId)).SingleOrDefault();

                if (fundVote != null) { entity.Vote = fundVote.Vote; }
            }

            return _mapper.Map<List<Fund>>(entities);
        }

        public async Task<Guid> GetNewFundId()
        {
            Guid id;
            FundEntity itemWithWantedId;

            do
            {
                id = Guid.NewGuid();
                itemWithWantedId = await _context
                    .Funds
                    .SingleOrDefaultAsync(x => x.Id == id);
            }
            while(itemWithWantedId != null);

            return id;                
        }

        public async Task<Fund> SaveFundAsync(Fund fund)
        {
            FundEntity entity = _mapper.Map<FundEntity>(fund);
            entity.Vote = VoteOption.DidNotVote;
            entity.VotesCount = 0;
            entity.CreatedAt = DateTime.Now;

            await _context.Funds.AddAsync(entity);
            _context.SaveChanges();
            return _mapper.Map<Fund>(entity);
        }
        
        // to do:
        // public Task<List<Fund>> GetEndedFunds()
        // {
        // }
    }
}
