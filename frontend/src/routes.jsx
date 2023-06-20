import { useRoutes } from "react-router-dom";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Course from "./pages/course";
import Home from "./pages/home";
import Learning from "./pages/learn";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Profile from "./pages/profile/Profile";
import SearchResults from "./pages/search";
import Signup from "./pages/signup";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "search",
      element: <SearchResults />,
    },
    {
      path: "course",
      element: <Course />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "logout",
      element: <Logout />,
    },
    {
      path: "learn",
      element: <Learning />,
    }
  ]);

  return routes;
}
