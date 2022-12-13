import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import CustomerLogin from './components/pages/auth/login';
import CustomerRegisteration from './components/pages/auth/Register';
import Cart from "./components/pages/Cart";
import Product from "./components/pages/products/product";
import Welcome from './components/pages/welcome';
import Footer from "./components/util/Footer";
import Navbar from './components/util/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/login/user" element={<CustomerLogin />}/>
          <Route path="/register/user" element={<CustomerRegisteration />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/products" element={<Product />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
