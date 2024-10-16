import React from 'react';
import logo from '../../assets/logo.png';  // Corrected path
import searchIcon from '../../assets/search.png'; // Corrected path
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Paw Pops Logo" className="logo" />
      <img src={searchIcon} alt="Search" className="search-icon" />
    </div>
  );
};

export default Header;
