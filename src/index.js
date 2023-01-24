import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Login from "./pages/Login";
import Error from "./pages/Error";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "order", element: <Order /> },
  { path: "reservation", element: <Reservation /> },
  { path: "about", element: <About /> },
  { path: "menu", element: <Menu /> },
  { path: "login", element: <Login /> },
  { path: "*", element: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
