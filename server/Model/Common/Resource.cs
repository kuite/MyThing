using Newtonsoft.Json;

namespace webapi.Model.Common
{
    public abstract class Resource : Link
    {
        [JsonIgnore]
        public Link Self { get; set; }
    }
}
