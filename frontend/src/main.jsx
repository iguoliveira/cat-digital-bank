import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Homepage } from "./routes/Homepage";
import { Login } from "./routes/Login";
import { Signup } from "./routes/Signup";
import { UserProfile } from "./routes/UserProfile";
import { CreateCard } from "./routes/CreateCard";
import { Teste } from "./routes/teste";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "user/id::id",
    element: <UserProfile />,
  },
  {
    path: "user/id::id/registerCard",
    element: <CreateCard />,
  },
  {
    path: "testeteste",
    element: <Teste />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
