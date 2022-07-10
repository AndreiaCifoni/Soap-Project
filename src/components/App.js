import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./user/Login";
import ContactUs from "./contactUs/ContactUs";
import Register from "./user/Register";
import SoapList from "./soap/SoapList";
import SoapCard from "./soap/SoapCard";
import SoapCreate from "./soap/SoapCreate";
import SoapEdit from "./soap/SoapEdit";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/contact"} element={<ContactUs />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/soaplist"} element={<SoapList />} />
          <Route path={"/soapcard"} element={<SoapCard />} />
          <Route path={"/soapcreate"} element={<SoapCreate />} />
          <Route path={"/soapedit"} element={<SoapEdit />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
