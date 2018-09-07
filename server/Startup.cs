using System;
using System.Text;
using webapi.Infrastructure;
using webapi.Services;
using webapi.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Newtonsoft.Json;
using AutoMapper;
using webapi.Model.Database;
using webapi.Model.Common;
using Microsoft.IdentityModel.Tokens;
using webapi.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using webapi.Model.Database.Access;

namespace webapi
{
    public class Startup
    {
        private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
        private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            // Use a PostgreSQL database
            var sqlConnectionString = Configuration.GetConnectionString("ConnPostgress");
 
            services.AddDbContext<DatabaseContext>(options =>
                options.UseNpgsql(sqlConnectionString));

            services.AddIdentity<UserEntity, IdentityRole>(o =>
            {
                o.Password.RequireDigit = false;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 3;
            })
            .AddEntityFrameworkStores<DatabaseContext>()
            .AddDefaultTokenProviders();

            // services.AddDbContext<DatabaseContext>(options =>
            // {
            //     // Use an in-memory database with a randomized database name (for testing)
            //     //options.UseInMemoryDatabase(Guid.NewGuid().ToString()); //some bug that context is not saved with this name
            //     options.UseInMemoryDatabase("test_memory_db");
            // });

            services.AddRouting(options => options.LowercaseUrls = true);
            services.AddCors();

            services.AddMvc()
            .AddJsonOptions(opt =>
            {
                // These should be the defaults, but we can be explicit:
                opt.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                opt.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
                opt.SerializerSettings.DateParseHandling = DateParseHandling.DateTimeOffset;
            });
            services.AddAutoMapper();

            services.Configure<PagingOptions>(Configuration.GetSection("DefaultPagingOptions"));

            // Services that consume EF Core objects (DbContext) should be registered as Scoped
            // (see https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection#registering-your-own-services)
            services.AddScoped<IFundService, FundService>();
            services.AddScoped<IDocumentService, DocumentService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IImageService, ImageService>();
            services.AddScoped<IInvestmentService, InvestmentService>();


            #region JWT token
            services.AddSingleton<IJwtFactory, JwtFactory>();
            services.Configure<FacebookAuthSettings>(Configuration.GetSection(nameof(FacebookAuthSettings)));

            // Get options from app settings
            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

            // Configure JwtIssuerOptions
            services.Configure<JwtIssuerOptions>(options =>
            {
                options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
                options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
            });

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

                ValidateAudience = true,
                ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _signingKey,

                RequireExpirationTime = false,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            };

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(configureOptions =>
              {
                  configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                  configureOptions.TokenValidationParameters = tokenValidationParameters;
                  configureOptions.SaveToken = true;
              });

            // api user claim policy
            services.AddAuthorization(options =>
            {
                options.AddPolicy("ApiUser", policy => policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.JwtClaims.ApiAccess));
            });

            // add identity           
            // var builder = services.AddIdentityCore<UserEntity>(o =>
            // {
            //     o.Password.RequireDigit = false;
            //     o.Password.RequireLowercase = false;
            //     o.Password.RequireUppercase = false;
            //     o.Password.RequireNonAlphanumeric = false;
            //     o.Password.RequiredLength = 3;
            // });
            // builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);

            // builder.AddEntityFrameworkStores<DatabaseContext>().AddDefaultTokenProviders();
            #endregion
        }

        public static void AddTestData2(DatabaseContext context)
        {

            var fund0 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title0",
                Description = "Sample Description0"
                }).Entity;
                var fund1 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title1",
                Description = "Sample Description1"
                }).Entity;
                var fund2 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title2",
                Description = "Sample Description2"
                }).Entity;
                var fund3 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title3",
                Description = "Sample Description3"
                }).Entity;
                var fund4 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title4",
                Description = "Sample Description4"
                }).Entity;
                var fund5 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title5",
                Description = "Sample Description5"
                }).Entity;
                var fund6 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title6",
                Description = "Sample Description6"
                }).Entity;
                var fund7 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title7",
                Description = "Sample Description7"
                }).Entity;
                var fund8 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Digital,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title8",
                Description = "Sample Description8"
                }).Entity;


                var fund9 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title9",
                Description = "Sample Description9"
                }).Entity;
                var fund10 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title10",
                Description = "Sample Description10"
                }).Entity;
                var fund11 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title11",
                Description = "Sample Description11"
                }).Entity;
                var fund12 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title12",
                Description = "Sample Description12"
                }).Entity;
                var fund13 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title13",
                Description = "Sample Description13"
                }).Entity;
                var fund14 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title14",
                Description = "Sample Description14"
                }).Entity;
                var fund15 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title15",
                Description = "Sample Description15"
                }).Entity;
                var fund16 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title16",
                Description = "Sample Description16"
                }).Entity;
                var fund17 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.Social,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title17",
                Description = "Sample Description17"
                }).Entity;

                var fund18 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title18",
                Description = "Sample Description18"
                }).Entity;
                var fund19 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title19",
                Description = "Sample Description19"
                }).Entity;
                var fund20 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title20",
                Description = "Sample Description20"
                }).Entity;
                var fund21 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title21",
                Description = "Sample Description21"
                }).Entity;
                var fund22 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title22",
                Description = "Sample Description22"
                }).Entity;
                var fund23 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title23",
                Description = "Sample Description23"
                }).Entity;
                var fund24 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title24",
                Description = "Sample Description24"
                }).Entity;
                var fund25 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title25",
                Description = "Sample Description25"
                }).Entity;
                var fund26 = context.Funds.Add(new FundEntity 
                {
                Id = Guid.NewGuid(),
                AuthorId = Guid.NewGuid(),
                Categories = FundCategories.NonProfit,
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title26",
                Description = "Sample Description26"
                }).Entity;
                
                context.SaveChanges();
        }
 

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // var dbContext = app.ApplicationServices.GetRequiredService<DatabaseContext>();
            // AddTestData(dbContext);

            // Serialize all exceptions to JSON
            var jsonExceptionMiddleware = new JsonExceptionMiddleware(
                app.ApplicationServices.GetRequiredService<IHostingEnvironment>());
            app.UseExceptionHandler(new ExceptionHandlerOptions { ExceptionHandler = jsonExceptionMiddleware.Invoke });

            app.UseAuthentication();
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());  
            app.UseMvc();
        }
    }
}
