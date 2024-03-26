import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Cart from "../components/Cart";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Search from "../components/Search";

const Layout = () => {
  const [isvisible, setIsvisible] = useState(false)
  const [isvisible2, setIsvisible2] = useState(false)
  return (
    <div>
      <Header setIsvisible={setIsvisible} isvisible={isvisible}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/search/:name" element={<Search isvisible2={isvisible2} setIsvisible2={setIsvisible2} />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
