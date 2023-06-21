import { useRoutes } from "react-router-dom";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Course from "./pages/course";
import Home from "./pages/home";
import Learning from "./pages/learn";
import Login from "./pages/login";
import Profile from "./pages/profile";
import SearchResults from "./pages/search";

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
      path: "course/:courseId",
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
      path: "learn",
      element: <Learning />,
    },
  ]);

  return routes;
}
