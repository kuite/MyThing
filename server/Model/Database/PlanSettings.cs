using System;

namespace webapi.Model.Database
{
    public class PlanSettings
    {
        public int DurationDays { get; set; }
        public decimal MinimumBtc { get; set; }
        public decimal ROI { get; set; }
        public string Description { get; set; }
    }
}