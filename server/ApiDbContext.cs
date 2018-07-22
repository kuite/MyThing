using webapi.Model.Database;
using Microsoft.EntityFrameworkCore;

namespace webapi
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options)
        {
        }

        public DbSet<ConversationEntity> Conversations { get; set; }

        public DbSet<CommentEntity> Comments { get; set; }
    }
}
