using System;
using webapi.Model.Common;

namespace webapi.Model.Database
{
    public class FundVoteEntity
    {
        public Guid Id { get; set; }
        public Guid FundId { get; set; }
        public string UserId { get; set; }
        public VoteOption Vote { get; set; }
    }
}
