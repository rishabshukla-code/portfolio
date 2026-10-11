using Microsoft.AspNetCore.Mvc;

namespace ProductManager.Controllers;

/// <summary>Serves the single page. All data is loaded afterwards by jQuery from ProductsApiController.</summary>
public class HomeController : Controller
{
    public IActionResult Index() => View();

    public IActionResult Error() => Problem("Something went wrong.");
}
