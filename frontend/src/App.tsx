import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [<Navbar />, <Home />],
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/sign-up',
      element: <Signup />
    }
  ]);

  return <RouterProvider router={router} />;
};
