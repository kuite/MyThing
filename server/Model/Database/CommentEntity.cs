using System;

namespace webapi.Model.Database
{
    public sealed class CommentEntity //Database entites
    {
        public Guid Id { get; set; }

        public ConversationEntity Conversation { get; set; }

        public string Body { get; set; }

        public DateTimeOffset CreatedAt { get; set; }

        // TODO
        // public User Author {get;set;}
    }
}
