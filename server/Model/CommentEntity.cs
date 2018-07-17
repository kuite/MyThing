using System;

namespace webapi.Model
{
    public sealed class CommentEntity
    {
        public Guid Id { get; set; }

        public ConversationEntity Conversation { get; set; }

        public string Body { get; set; }

        public DateTimeOffset CreatedAt { get; set; }

        // TODO
        // public User Author {get;set;}
    }
}
