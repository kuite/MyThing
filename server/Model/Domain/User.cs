using System;

namespace webapi.Model.Domain
{
    public class User
    {
        public string Email {get;set;}
        public DateTimeOffset CreatedAt { get; set; }
    }
}