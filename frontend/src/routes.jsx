import { Navigate, useRoutes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import NotFound from "./pages/404";
import Homepage from "./pages/HomePages/HomePage";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Course from "./pages/course";
import Learning from "./pages/learn";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Profile from "./pages/profile";
import SearchResults from "./pages/search";
import Signup from "./pages/signup";

export default function Router() {
  const { user } = useAuthContext();

  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/home",
      element: <Homepage />,
    },
    {
      path: "/search",
      element: <SearchResults />,
    },
    {
      path: "/course/:courseId",
      element: <Course />,
    },
    {
      path: "/cart",
      element: user ? <Cart /> : <Navigate to="/login" />,
    },
    {
      path: "/checkout",
      element: user ? <Checkout /> : <Navigate to="/login" />,
    },
    {
      path: "/profile",
      element: user ? <Profile /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: !user ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/signup",
      element: !user ? <Signup /> : <Navigate to="/" />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/learn/:courseId",
      element: user ? <Learning /> : <Navigate to="/login" />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
}
