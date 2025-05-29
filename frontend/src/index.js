import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Page Components
import Homepage from './landing_page/home/Homepage';
import About from './landing_page/about/AboutPage.';  // No trailing dot
import Signup from './landing_page/signup/Signup';
import Product from './landing_page/products/productpage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';


// Shared Components
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Product />} />  {/* plural */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} /> 
        <Route path="*" element={<NotFound/>} />


      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
