using System;

namespace webapi.Model.Database
{
    public class PlanSettingsEntity
    {
        public int DurationDays { get; set; }
        public decimal MinimumBtc { get; set; }
        public decimal ROI { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public PlanType PlanType { get; set; }
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