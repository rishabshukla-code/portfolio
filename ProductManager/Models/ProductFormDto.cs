using System.ComponentModel.DataAnnotations;

namespace ProductManager.Models;

/// <summary>What the browser sends when creating/updating a product. Validated automatically by [ApiController].</summary>
public class ProductFormDto
{
    [Required, StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, StringLength(50)]
    public string Category { get; set; } = string.Empty;

    [Range(0.01, 1_000_000)]
    public decimal Price { get; set; }

    [Range(0, 100_000)]
    public int Quantity { get; set; }
}
