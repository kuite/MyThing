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
        BronzeLong = 3,
        SilverShort = 4,
        SilverMedium = 5,
        SilverLong = 6,
        GoldShort = 7,
        GoldMedium = 8,
        GoldLong = 9
    }
}