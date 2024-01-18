import './Header.css';
import React from "react";
import logo from "./assets/images/SagyLogo.png"; 
import whatsappIcon from "./assets/images/Wapp.png"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="whatsapp-button">
        <a
          href="https://api.whatsapp.com/send/?phone=573002610245&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </header>
  );
};

export default Header;
