﻿using webapi.Model.Database;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace webapi.Model.Database.Access
{
    public class DatabaseContext : IdentityDbContext<UserEntity>
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {

        }
        public DbSet<FundEntity> Funds { get; set; }

        public DbSet<InvestingPlanEntity> Plans { get; set; }

        public DbSet<PlanSettingsEntity> PlansSettings { get; set; }

        public DbSet<FundVoteEntity> FundVotes { get; set; }
    }
}
