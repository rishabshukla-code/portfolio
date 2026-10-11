# Product Manager

A small single-page product inventory app built with **ASP.NET Core MVC (C#)**, **Dapper**, **AutoMapper**, **JavaScript** and **jQuery**.

Add, edit, delete and search products without page reloads. Each product shows its total stock value and an in-stock badge, and the footer shows the total inventory value.

## Tech stack

| Tech | Where |
|---|---|
| ASP.NET Core 8 MVC + Web API | `Controllers/HomeController.cs` (page), `Controllers/ProductsApiController.cs` (JSON API) |
| C# | Models, repository, DI setup in `Program.cs` |
| Dapper | `Repositories/ProductRepository.cs`: parameterized SQL, `QueryAsync`, `ExecuteAsync`, `ExecuteScalarAsync` |
| AutoMapper | `Mapping/MappingProfile.cs`: Entity → DTO with computed fields, Form DTO → Entity |
| JavaScript + jQuery | `wwwroot/js/products.js`: `$.ajax` CRUD, event delegation, debounced search, client and server validation display |
| SQLite | Created automatically as `products.db` on first run, with 5 sample products |

## Run it

1. Install the [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0).
2. From this folder, run:
   ```bash
   dotnet run
   ```
3. Open the URL printed in the console (e.g. `http://localhost:5000`).

## How a request flows

```
Browser (jQuery $.ajax)
   │  POST /api/products  { name, category, price, quantity }
   ▼
ProductsApiController      ← [ApiController] validates ProductFormDto (400 if invalid)
   │  AutoMapper: ProductFormDto → Product
   ▼
ProductRepository          ← Dapper: INSERT ... ; SELECT last_insert_rowid();
   ▼
SQLite (products.db)
   ▲
   │  AutoMapper: Product → ProductDto (adds TotalValue, InStock)
   └─ JSON back to jQuery → table re-rendered
```

## API

| Method | URL | Description |
|---|---|---|
| GET | `/api/products?search=` | List (optional search by name/category) |
| GET | `/api/products/{id}` | Get one |
| POST | `/api/products` | Create |
| PUT | `/api/products/{id}` | Update |
| DELETE | `/api/products/{id}` | Delete |

## Project structure

```
ProductManager/
├── Controllers/     HomeController, ProductsApiController
├── Data/            Connection factory + DB initializer (table + seed)
├── Mapping/         AutoMapper profile
├── Models/          Product (entity), ProductDto (output), ProductFormDto (input)
├── Repositories/    IProductRepository + Dapper implementation
├── Views/           Razor layout + single Index page with Bootstrap modal
└── wwwroot/js/      products.js (all jQuery logic)
```
