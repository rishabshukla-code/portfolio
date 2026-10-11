using Dapper;
using ProductManager.Data;
using ProductManager.Models;

namespace ProductManager.Repositories;

/// <summary>All SQL lives here. Dapper maps result columns to Product properties by name.</summary>
public class ProductRepository : IProductRepository
{
    private readonly IDbConnectionFactory _factory;

    public ProductRepository(IDbConnectionFactory factory)
    {
        _factory = factory;
    }

    public async Task<IEnumerable<Product>> GetAllAsync(string? search)
    {
        using var connection = _factory.CreateConnection();

        const string sql = """
            SELECT Id, Name, Category, Price, Quantity
            FROM Products
            WHERE @Search IS NULL OR Name LIKE @Search OR Category LIKE @Search
            ORDER BY Name;
            """;

        // Parameterized: user input never gets concatenated into the SQL string
        var pattern = string.IsNullOrWhiteSpace(search) ? null : $"%{search.Trim()}%";
        return await connection.QueryAsync<Product>(sql, new { Search = pattern });
    }

    public async Task<Product?> GetByIdAsync(int id)
    {
        using var connection = _factory.CreateConnection();
        return await connection.QuerySingleOrDefaultAsync<Product>(
            "SELECT Id, Name, Category, Price, Quantity FROM Products WHERE Id = @Id;",
            new { Id = id });
    }

    public async Task<int> CreateAsync(Product product)
    {
        using var connection = _factory.CreateConnection();
        const string sql = """
            INSERT INTO Products (Name, Category, Price, Quantity)
            VALUES (@Name, @Category, @Price, @Quantity);
            SELECT last_insert_rowid();
            """;
        // Dapper reads @Name, @Category... straight from the product object's properties
        var id = await connection.ExecuteScalarAsync<long>(sql, product);
        return (int)id;
    }

    public async Task<bool> UpdateAsync(Product product)
    {
        using var connection = _factory.CreateConnection();
        const string sql = """
            UPDATE Products
            SET Name = @Name, Category = @Category, Price = @Price, Quantity = @Quantity
            WHERE Id = @Id;
            """;
        var rows = await connection.ExecuteAsync(sql, product);
        return rows > 0;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        using var connection = _factory.CreateConnection();
        var rows = await connection.ExecuteAsync("DELETE FROM Products WHERE Id = @Id;", new { Id = id });
        return rows > 0;
    }
}
