import React from "react";
// 1. Import routing components and your Header
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Assuming Header.jsx is in the src/ folder

// 2. Import your page components
// Note: Make sure the file path and name are correct. E.g., "./pages/DashboardPage"
import DashboardPage from "./pages/DashBoard"; 
import SuggestionPage from "./pages/SuggestionPage";
import PredictionPage from "./pages/PredictionPage";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import ProductsPage from "./pages/ProductsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    // 3. Wrap everything in BrowserRouter
    <BrowserRouter>
    <ScrollToTop/>
      <div className="App">
        <Header />
        <main>
          {/* 4. Define the routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/suggestions" element={<SuggestionPage />} />
            <Route path="/predictions" element={<PredictionPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;