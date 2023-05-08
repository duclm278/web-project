import { useRoutes } from "react-router-dom";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Course from "./pages/course";
import Home from "./pages/home";
import Learning from "./pages/learn";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";
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
      children: [
        {
          path: "",
          element: <Profile />,
        },
        {
          path: "edit",
          element: <ProfileEdit />,
        },
      ],
    },
    {
      path: "login",
      element: <SignIn />,
    },
    {
      path: "register",
      element: <SignUp />,
    },
    {
      path: "learn",
      element: <Learning />,
    }
  ]);

  return routes;
}
