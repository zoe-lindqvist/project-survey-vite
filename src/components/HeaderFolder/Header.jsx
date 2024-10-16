import React from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header" aria-label="Main header">
      <img src={logo} alt="Paw Pops Logo" className="logo" />

      {/* Adding aria-label to make the search icon clearer for screen readers */}
      <button className="search-button" aria-label="Search">
        <img src={searchIcon} alt="" className="search-icon" />
      </button>
    </header>
  );
};

export default Header;
