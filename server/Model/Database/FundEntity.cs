using System;

namespace webapi.Model.Database
{
    public class FundEntity
    {
        public Guid Id { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }

        public DateTimeOffset CreatedAt { get; set; }

        // TODO
        // public User Author {get;set;}
    }
}
