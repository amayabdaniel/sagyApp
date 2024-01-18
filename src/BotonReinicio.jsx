import React from 'react';

function BotonReinicio({ reiniciarAplicacion }) {
  return (
    <button onClick={reiniciarAplicacion} className="boton-reinicio">
      Reiniciar
    </button>
  );
}

export default BotonReinicio;