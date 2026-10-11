using ProductManager.Models;

namespace ProductManager.Repositories;

public interface IProductRepository
{
    Task<IEnumerable<Product>> GetAllAsync(string? search);
    Task<Product?> GetByIdAsync(int id);
    Task<int> CreateAsync(Product product);
    Task<bool> UpdateAsync(Product product);
    Task<bool> DeleteAsync(int id);
}
