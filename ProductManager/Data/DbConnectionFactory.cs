using System.Data;
using Microsoft.Data.Sqlite;

namespace ProductManager.Data;

public interface IDbConnectionFactory
{
    IDbConnection CreateConnection();
}

public class SqliteConnectionFactory : IDbConnectionFactory
{
    private readonly string _connectionString;

    public SqliteConnectionFactory(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("Default")
            ?? throw new InvalidOperationException("Connection string 'Default' is missing.");
    }

    public IDbConnection CreateConnection() => new SqliteConnection(_connectionString);
}
