import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Main from "./components/main/Main";
import Coaching from "./pages/Coaching";
import Home from "./pages/Home";
import CustomerService from "./pages/CustomerService";
import Product_card from "./pages/product/product.js";

import { Cart } from "./pages/cart/cart.js";
import "./App.css";
import { ShopContextProvider } from "./context/shop-context";


function App() {
  return (
    <ShopContextProvider>
      <div className="page-container">
        <div className="content-wrap">
          
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product_card />}/>
              <Route path="/coaching" element={<Coaching />}/>
              <Route path="/customerservice" element={<CustomerService />}/>
              <Route path="/cart" element={<Cart />}/>
            </Routes>
          </div>
          <Main />
         
        
        
        </div>
      </div>
    </ShopContextProvider>
  );
}

export default App;