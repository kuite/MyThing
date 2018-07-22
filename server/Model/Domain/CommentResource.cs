using System;
using webapi.Model.Common;

namespace webapi.Model.Domain
{
    public sealed class CommentResource : Resource //Domain objects
    {
        public Link Conversation { get; set; }

        // TODO
        // public Link Author {get;set;}

        public string Body { get; set; }

        public DateTimeOffset CreatedAt { get; set; }
    }
}
