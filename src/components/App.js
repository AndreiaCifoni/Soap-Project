import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Soaps from "./Soaps";
import SoapCard from "./SoapCard";
import Workshop from "./Workshops";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/soaps"} element={<Soaps />} />
        <Route path={"/soapcard"} element={<SoapCard />} />
        <Route path={"/workshop"} element={<Workshop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
