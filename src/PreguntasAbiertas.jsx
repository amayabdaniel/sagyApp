import { useState } from "react";

function PreguntasAbiertas({
  onValorIngresado,
  tipo = "number",
}) {
  const [valor, setValor] = useState("");

  const manejarCambio = (evento) => {
    setValor(evento.target.value);
    if (onValorIngresado) {
      onValorIngresado(evento.target.value);
    }
  };

  return (
    <div>
      <input step="0.01" type={tipo} value={valor} onChange={manejarCambio} />
    </div>
  );
}

export default PreguntasAbiertas;
