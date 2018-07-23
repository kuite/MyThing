using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;

namespace webapi.Services.Interfaces
{
    public interface IFundService
    {
        Task<Fund> GetFundAsync(Guid id);

        Task<Page<Fund>> GetFundsAsync(
            Guid? fundId,
            PagingOptions pagingOptions);
    }
}
