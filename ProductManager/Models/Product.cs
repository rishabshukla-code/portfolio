namespace ProductManager.Models;

/// <summary>Database entity. Matches the Products table column-for-column so Dapper can map it.</summary>
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int Quantity { get; set; }
}
