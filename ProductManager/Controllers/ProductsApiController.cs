using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductManager.Models;
using ProductManager.Repositories;

namespace ProductManager.Controllers;

/// <summary>
/// JSON REST API called by wwwroot/js/products.js.
/// [ApiController] automatically returns 400 with validation errors if the ProductFormDto is invalid.
/// </summary>
[ApiController]
[Route("api/products")]
public class ProductsApiController : ControllerBase
{
    private readonly IProductRepository _repository;
    private readonly IMapper _mapper;

    public ProductsApiController(IProductRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    // GET api/products?search=lamp
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDto>>> GetAll([FromQuery] string? search)
    {
        var products = await _repository.GetAllAsync(search);
        return Ok(_mapper.Map<IEnumerable<ProductDto>>(products));
    }

    // GET api/products/5
    [HttpGet("{id:int}")]
    public async Task<ActionResult<ProductDto>> GetById(int id)
    {
        var product = await _repository.GetByIdAsync(id);
        if (product is null) return NotFound();
        return Ok(_mapper.Map<ProductDto>(product));
    }

    // POST api/products
    [HttpPost]
    public async Task<ActionResult<ProductDto>> Create(ProductFormDto form)
    {
        var product = _mapper.Map<Product>(form);
        product.Id = await _repository.CreateAsync(product);

        return CreatedAtAction(nameof(GetById), new { id = product.Id }, _mapper.Map<ProductDto>(product));
    }

    // PUT api/products/5
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, ProductFormDto form)
    {
        var product = _mapper.Map<Product>(form);
        product.Id = id;

        var updated = await _repository.UpdateAsync(product);
        return updated ? NoContent() : NotFound();
    }

    // DELETE api/products/5
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _repository.DeleteAsync(id);
        return deleted ? NoContent() : NotFound();
    }
}
