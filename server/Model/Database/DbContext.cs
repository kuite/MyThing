using webapi.Model.Database;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace webapi
{
    public class DbContext : IdentityDbContext<UserEntity>
    {
        public DbContext(DbContextOptions<DbContext> options)
            : base(options)
        {

        }
        public DbSet<FundEntity> Funds { get; set; }
    }
}
