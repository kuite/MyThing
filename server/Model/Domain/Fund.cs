using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using webapi.Model.Common;

namespace webapi.Model.Domain
{
    public class Fund
    {
        public string Id { get; set; }
        public string AuthorId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal BtcGoal { get; set; }
        public decimal BtcDonated { get; set; }
        public FundCategories Categories { get; set; }
        public FundType FundType { get; set; }
        //public List<Transactions> SupportersList 
        public List<IFormFile> RelatedImages { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
        public VoteOption Vote { get; set; }
        public int VotesCount { get; set; }
    }
}