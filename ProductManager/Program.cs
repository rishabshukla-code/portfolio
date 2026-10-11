using ProductManager.Data;
using ProductManager.Repositories;

var builder = WebApplication.CreateBuilder(args);

// MVC (for the page) + API controllers (for the jQuery AJAX calls)
builder.Services.AddControllersWithViews();

// Dapper data access
builder.Services.AddSingleton<IDbConnectionFactory, SqliteConnectionFactory>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();

// AutoMapper: scans this assembly for Profile classes (see Mapping/MappingProfile.cs)
builder.Services.AddAutoMapper(typeof(Program));

var app = builder.Build();

// Create the SQLite table and seed sample data on first run
DatabaseInitializer.Initialize(app.Services.GetRequiredService<IDbConnectionFactory>());

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}

app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
