import React from "react";
import './Body.css';
import Tipos from "./assets/images/tiposdemedidores.webp"

const Body = () => {
    return (
      <header className="body">
        <div className="Tipos">
          <img src={Tipos} alt="Tipos" />
        </div>
      </header>
    );
  };
  
  export default Body;