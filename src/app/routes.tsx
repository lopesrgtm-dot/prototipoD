import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AllCategories } from "./components/AllCategories";
import { Search } from "./components/Search";
import { ServiceDetails } from "./components/ServiceDetails";
import { Chat } from "./components/Chat";
import { Orders } from "./components/Orders";
import { Profile } from "./components/Profile";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "categories", Component: AllCategories },
      { path: "search", Component: Search },
      { path: "service/:id", Component: ServiceDetails },
      { path: "chat/:id?", Component: Chat },
      { path: "orders", Component: Orders },
      { path: "profile", Component: Profile },
    ],
  },
]);
