import React from "react";
import BotonReinicio from "./BotonReinicio";
import BotonComunicate from "./BotonComunicate";

function Resultados({ medidoresRecomendados, reiniciarAplicacion, DirigirAWapp }) {
  const hayResultados = medidoresRecomendados.length > 0;

  const renderizarDetallesMedidor = (medidor, medidorIndex) => {
    const detalles = [];

    if (medidor.presion && medidor.flujo) {
      detalles.push(
        <p key={`${medidorIndex}-presion`}>
          Presión entre {medidor.presion.min} y {medidor.presion.max} bar.
        </p>
      );
      detalles.push(
        <p key={`${medidorIndex}-flujo`}>
          Flujo entre {medidor.flujo.min} y {medidor.flujo.max} m<sup>3</sup>/h.
        </p>
      );
    } else if (medidor.voltaje && medidor.amperaje) {
      detalles.push(
        <p key={`${medidorIndex}-voltaje`}>
          Voltaje entre {medidor.voltaje.min}V fase-neutro y{" "}
          {medidor.voltaje.max}V fase-fase.
        </p>
      );
      detalles.push(
        <p key={`${medidorIndex}-amperaje`}>
          Amperaje entre {medidor.amperaje.min}A y {medidor.amperaje.max}A.
        </p>
      );
    }

    detalles.push(
      <p key={`${medidorIndex}-precision`}>
        Precisión estimada: {medidor.precision_estimada}% de error.
      </p>
    );

    detalles.push(
      <p key={`${medidorIndex}-presupuesto`}>
        Presupuesto: {medidor.presupuesto}$.
      </p>
    );

    if (medidor.url) {
      detalles.push(
        <p key={`${medidorIndex}-info`}>
          <a
            href={medidor.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Descubre Más
          </a>
        </p>
      );
    }

    console.log("Medidores Recomendados:", medidoresRecomendados);

    return detalles;
  };

  return (
    <div className="resultados">
      {hayResultados ? (
        <>
          <h2>Esta es la mejor opción de medidor según tus preferencias:</h2>
          {medidoresRecomendados.map((medidor, index) => (
            <div key={index}>
              <strong>{medidor.instrumento}</strong>
              {renderizarDetallesMedidor(medidor, index)}
            </div>
          ))}
        </>
      ) : (
        <div>
          <h2>No encontramos ningún resultado según lo que ha seleccionado</h2>
          <p>
            Le recomendamos que se ponga en contacto con nuestro equipo de
            ventas para que pueda obtener ayuda para encontrar el (los)
            medidor(es) adecuado(s) para su aplicación.
          </p>
        </div>
      )}
      <BotonComunicate DirigirAWapp={DirigirAWapp} />
      <BotonReinicio reiniciarAplicacion={reiniciarAplicacion} />
    </div>
  );
}

export default Resultados;
