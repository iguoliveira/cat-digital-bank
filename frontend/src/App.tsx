import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./pages/Homepage";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [<Navbar />, <Homepage />],
    },
  ]);

  return <RouterProvider router={router} />;
};
