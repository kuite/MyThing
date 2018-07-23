using System;

namespace webapi.Model.Domain
{
    public class Fund
    {
        //public User Author { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public decimal BtcGoal { get; set; }
        public decimal BtcDonated { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
    }
}