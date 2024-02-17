import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './Components/Category';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar  />
        <Routes>
          <Route path="/:category" element={<Category/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
