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

        public async Task<List<PlanSettings>> GetUserPlansAsync(string userId)
        {
            List<InvestingPlanEntity> entities = new List<InvestingPlanEntity>();
            entities.AddRange( await _context
                .Plans
                .Where(x => x.InvestorId == userId).ToListAsync());

            List<InvestingPlan> investingPlans = _mapper.Map<List<InvestingPlan>>(entities);
            
            List<PlanSettingsEntity> planSettingsDb = await GetPlanSettingsAsync();
            List<PlanSettings> planSettings = _mapper.Map<List<PlanSettings>>(planSettingsDb);
            List<PlanSettings> result = new List<PlanSettings>();

            foreach(var investingPlan in investingPlans)
            {
                PlanSettings settings = planSettings.SingleOrDefault(x => x.PlanType == investingPlan.PlanType);
                settings.DurationDays = DateTime.Now.Day - investingPlan.StartDate.Day;
                result.Add(settings);
            }

            return result;
        }

        public async Task<List<PlanSettings>> GetAllPlansAsync()
        {
            List<PlanSettingsEntity> entities = await GetPlanSettingsAsync();
            return _mapper.Map<List<PlanSettings>>(entities);
        }

        public async Task<InvestingPlan> SubscribeToPlanAsync(InvestingPlan plan)
        {
            PlanSettingsEntity settingsEntity = await _context.PlansSettings.SingleOrDefaultAsync(x => x.PlanType == plan.PlanType);
            PlanSettings planSettings = _mapper.Map<PlanSettings>(settingsEntity);
            if(plan.BtcComitted >= planSettings.MinimumBtc && plan.InvestorId != null)
            {
                var planEntity = _mapper.Map<InvestingPlanEntity>(plan);
                _context.Plans.Add(planEntity);
            }
            return null;
        }

        public async Task<List<PlanSettingsEntity>> GetPlanSettingsAsync()
        {
            List<PlanSettingsEntity> planSettings = new List<PlanSettingsEntity>();
            planSettings.AddRange( await _context
                .PlansSettings.ToListAsync());

            return planSettings;
        }

        public async Task<PlanSettings> CreatePlanTypeAsync(PlanSettings settings)
        {
            PlanSettingsEntity entity = _mapper.Map<PlanSettingsEntity>(settings);
            if(settings.MinimumBtc > 0 && settings.ROI > 0)
            {
                await _context.PlansSettings.AddAsync(entity);
                _context.SaveChanges();
            }
            return _mapper.Map<PlanSettings>(entity);
        }

        public async Task<PlanSettings> UpdatePlanTypeAsync(PlanSettings settings)
        {
            PlanSettingsEntity entityToChange = await _context.PlansSettings.SingleOrDefaultAsync(x => x.PlanType == settings.PlanType);
            if (entityToChange == null) { throw new ArgumentException("Given plan deostn exist."); }

            PlanSettingsEntity updatedPlan = _mapper.Map<PlanSettingsEntity>(settings);
            updatedPlan.Id = entityToChange.Id;
            _context.Entry(entityToChange).CurrentValues.SetValues(updatedPlan);
            _context.SaveChanges();
            return _mapper.Map<PlanSettings>(updatedPlan);
        }

        public async Task<PlanSettings> DeletePlanTypeAsync(PlanType type)
        {
            PlanSettingsEntity entity = await _context
                .PlansSettings
                .SingleOrDefaultAsync(x => x.PlanType == type);

            PlanSettings settings = _mapper.Map<PlanSettings>(entity);
            _context.PlansSettings.Remove(entity);
            _context.SaveChanges();
            return settings;
        }
    }
}
