using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace webapi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseCors("MyPolicy");

                // ... add api and other stuff

                //Add a middleware which sets the header on the response
                app.Use(async (context, next) =>
                {
                    // Add Header
                    context.Response.Headers["Access-Control-Allow-Origin"] = "*";

                    // Call next middleware
                    await next.Invoke();
                });
                
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
