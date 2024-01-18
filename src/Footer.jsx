import React from 'react';
import './Footer.css';
import logo from "./assets/images/SagyFooter.png"; 
import whatsappIcon from "./assets/images/Wapp.png";
import InsFoteer from "./assets/images/InsFooter.png";
import FbFoteer from "./assets/images/FbFooter.png";
import LiFooter from "./assets/images/LiFooter.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section moveLeft">
          <img src={logo} alt="Sagy Logo" className="footer-logo" />
        </div>
        <div className="footer-section moveCenter">
          <span>Política de tratamiento de datos</span>
          <span>Derechos reservados NovaFeri 2023</span>
        </div>
        <div className="footer-section moveRight">
          <span>Sigamos conectados</span><br></br>
          <div className="social-icons">
            <a href="#" className="social-icon"><img src={InsFoteer} alt="Instagram" /></a>
            <a href="#" className="social-icon"><img src={FbFoteer} alt="Facebook" /></a>
            <a href="#" className="social-icon"><img src={LiFooter} alt="LinkedIn" /></a>
            <a href="https://api.whatsapp.com/send/?phone=573002610245&text&type=phone_number&app_absent=0" target='_blank' className="social-icon"><img src={whatsappIcon} alt="WhatsApp" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
