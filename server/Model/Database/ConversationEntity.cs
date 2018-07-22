using System;

namespace webapi.Model.Database
{
    public sealed class ConversationEntity
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public DateTimeOffset CreatedAt { get; set; }

        // TODO
        // public User Author {get;set;}
    }
}
