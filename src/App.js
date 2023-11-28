import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/NavbarFolder/Navbar';
import Main from './components/main/Main';
import Coaching from './pages/CoachingFolder/Coaching';
import Home from './pages/HomeFolder/Home';
import CustomerService from './pages/CustomerFolder/CustomerService';
import Product from './pages/ProductFolder/Product';
import Footer from './components/footer/Footer';
import Korg from './components/header/KorgFolder/Korg';
import { CartProvider } from "./components/CartContext";
import SearchResultPage from './pages/SearchResultatFolder/SearchResultPage';

import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/customerservice" element={<CustomerService />} />
              <Route path="/korg" element={<Korg />} />
              <Route path="/search" element={<SearchResultPage />} />
            </Routes>
          </div>
          <Main />
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
