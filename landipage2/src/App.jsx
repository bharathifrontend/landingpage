import React from "react";
import "C:/Users/SANTHOSH/React/landipage2/src/Style/Header.css";
import Header from "./Component/Header";
import "C:/Users/SANTHOSH/React/landipage2/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Wonder from "./Component/Wonder";
import Login from "./Component/Login";
import Footer from "./Component/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>

        <Route path="/About" element={<About />}></Route>
        <Route path="/Wonder" element={<Wonder />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
