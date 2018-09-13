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

        public Task<List<string>> GetFundDocsAsync(string fundId)
        {
            var fundDirName = fundId.Replace("-", "");
            var fundDir = Path.Combine(_hostingEnvironment.ContentRootPath, "docs", fundDirName);

            string[] fileEntries = Directory.GetFiles(fundDir);
            return Task.FromResult(new List<string>(fileEntries));
        }

        public async Task<DocsUploadResponse> SubmitFundDocsAsync(IFormFile doc, string fundId)
        {
            var response = new DocsUploadResponse();
            var fundDirName = fundId.Replace("-", "");
            var fundDir = Path.Combine(_hostingEnvironment.ContentRootPath, "docs", fundDirName);

            Directory.CreateDirectory(fundDir);
            bool isDocValid = true;
            try
            {
                //todo: validate if doc is valid (size)
                if (isDocValid)
                {
                    var filePath = Path.Combine(fundDir, doc.FileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await doc.CopyToAsync(fileStream);
                    }
                }
            }
            catch(Exception ex)
            {
                response.Message = ex.Message;
                isDocValid = false;
            }
            finally
            {
                response.IsSucess = isDocValid;
            }
            return response;
        }
    }
}

