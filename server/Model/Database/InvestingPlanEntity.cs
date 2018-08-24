using System;
using webapi.Model.Common;

namespace webapi.Model.Database
{
    public class InvestingPlanEntity
    {
        public string InvestorId { get; set; }
        public PlanType PlanType { get; set; }
        public decimal BtcComitted { get; set; }
        public decimal BtcPayout { get; set; }
        public bool IsPaid { get; set; }
        public bool IsCashedOut  { get; set; }
        public DateTimeOffset StartDate { get; set; }
    }
}