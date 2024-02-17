import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to='/'><img src={logo} alt=""  className='logo'/></Link>
      </div>
      <div className="all-headline">
        <ul>
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
