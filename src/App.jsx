import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Product from "./Pages/Shop/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
