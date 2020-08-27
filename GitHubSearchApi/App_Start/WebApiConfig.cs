using Autofac;
using Autofac.Integration.WebApi;
using GitHubSearchApi.Models;
using GitHubSearchApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GitHubSearchApi
{
    public static class WebApiConfig
    {
        public static string UrlPrefixRelative { get { return "~/api"; } }
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var cors = new EnableCorsAttribute("http://localhost:4200", "*", "*");
            cors.SupportsCredentials = true;
            config.EnableCors(cors);

            var builder = new ContainerBuilder();

            builder.RegisterType<SessionBookmarksRepository>()
                   .As<IBookmarksRepository<RepositoryEntry>>()
                   .SingleInstance();

            builder.RegisterApiControllers(AppDomain.CurrentDomain.GetAssemblies());

            var container = builder.Build();
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
