using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Whiteley.Controllers.Web
{
    public class AppController: Controller
    {
        public AppController()
        {
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
