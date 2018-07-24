using System;

namespace webapi.Model.Domain
{
    public class InvestingPlan
    {
        //public User Investor { get; set; } //connect plan with user (token?)
        public PlanType PlanType { get; set; }
        public decimal BtcComitted { get; set; }
        public decimal BtcPayout {get; set; }
        public bool IsPaid { get ;set; }
        public bool IsCashedOut  {get; set; }
        public DateTimeOffset StartDate { get; set; }
    }

    public enum PlanType
    {
        BronzeShort = 1,
        BronzeMedium = 2,
        SilverShort = 3,
        SilverMedium = 4,
        SilverLong = 5,
        GoldMedium = 6,
        GoldLong = 7
    }
}