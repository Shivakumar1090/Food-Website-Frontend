import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import AdminProducts from "./adminPages/products";
import AdminOrders from "./adminPages/orders";
import AdminDashBoard from "./adminPages/dashboard";

import CustomerLogin from "./pages/auth/login";
import CustomerRegisteration from "./pages/auth/register";
import Cart from "./pages/Cart";
import Product from "./pages/products/product";
import Welcome from "./pages/welcome";
import Navbar from "./components/Navbar";
import Products from "./pages/products";
import Payment from "./pages/payment/payment";
import OrdersSection from "./pages/orders/orders";



function App() {
  const [isAuth, setIsAuth] = useState(window.localStorage.getItem("isAuth"));
  const [isAdmin, setIsAdmin] = useState(window.localStorage.getItem("isAdmin"));

  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <Navbar isAuth={isAuth} setIsAuth={setIsAuth} isAdmin={isAdmin} />
          <Routes>
            <Route path="/" element={<Welcome />} />

            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/register" element={<CustomerRegisteration />} />

            <Route path="/cart" element={<Cart />} />


            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />

            <Route path="/orders" element={<OrdersSection />}/>
            <Route path="/payment" element={<Payment />}/>

            <Route path='/admin' element={<AdminDashBoard />} />
            <Route path='/admin/orders' element={<AdminOrders />} />
            <Route path='/admin/products' element={<AdminProducts />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
          />
      </ThemeProvider>
    </div>
  );
}

const THEME = createTheme({
  typography: {
    fontFamily: "Varela Round",
    color: "#791314",
  },
  palette: {
    primary: {
      main: '#791314'
    },
  },
  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },

});

export default App;
