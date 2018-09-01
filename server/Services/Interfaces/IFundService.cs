using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;
using System.Collections.Generic;

namespace webapi.Services.Interfaces
{
    public interface IFundService
    {
        Task<Fund> GetFundByIdAsync(string fundGuid);

        Task<Page<Fund>> GetFundsAsync(
            string fundGuid,
            PagingOptions pagingOptions);

        Task<List<Fund>> GetFundsByCategoriesAsync(FundCategories categories);

        Task<List<Fund>> GetUserFundsAsync(string userId);

        Task<Guid> GetNewFundId();

        Task<Fund> SaveFundAsync(Fund fund);
    }
}
