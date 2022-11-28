import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import React, { useState } from "react";
import Home from "./Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import About from './About/About';
import './App.scss';

const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div className="container-page">
      <div className="container-wrap">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/home" index element={<Home />} />
            <Route path="login" index element={<Login />} />
            <Route path="about" index element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>

  );
};

export default App;
