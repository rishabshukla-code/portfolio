namespace ProductManager.Models;

/// <summary>What the API sends back to the browser. Has two computed fields filled in by AutoMapper.</summary>
public class ProductDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int Quantity { get; set; }

    public decimal TotalValue { get; set; }   // Price * Quantity
    public bool InStock { get; set; }         // Quantity > 0
}
