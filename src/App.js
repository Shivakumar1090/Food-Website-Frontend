import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import CustomerLogin from './components/pages/auth/customerLogin';
import CustomerRegisteration from './components/pages/auth/cutomerRegister';
import RestaurantRegisteration from './components/pages/auth/restarantRegister';
import RestuarantLogin from './components/pages/auth/resturantLogin';
import Welcome from './components/pages/welcome';
import Navbar from './components/util/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/login/user" element={<CustomerLogin />}/>
          <Route path="/login/restaurant" element={<RestuarantLogin />}/>
          <Route path="/register/user" element={<CustomerRegisteration />}/>
          <Route path="/register/restaurant" element={<RestaurantRegisteration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
