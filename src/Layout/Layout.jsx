import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Cart/>
    </>
  );
};

export default Layout;
