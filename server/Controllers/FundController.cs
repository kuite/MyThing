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

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class FundController : ControllerBase
    {
        private readonly IFundService _fundService;
        private readonly PagingOptions _defaultPagingOptions;

        public FundController(
            IFundService fundService,
            IOptions<PagingOptions> defaultPagingOptionsAccessor)
        {
            _fundService = fundService;
            _defaultPagingOptions = defaultPagingOptionsAccessor.Value;
        }


        [HttpGet("GetFunds")]
        [ValidateModel]
        public async Task<IActionResult> GetFundsAsync(
            [FromQuery] PagingOptions pagingOptions)
        {
            pagingOptions.Offset = pagingOptions.Offset ?? _defaultPagingOptions.Offset;
            pagingOptions.Limit = pagingOptions.Limit ?? _defaultPagingOptions.Limit;

            var funds = await _fundService.GetFundsAsync(null, pagingOptions);

            return Ok(funds);
        }

        [HttpGet("GetFund/{fundId}")]
        [ValidateModel]
        public async Task<IActionResult> GetFundByIdAsync(int fundId)
        {
            Guid fundnGuidId = Helpers.ToGuid(fundId);
            if (fundnGuidId == Guid.Empty) return NotFound();

            var fund = await _fundService.GetFundAsync(fundnGuidId);
            return Ok(fund);
        }

        [HttpPost("SubmitFund")]
        [Authorize(Policy = "ApiUser")]
        [ValidateModel]
        public async Task<IActionResult> SubmitFundAsync([FromBody]Fund fund)
        {
            return Ok(fund);
        }
    }
}
