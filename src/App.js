import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AdminProducts from "./adminPages/products";

import CustomerLogin from "./pages/auth/login";
import CustomerRegisteration from "./pages/auth/Register";
import Cart from "./pages/Cart";
import ProductsList from "./pages/products";
import Product from "./pages/products/product";
import Welcome from "./pages/welcome";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login/user" element={<CustomerLogin />} />
          <Route path="/register/user" element={<CustomerRegisteration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products" element={<ProductsList />} />

          <Route path='/admin/products' element={<AdminProducts />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
