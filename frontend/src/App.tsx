import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Profile } from "./pages/Profile";
import axios from "axios";
import { CreateCard } from "./pages/CreateCard";

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
    },
    {
      path: '/user/id::id/',
      children: [
        {
          path: 'profile',
          element: <Profile />,
          loader: async ({ params }) => {
            return axios.get('http://localhost:8000/card/' + params.id).then(res => res.data.card)
          }
        },
        {
          path: 'create-card',
          element: <CreateCard />
        }
      ]
    }
  ]);

  const queryClient = new QueryClient

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
};
