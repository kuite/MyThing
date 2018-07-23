using webapi.Model.Database;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace webapi
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options)
        {

        }
        public DbSet<FundEntity> Funds { get; set; }
    }
}
