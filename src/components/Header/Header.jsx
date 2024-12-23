import React from "react";
import "./Header.css";
import logo from "../../assets/LOGO-WDR.png";


const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
