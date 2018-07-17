using Newtonsoft.Json;

namespace webapi.Model
{
    public abstract class Resource : Link
    {
        [JsonIgnore]
        public Link Self { get; set; }
    }
}
