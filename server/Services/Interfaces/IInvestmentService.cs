using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;
using System.Collections.Generic;

namespace webapi.Services.Interfaces
{
    public interface IInvestmentService
    {
        Task<PlanSettings> GetUserPlansAsync(string investorId);
    }
}
