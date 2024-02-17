import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'

const Navbar = ({ setCountryName }) => {

  const handleChange = (e) => {
    setCountryName(e.target.value);
  };

  useEffect(() => {
  }, [setCountryName]);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to='/'><img src={logo} alt="" className='logo' /></Link>
      </div>
      <div className="all-headline">
        <ul>
          <select name="" id="" onChange={handleChange}>
            <option value="" disabled selected>Select country</option>
            <option value="au">Australia</option>
            <option value="cn">China</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
            <option value="gb">United Kingdom</option>
            <option value="in">India</option>
            <option value="jp">Japan</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="us">United States</option>
          </select>
          <Link to='/business'>Business</Link>
          <Link to='/entertainment'>Entertainment</Link>
          <Link to='/general'>General</Link>
          <Link to='/health'>Health</Link>
          <Link to='/science'>Science</Link>
          <Link to='/sports'>Sports</Link>
          <Link to='/technology'>Technology</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
