using Newtonsoft.Json;

namespace webapi.Model
{
    public sealed class RouteLink : Link
    {
        [JsonIgnore]
        public string RouteName { get; set; }

        [JsonIgnore]
        public object RouteValues { get; set; }
    }
}
