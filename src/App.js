import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import React, { useState } from "react";
import Home from "./Components/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import About from './About/About';
import SignIn from './Components/SignIn/SignIn';
import Items from './Components/Item/item';
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
            <Route path="signIn" index element={<SignIn />} />
            <Route path="items" index element={<Items />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>

  );
};

export default App;
