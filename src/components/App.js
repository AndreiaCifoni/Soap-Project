import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Soaps from "./Soaps";

const App = () => {
  return (
    <BrowserRouter>
      <Link to={"/soaps"}>Soaps</Link>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/soaps"} element={<Soaps />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
