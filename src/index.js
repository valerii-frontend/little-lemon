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
  {
    path: "/little-lemon",
    element: <Home />,
    errorElement: <Error />,
  },
  { path: "/little-lemon/order", element: <Order /> },
  { path: "/little-lemon/reservation", element: <Reservation /> },
  { path: "/little-lemon/about", element: <About /> },
  { path: "/little-lemon/menu", element: <Menu /> },
  { path: "/little-lemon/login", element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
