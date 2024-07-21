
import Homepage from "./Homepage";
import Loginpage from "./Loginpage";
import { createBrowserRouter} from 'react-router-dom';
import Signuppage from "./Signuppage";
import About from "./About";
import Contact from "./Contact";
import Balisection from "./Balisection";
import Thailandsection from "./Thailandsection";
import Londonsection from "./Londonsection";
import Singaporesection from "./Singaporesection";
import Nepalsection from "./Nepalsection";
import Russiasection from "./Russiasection";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/> ,
    },

    {
        path: "/Login",
        element: <Loginpage/> ,
      },

      {
        path: "/signup",
        element: <Signuppage/> ,
      },

      {
        path: "/about",
        element: <About/> ,
      },

      {
        path: "/contact",
        element: <Contact/> ,
      },


      // country routers

      {
        path: "/balisection",
        element: <Balisection/> ,
      },

      {
        path: "/londonsection",
        element: <Londonsection/> ,
      },

      {
        path: "/thailandsection",
        element: <Thailandsection/> ,
      },

      {
        path: "/singaporesection",
        element: <Singaporesection/> ,
      },

      {
        path: "/nepalsection",
        element: <Nepalsection/> ,
      },

      {
        path: "/russiasection",
        element: <Russiasection/> ,
      },



  ]);

export default router