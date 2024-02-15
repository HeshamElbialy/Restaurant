import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ServicesPage from "./pages/services/ServicesPage";
import BlogPage from "./pages/blog/BlogPage";
import Menu from "./pages/menu/Menu";
import Reservation from "./pages/reservation/Reservation";
import Dates from "./pages/dates/Dates";
import Login from "./pages/login/Login";
import ErrorInterceptor from "./Interceptors/ErrorInterceptor";
import TokenInterceptor from "./Interceptors/TokenInterceptor";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dates" element={<Dates />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <ClipLoader
          className="loader"
          color={"#fac564"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <ToastContainer />
          <RouterProvider router={routes} />
        </>
      )}
    </div>
  );
}

export default App;
