using webapi.Model.Common;

namespace webapi.Model
{
    public class RootResource : Resource
    {
        public Link Conversations { get; set; }

        public Link Comments { get; set; }
    }
}
