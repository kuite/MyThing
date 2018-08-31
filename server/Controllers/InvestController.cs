using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using webapi.Infrastructure;
using webapi.Model.Domain;
using webapi.Model.Common;
using webapi.Services;
using webapi.Services.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class InvestController : ControllerBase
    {
        private readonly IInvestmentService _investService;

        public InvestController(IInvestmentService investService)
        {
            _investService = investService;
        }

        [HttpGet("GetPlanTypes")]
        [ValidateModel]
        public IActionResult GetPlanTypesAsync()
        {
            var planTypes = _investService.GetPlanTypesAsync();
            return Ok(planTypes);
        }

        [HttpGet("GetAllPlans")]
        [ValidateModel]
        public async Task<IActionResult> GetAllPlansAsync()
        {
            var allPlans = await _investService.GetAllPlansAsync();
            return Ok(allPlans);
        }

        [HttpGet("GetUserPlans")]
        [ValidateModel]
        public async Task<IActionResult> GetUserPlansAsync(string investorId)
        {
            var investments = await _investService.GetUserPlansAsync(investorId);
            return Ok(investments);
        }

        [HttpPost("SubscribeToPlan")]
        [ValidateModel]
        public async Task<IActionResult> SubscribeToPlanAsync(InvestingPlan plan)
        {
            var subscription = await _investService.SubscribeToPlanAsync(plan);
            return Ok(subscription);
        }

        [HttpPost("CreatePlanType")]
        // to do: access for admin
        [ValidateModel]
        public async Task<IActionResult> CreatePlanTypeAsync([FromBody]PlanSettings settings)
        {
            var result = await _investService.CreatePlanTypeAsync(settings);
            return Ok(result);
        }

        [HttpPost("UpdatePlanType")]
        // to do: access for admin
        [ValidateModel]
        public async Task<IActionResult> UpdatePlanTypeAsync([FromBody]PlanSettings settings)
        {
            var result = await _investService.UpdatePlanTypeAsync(settings);
            return Ok(result);
        }
        
        [HttpDelete("DeletePlanType")]
        // to do: access for admin
        [ValidateModel]
        public async Task<IActionResult> DeletePlanTypeAsync([FromBody]PlanType type)
        {
            var result = await _investService.DeletePlanTypeAsync(type);
            return Ok(result);
        }

    }
}
