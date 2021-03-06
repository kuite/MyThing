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
    public class FundController : ControllerBase
    {
        private readonly IFundService _fundService;
        private readonly IImageService _imageService;
        private readonly IDocumentService _documentService;
        private readonly PagingOptions _defaultPagingOptions;

        public FundController(
            IFundService fundService,
            IImageService imageService,
            IDocumentService documentService,
            IOptions<PagingOptions> defaultPagingOptionsAccessor)
        {
            _fundService = fundService;
            _imageService = imageService;
            _documentService = documentService;
            _defaultPagingOptions = defaultPagingOptionsAccessor.Value;
        }


        [HttpGet("GetFunds")]
        [ValidateModel]
        public async Task<IActionResult> GetFundsAsync(
            [FromQuery] string userId,
            [FromQuery] PagingOptions pagingOptions)
        {
            pagingOptions.Offset = pagingOptions.Offset ?? _defaultPagingOptions.Offset;
            pagingOptions.Limit = pagingOptions.Limit ?? _defaultPagingOptions.Limit;

            var funds = await _fundService.GetFundsAsync(null, pagingOptions, userId);

            return Ok(funds);
        }

        [HttpGet("GetFund/{fundGuid}")]
        [ValidateModel]
        public async Task<IActionResult> GetFundByIdAsync(string fundGuid)
        {
            if (string.IsNullOrEmpty(fundGuid)) return NotFound();

            var fund = await _fundService.GetFundByIdAsync(fundGuid);
            return Ok(fund);
        }



        /*       
         [HttpGet("GetFund/{fundGuid}/{userId}")]
        [ValidateModel]
        public async Task<IActionResult> GetFundByIdAsync(string fundGuid, string userId)
        {
            if (string.IsNullOrEmpty(fundGuid)) return NotFound();

            var fund = await _fundService.GetFundByIdAsync(fundGuid, userId);
            return Ok(fund);
        }
         */

        [HttpPost("SubmitFund")]
        [Authorize(Policy = "ApiUser")]
        [ValidateModel]
        public async Task<IActionResult> SubmitFundAsync([FromBody]Fund fund)
        {
            var addedFund = await _fundService.SaveFundAsync(fund);
            return Ok(addedFund);
        }

        [HttpPost("SubmitFundImages")]
        [Authorize(Policy = "ApiUser")]
        public async Task<IActionResult> SubmitFundImagesAsync(List<IFormFile> imgs, string fundGuid)
        {
            var response = await _imageService.SaveFundImgsAsync(imgs, fundGuid);
            return Ok(response);
        }

        [HttpGet("GetFundImages")]
        [Authorize(Policy = "ApiUser")]
        public async Task<IActionResult> GetFundImagesAsync([FromQuery]string fundGuid)
        {
            var response = await _imageService.GetFundImgsAsync(fundGuid);
            return Ok(response);
        }

        [HttpGet("GetFundsByCategory")]
        [ValidateModel]
        public async Task<IActionResult> GetFundsByCategoryAsync([FromQuery]FundCategories categories, [FromQuery]string userId)
        {
            if (string.IsNullOrEmpty(categories.ToString())) return NotFound();
            var funds = await _fundService.GetFundsByCategoriesAsync(categories, userId);
            return Ok(funds);
        }

        [HttpGet("GetUserFunds")]
        [Authorize(Policy = "ApiUser")]
        [ValidateModel]
        public async Task<IActionResult> GetUserFundsAsync([FromQuery]string userId)
        {
            if (string.IsNullOrEmpty(userId)) return NotFound();
            var funds = await _fundService.GetUserFundsAsync(userId);
            return Ok(funds);
        }

        [HttpGet("GetNewFundId")]
        [Authorize(Policy = "ApiUser")]
        [ValidateModel]
        public async Task<IActionResult> GetNewFundId()
        {
            var fundId = await _fundService.GetNewFundId();
            return Ok(fundId);
        }

        [HttpPost("SubmitFundDocs")]
        [Authorize(Policy = "ApiUser")]
        [ValidateModel]
        public async Task<IActionResult> SubmitFundDocsAsync(IFormFile doc, string fundId)
        {
            var fileForm = await _documentService.SubmitFundDocsAsync(doc, fundId);
            return Ok(fileForm);
        }

        [HttpGet("GetFundDocs")]
        [Authorize(Policy = "ApiUser")]
        [ValidateModel]
        public async Task<IActionResult> GetFundDocsAsync([FromQuery]string fundId)
        {
            var docs = await _documentService.GetFundDocsAsync(fundId);
            return Ok(docs);
        }


        // to do:
        // [HttpGet("GetEndedFunds")]
        // public async Task<IActionResult> GetEndedFunds()
        // {
            
        // }
    }
}
