using System;
using webapi.Model.Common;

namespace webapi.Model.Domain
{
    public sealed class ConversationResource : Resource
    {
        // TODO
        // public Link Author {get;set;}

        public string Title { get; set; }

        public DateTimeOffset CreatedAt { get; set; }

        public Link Comments { get; set; }
    }
}
