import Navbar from "./components/header/Navbar";
import Main from "./components/main/Main";
import Coaching from "./pages/Coaching";
import Home from "./pages/Home";
import CustomerService from "./pages/CustomerService";
import Product from "./pages/Product";
import Footer from "./components/footer/Footer";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Korg from "./components/header/Korg";

function App() {
  return (
    <>
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
              
            </Routes>
          </div>
          <Main />

          <Footer />
        </div>
      </div>
    </>
  ); 
  
}

export default App;
