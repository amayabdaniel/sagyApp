import React from 'react';
import './Portada.css';

const Portada = ({ manejarInicio }) => {
  return (
    <div className="portada">
      <h1>Innovación en Medición: La Guía Definitiva para Encontrar el Medidor Perfecto</h1>
      <p>La aplicación ofrece una experiencia personalizada, asegurando que cada usuario reciba recomendaciones precisas y adaptadas, llevándolos hacia la elección más acertada de medidor.</p>
      <button onClick={manejarInicio} className="boton-iniciar">
        Empiece Aquí
      </button>
    </div>
  );
};

export default Portada;