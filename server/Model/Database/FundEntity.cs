using System;
using webapi.Model.Common;

namespace webapi.Model.Database
{
    public class FundEntity
    {
        public Guid Id { get; set; }
        public Guid AuthorId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTimeOffset CreatedAt { get; set; }
        public FundCategories Categories { get; set; }
        public FundType FundType { get; set; }
        public VoteOption Vote { get; set; }
        public int VotesCount { get; set; }
    }
}
