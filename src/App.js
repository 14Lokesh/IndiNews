import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Components/Category";

function App() {
  const [countryName, setCountryName] = useState("in");
  return (
    <>
      <BrowserRouter>
        <Navbar setCountryName={setCountryName} />
        <Routes>
          <Route
            path="/:category"
            element={<Category countryName={countryName} />}
          />
          <Route path="/" element={<Home countryName={countryName} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
