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
            services.AddDbContext<DbContext>(options =>
            {
                // Use an in-memory database with a randomized database name (for testing)
                //options.UseInMemoryDatabase(Guid.NewGuid().ToString()); //some bug that context is not saved with this name
                options.UseInMemoryDatabase("test_memory_db");
            });

            services.AddRouting(options => options.LowercaseUrls = true);

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
            services.AddScoped<IUserService, UserService>();


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
            var builder = services.AddIdentityCore<UserEntity>(o =>
            {
                o.Password.RequireDigit = false;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 3;
            });
            builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
            builder.AddEntityFrameworkStores<DbContext>().AddDefaultTokenProviders();
            #endregion
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var dbContext = app.ApplicationServices.GetRequiredService<DbContext>();
            AddTestData(dbContext);

            // Serialize all exceptions to JSON
            var jsonExceptionMiddleware = new JsonExceptionMiddleware(
                app.ApplicationServices.GetRequiredService<IHostingEnvironment>());
            app.UseExceptionHandler(new ExceptionHandlerOptions { ExceptionHandler = jsonExceptionMiddleware.Invoke });

            app.UseMvc();
            app.UseAuthentication();
        }

        private static void AddTestData(DbContext context)
        {
            // TODO add Author to all of these:

            #region Funds
            var fund1 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title 1",
                Description = "Sample Description 1"
            }).Entity;
            var fund2 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title2",
                Description = "Sample Description2"
            }).Entity;
            var fund3 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title3",
                Description = "Sample Description3"
            }).Entity;
            var fund4 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title4",
                Description = "Sample Description4"
            }).Entity;
            var fund5 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title5",
                Description = "Sample Description5"
            }).Entity;
            var fund6 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title6",
                Description = "Sample Description6"
            }).Entity;
            var fund7 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title7",
                Description = "Sample Description7"
            }).Entity;
            var fund8 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title8",
                Description = "Sample Description8"
            }).Entity;
            var fund9 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title9",
                Description = "Sample Description9"
            }).Entity;
            var fund10 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title10",
                Description = "Sample Description10"
            }).Entity;
            var fund11 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title11",
                Description = "Sample Description11"
            }).Entity;
            var fund12 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title12",
                Description = "Sample Description12"
            }).Entity;
            var fund13 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title13",
                Description = "Sample Description13"
            }).Entity;
            var fund14 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title14",
                Description = "Sample Description14"
            }).Entity;
            var fund15 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title15",
                Description = "Sample Description15"
            }).Entity;
            var fund16 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title16",
                Description = "Sample Description16"
            }).Entity;
            var fund17 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title17",
                Description = "Sample Description17"
            }).Entity;
            var fund18 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title18",
                Description = "Sample Description18"
            }).Entity;
            var fund19 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title19",
                Description = "Sample Description19"
            }).Entity;
            var fund20 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title20",
                Description = "Sample Description20"
            }).Entity;
            var fund21 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title21",
                Description = "Sample Description21"
            }).Entity;
            var fund22 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title22",
                Description = "Sample Description22"
            }).Entity;
            var fund23 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title23",
                Description = "Sample Description23"
            }).Entity;
            var fund24 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title24",
                Description = "Sample Description24"
            }).Entity;
            var fund25 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title25",
                Description = "Sample Description25"
            }).Entity;
            var fund26 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title26",
                Description = "Sample Description26"
            }).Entity;
            var fund27 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title27",
                Description = "Sample Description27"
            }).Entity;
            var fund28 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title28",
                Description = "Sample Description28"
            }).Entity;
            var fund29 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title29",
                Description = "Sample Description29"
            }).Entity;
            var fund30 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title30",
                Description = "Sample Description30"
            }).Entity;
            var fund31 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title31",
                Description = "Sample Description31"
            }).Entity;
            var fund32 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title32",
                Description = "Sample Description32"
            }).Entity;
            var fund33 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title33",
                Description = "Sample Description33"
            }).Entity;
            var fund34 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title34",
                Description = "Sample Description34"
            }).Entity;
            var fund35 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title35",
                Description = "Sample Description35"
            }).Entity;
            var fund36 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title36",
                Description = "Sample Description36"
            }).Entity;
            var fund37 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title37",
                Description = "Sample Description37"
            }).Entity;
            var fund38 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title38",
                Description = "Sample Description38"
            }).Entity;
            var fund39 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title39",
                Description = "Sample Description39"
            }).Entity;
            var fund40 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title40",
                Description = "Sample Description40"
            }).Entity;
            var fund41 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title41",
                Description = "Sample Description41"
            }).Entity;
            var fund42 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title42",
                Description = "Sample Description42"
            }).Entity;
            var fund43 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title43",
                Description = "Sample Description43"
            }).Entity;
            var fund44 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title44",
                Description = "Sample Description44"
            }).Entity;
            var fund45 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title45",
                Description = "Sample Description45"
            }).Entity;
            var fund46 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title46",
                Description = "Sample Description46"
            }).Entity;
            var fund47 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title47",
                Description = "Sample Description47"
            }).Entity;
            var fund48 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title48",
                Description = "Sample Description48"
            }).Entity;
            var fund49 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title49",
                Description = "Sample Description49"
            }).Entity;
            var fund50 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title50",
                Description = "Sample Description50"
            }).Entity;
            var fund51 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title51",
                Description = "Sample Description51"
            }).Entity;
            var fund52 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title52",
                Description = "Sample Description52"
            }).Entity;
            var fund53 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title53",
                Description = "Sample Description53"
            }).Entity;
            var fund54 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title54",
                Description = "Sample Description54"
            }).Entity;
            var fund55 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title55",
                Description = "Sample Description55"
            }).Entity;
            var fund56 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title56",
                Description = "Sample Description56"
            }).Entity;
            var fund57 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title57",
                Description = "Sample Description57"
            }).Entity;
            var fund58 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title58",
                Description = "Sample Description58"
            }).Entity;
            var fund59 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title59",
                Description = "Sample Description59"
            }).Entity;
            var fund60 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title60",
                Description = "Sample Description60"
            }).Entity;
            var fund61 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title61",
                Description = "Sample Description61"
            }).Entity;
            var fund62 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title62",
                Description = "Sample Description62"
            }).Entity;
            var fund63 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title63",
                Description = "Sample Description63"
            }).Entity;
            var fund64 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title64",
                Description = "Sample Description64"
            }).Entity;
            var fund65 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title65",
                Description = "Sample Description65"
            }).Entity;
            var fund66 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title66",
                Description = "Sample Description66"
            }).Entity;
            var fund67 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title67",
                Description = "Sample Description67"
            }).Entity;
            var fund68 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title68",
                Description = "Sample Description68"
            }).Entity;
            var fund69 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title69",
                Description = "Sample Description69"
            }).Entity;
            var fund70 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title70",
                Description = "Sample Description70"
            }).Entity;
            var fund71 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title71",
                Description = "Sample Description71"
            }).Entity;
            var fund72 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title72",
                Description = "Sample Description72"
            }).Entity;
            var fund73 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title73",
                Description = "Sample Description73"
            }).Entity;
            var fund74 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title74",
                Description = "Sample Description74"
            }).Entity;
            var fund75 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title75",
                Description = "Sample Description75"
            }).Entity;
            var fund76 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title76",
                Description = "Sample Description76"
            }).Entity;
            var fund77 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title77",
                Description = "Sample Description77"
            }).Entity;
            var fund78 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title78",
                Description = "Sample Description78"
            }).Entity;
            var fund79 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title79",
                Description = "Sample Description79"
            }).Entity;
            var fund80 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title80",
                Description = "Sample Description80"
            }).Entity;
            var fund81 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title81",
                Description = "Sample Description81"
            }).Entity;
            var fund82 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title82",
                Description = "Sample Description82"
            }).Entity;
            var fund83 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title83",
                Description = "Sample Description83"
            }).Entity;
            var fund84 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title84",
                Description = "Sample Description84"
            }).Entity;
            var fund85 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title85",
                Description = "Sample Description85"
            }).Entity;
            var fund86 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title86",
                Description = "Sample Description86"
            }).Entity;
            var fund87 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title87",
                Description = "Sample Description87"
            }).Entity;
            var fund88 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title88",
                Description = "Sample Description88"
            }).Entity;
            var fund89 = context.Funds.Add(new FundEntity
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTimeOffset.UtcNow,
                Title = "Fund Title89",
                Description = "Sample Description89"
            }).Entity;
            #endregion


            context.SaveChanges();
        }
    }
}
