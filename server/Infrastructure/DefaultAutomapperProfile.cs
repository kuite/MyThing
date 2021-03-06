﻿using AutoMapper;
using webapi.Controllers;
using webapi.Model;
using webapi.Model.Common;
using webapi.Model.Domain;
using webapi.Model.Database;
using System;

namespace webapi.Infrastructure
{
    public class DefaultAutomapperProfile : Profile
    {
        public DefaultAutomapperProfile()
        {
            CreateMap<RegisterUserForm, UserEntity>(MemberList.Source)
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));

            CreateMap<FundEntity, Fund>(MemberList.Source)
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id.ToString()));

            CreateMap<Fund, FundEntity>(MemberList.Source)
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => new Guid(src.Id)));

            CreateMap<InvestingPlan, PlanSettings>(MemberList.Source)
                .ForMember(dest => dest.DurationDays, opt => opt.MapFrom(src => DateTime.Now.Day - src.StartDate.Day));

            CreateMap<PlanSettings, PlanSettingsEntity>(MemberList.Source);

            CreateMap<PlanSettingsEntity, PlanSettings>(MemberList.Source);
        }
    }
}
