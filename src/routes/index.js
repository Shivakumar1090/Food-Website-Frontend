import React, { Suspense } from "react";
import { BrowserRouter, Switch, Redirect, Route,Routes } from 'react-router-dom';
import PrivateRoute from "./privateroutes";
// import Loader from "../components/utill/Loader";

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

const AppRouter = () => {
    return (
        <Suspense>
            <BrowserRouter>
                {/* <Navbar isAuth={isAuth} setIsAuth={setIsAuth} isAdmin={isAdmin} /> */}
                <Routes>
                    <Route path="/" element={<Welcome />} />

                    <Route path="/login" element={<CustomerLogin />} />
                    <Route path="/register" element={<CustomerRegisteration />} />

                    <Route path="/cart" element={<Cart />} />


                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<Product />} />

                    <Route path='/admin' element={<AdminDashBoard />} />
                    <Route path='/admin/orders' element={<AdminOrders />} />
                    <Route path='/admin/products' element={<AdminProducts />} />
                    <Redirect from="*" to="/" />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}