import { Navigate, useRoutes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Course from "./pages/course";
import Home from "./pages/home";
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
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
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
  ]);

  return routes;
}
