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
            return Ok(Enum.GetValues(typeof(PlanType)));
        }

        [HttpGet("GetUserPlans")]
        [ValidateModel]
        public async Task<IActionResult> GetUserPlansAsync(string investorId)
        {
            var investments = await _investService.GetUserPlansAsync(investorId);
            return null;
        }

        [HttpPost("SubmitNewPlan")]
        // to do: access for admin
        [ValidateModel]
        public async Task<IActionResult> CreatePlanTypeAsync([FromBody]PlanSettings settings)
        {
            throw new NotImplementedException();
        }

    }
}
