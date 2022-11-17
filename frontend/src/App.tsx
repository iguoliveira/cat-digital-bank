import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
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

  const queryClient = new QueryClient

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
};
