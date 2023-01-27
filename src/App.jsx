import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Error from "./pages/Error";
// styles
import "./App.css";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='reservation' element={<Reservation />} />
      <Route path='order' element={<Order />} />
      <Route path='menu' element={<Menu />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
