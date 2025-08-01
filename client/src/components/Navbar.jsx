// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

import { FaSearch, FaHome, FaUsers } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Pitch<span>Mate</span></h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <ul className="navbar-menu">
        <li className="active">
          Home <FaHome className="icon" />
        </li>
        <li>
          Network <FaUsers className="icon" />
        </li>
        <li>
          How it works <MdKeyboardArrowDown className="icon" />
        </li>
        <li>
          Events <MdKeyboardArrowDown className="icon" />
        </li>
        <li>
          About <MdKeyboardArrowDown className="icon" />
        </li>
      </ul>

      <div className="profile-image">
        <img src="/profile.jpeg" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
