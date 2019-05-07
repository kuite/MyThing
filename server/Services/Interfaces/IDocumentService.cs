using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace webapi.Services.Interfaces
{
    public interface IDocumentService
    {
        Task<DocsUploadResponse> SubmitFundDocsAsync(IFormFile doc, string fundId);
        Task<List<string>> GetFundDocsAsync(string fundId);
    }
}
