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
    public sealed class InvestmentService : IInvestmentService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;

        public InvestmentService(DatabaseContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PlanSettings> GetUserPlansAsync(string investorId)
        {
            // List<InvestingPlanEntity> entities;
            // entities.AddRange( await _context
            //     .Plans
            //     .Where(x => x.));
            return null;
        }
    }
}
