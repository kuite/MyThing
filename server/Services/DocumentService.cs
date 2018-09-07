using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using webapi.Model.Domain;
using webapi.Services.Interfaces;

namespace webapi.Services
{
    public class DocumentService : IDocumentService
    {
        private IHostingEnvironment _hostingEnvironment;

        public DocumentService(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public async Task<DocsUploadResponse> SubmitFundDocsAsync(IFormFile doc, string fundId)
        {
            var response = new DocsUploadResponse();
            response.Message = "Success";
            response.IsSucess = true;
            return response;
        }
    }
}

