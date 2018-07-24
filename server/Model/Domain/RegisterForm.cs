using System;

namespace webapi.Model.Domain
{
    public class RegisterForm
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTimeOffset BirthDay { get; set; }
    }
}