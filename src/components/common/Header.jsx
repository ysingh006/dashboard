import React from "react";
import {
  FaSearch,
  FaEnvelope,
  FaCog,
  FaBell,
  FaComment,
  FaUser,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__search">
        <input type="text" placeholder="Search..." className="search__input" />
        <FaSearch className="search__icon" />
      </div>

      <div className="header__icons">
        <div className="header__icon">
          <FaEnvelope size={20} />
        </div>
        <div className="header__icon">
          <FaCog size={20} />
        </div>
        <div className="header__icon">
          <FaBell size={20} />
        </div>
        <div className="header__icon">
          <FaComment size={20} />
        </div>
        <div className="header__icon">
          <FaUser size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
