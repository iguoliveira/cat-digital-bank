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
import { Navbar } from "./components/navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Homepage />
      </>
    ),
  },
  {
    path: "signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
  {
    path: "login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "user/id::id",
    element: (
      <>
        <Navbar />
        <UserProfile />
      </>
    ),
  },
  {
    path: "user/id::id/registerCard",
    element: (
      <>
        <Navbar />
        <CreateCard />
      </>
    ),
  },
  {
    path: "testeteste",
    element: <Teste />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
