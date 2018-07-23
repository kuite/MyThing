using System;
using webapi.Model.Common;

namespace webapi.Model.Domain
{
    public sealed class Fund
    {
        //public Link Author { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }

        public DateTimeOffset CreatedAt { get; set; }
    }
}