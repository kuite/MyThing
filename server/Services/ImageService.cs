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
    public class ImageService : IImageService
    {
        private IHostingEnvironment _hostingEnvironment;

        public ImageService(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public Task<List<IFormFile>> GetFundImgsAsync(string fundGuid)
        {
            throw new System.NotImplementedException();
        }

        public async Task<List<ImgUploadResponse>> SaveFundImgsAsync(List<IFormFile> imgs, string fundId)
        {
            Guid fundGuid = new Guid(fundId);
            var response = new List<ImgUploadResponse>();
            var fundDirName = fundId.Replace("-", "");
            var fundDir = Path.Combine(_hostingEnvironment.ContentRootPath, "images", fundDirName);

            Directory.CreateDirectory(fundDir);
            foreach (var img in imgs)
            {
                
                if (img.Length > 0)
                {
                    var filePath = Path.Combine(fundDir, img.FileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await img.CopyToAsync(fileStream);
                    }
                }
            }
            return response;
        }
    }
}

