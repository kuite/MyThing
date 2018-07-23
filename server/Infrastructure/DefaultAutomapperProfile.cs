using AutoMapper;
using webapi.Controllers;
using webapi.Model;
using webapi.Model.Common;
using webapi.Model.Domain;
using webapi.Model.Database;

namespace webapi.Infrastructure
{
    public class DefaultAutomapperProfile : Profile
    {
        public DefaultAutomapperProfile()
        {
            // CreateMap<ConversationEntity, ConversationResource>()
            //     .ForMember(dest => dest.Self, opt => opt.MapFrom(src => Link.To(
            //         nameof(ConversationsController.GetConversationByIdAsync),
            //         src.Id)))
            //     .ForMember(dest => dest.Comments, opt => opt.MapFrom(src => Link.ToCollection(
            //         nameof(ConversationsController.GetConversationCommentsByIdAsync),
            //         src.Id)));

            // CreateMap<CommentEntity, CommentResource>()
            //     .ForMember(dest => dest.Self, opt => opt.MapFrom(src => Link.To(
            //         nameof(CommentsController.GetCommentByIdAsync),
            //         src.Id)))
            //     .ForMember(dest => dest.Conversation, opt => opt.MapFrom(src => Link.To(
            //         nameof(ConversationsController.GetConversationByIdAsync),
            //         src.Conversation.Id)));
        }
    }
}
