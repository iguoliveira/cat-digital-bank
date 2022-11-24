import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { CreateCard } from "./pages/CreateCard";
import { Pix } from "./pages/Pix";
import { Deposit } from "./pages/Deposit";

export const URL = "http://localhost:8000"

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
      element: <Signup />,
      loader: async () => {
        return parseInt((Math.random() * (999999 - 100000 + 1) + 100000).toString()).toString()
      },
    },
    {
      path: '/user/id::id/',
      children: [
        {
          path: 'profile',
          element: [<Navbar />, <Profile />],
          loader: async ({ params }) => {
            return axios.get(`${URL}/user/${params.id}/info`).then(res => res.data.rows[0])
          }
        },
        {
          path: 'create-card',
          element: <CreateCard />,
          loader: async ({ params }) => {
            return axios.get(`${URL}/card/${params.id}`).then(res => res.data)
          }
        }
      ]
    },
    {
      path: '/transactions/id::id/',
      children: [
        {
          path: 'pix',
          element: <Pix />,
          loader: async ({ params }) => {
            return axios.get(`${URL}/user/${params.id}/info`).then(res => res.data.rows[0])
          }
        },
        {
          path: 'deposit',
          element: <Deposit />
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
