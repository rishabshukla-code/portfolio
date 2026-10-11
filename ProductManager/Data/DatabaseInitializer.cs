using Dapper;

namespace ProductManager.Data;

public static class DatabaseInitializer
{
    public static void Initialize(IDbConnectionFactory factory)
    {
        using var connection = factory.CreateConnection();

        connection.Execute("""
            CREATE TABLE IF NOT EXISTS Products (
                Id       INTEGER PRIMARY KEY AUTOINCREMENT,
                Name     TEXT    NOT NULL,
                Category TEXT    NOT NULL,
                Price    REAL    NOT NULL,
                Quantity INTEGER NOT NULL
            );
            """);

        var count = connection.ExecuteScalar<long>("SELECT COUNT(*) FROM Products;");
        if (count > 0) return;

        // Dapper runs the INSERT once per item in the array
        connection.Execute(
            "INSERT INTO Products (Name, Category, Price, Quantity) VALUES (@Name, @Category, @Price, @Quantity);",
            new[]
            {
                new { Name = "Wireless Mouse",      Category = "Electronics", Price = 24.99m, Quantity = 40 },
                new { Name = "Mechanical Keyboard", Category = "Electronics", Price = 89.50m, Quantity = 15 },
                new { Name = "Notebook (A5)",       Category = "Stationery",  Price = 3.25m,  Quantity = 200 },
                new { Name = "Desk Lamp",           Category = "Home",        Price = 32.00m, Quantity = 0 },
                new { Name = "Coffee Mug",          Category = "Home",        Price = 9.99m,  Quantity = 75 }
            });
    }
}
