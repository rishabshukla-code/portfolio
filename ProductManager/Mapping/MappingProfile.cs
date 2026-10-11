using AutoMapper;
using ProductManager.Models;

namespace ProductManager.Mapping;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Entity -> DTO (outgoing). Same-named properties map automatically;
        // the two computed fields are configured explicitly.
        CreateMap<Product, ProductDto>()
            .ForMember(dest => dest.TotalValue, opt => opt.MapFrom(src => src.Price * src.Quantity))
            .ForMember(dest => dest.InStock, opt => opt.MapFrom(src => src.Quantity > 0));

        // Form DTO -> Entity (incoming). Id is set by the database / route, never by the client.
        CreateMap<ProductFormDto, Product>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
    }
}
