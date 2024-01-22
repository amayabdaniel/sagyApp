import React, { useState, useEffect } from "react";
import Header from "./Header";
import Resultados from "./Resultados";
import BotonReinicio from "./BotonReinicio";
import { preguntas as preguntasIniciales } from "./preguntas";
import Footer from "./Footer";
import Body from "./Body";
import actualizarOpcionesPreguntas from "./actualizarOpcionesPreguntas";
import { calcularLimitesDeClasificacion } from "./clasificacionMedidores";
import { obtenerMedidoresConClasificacion } from "./medidores";
import { actualizarClasificacionesMedidores } from "./actualizarClasificacionesMedidores";
import verificarValoresPreguntasNumericas from "./PreguntasNumericas";
import PreguntasAbiertas from "./PreguntasAbiertas";
import Portada from './Portada';

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [limitesPrecisionTotal, setLimitesPrecisionTotal] = useState({});
  const [limitesPresupuestoTotal, setLimitesPresupuestoTotal] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isExisting, setIsExisting] = useState(true);
  const [isMultipleOption, setIsMultipleOption] = useState(true);
  const [medidoresRecomendados, setMedidoresRecomendados] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [preguntas, setPreguntas] = useState(preguntasIniciales);
  const [medidores, setMedidores] = useState({});
  const [medidoresPreguntasNumericas, setMedidoresPreguntasNumericas] =
    useState({});
  const [mostrarPreguntasNumericas, setMostrarPreguntasNumericas] =
    useState(false);
  const [valorPreguntaAbierta, setvalorPreguntaAbierta] = useState("");
  const [mostrarPortada, setMostrarPortada] = useState(true);


  useEffect(() => {
    if (isFinished) {
      if (isExisting) {
        calcularRecomendaciones();
      }
    }
  }, [isFinished, respuestasUsuario]);

  function handleAnswerSubmit(opcion) {
    const categoria = preguntas[preguntaActual].categoria;

    if (categoria === "tipoFlujo") {
      let nuevosMedidores = obtenerMedidoresConClasificacion();
      nuevosMedidores = actualizarClasificacionesMedidores(nuevosMedidores);
      setMedidores(nuevosMedidores);

      const medidoresCalculos = [].concat(...Object.values(nuevosMedidores));
      let valorlimitesPrecisionTotal = calcularLimitesDeClasificacion(
        medidoresCalculos,
        "precision_estimada"
      );
      let valorlimitesPresupuestoTotal = calcularLimitesDeClasificacion(
        medidoresCalculos,
        "presupuesto"
      );

      setLimitesPrecisionTotal(valorlimitesPrecisionTotal);
      setLimitesPresupuestoTotal(valorlimitesPresupuestoTotal);

      const opcionesActualizadas = actualizarOpcionesPreguntas(
        nuevosMedidores,
        preguntasIniciales,
        opcion.valor
      );

      setPreguntas(opcionesActualizadas);
    }

    setRespuestasUsuario((prev) => ({
      ...prev,
      [categoria]: opcion.valor,
    }));

    if (preguntaActual === preguntas.length - 1) {
      setIsFinished(true);
    } else {
      if (categoria === "tipoFlujo") {
        if (opcion.valor === "agua" || opcion.valor === "gas") {
          setIsMultipleOption(false);
          setPreguntaActual((current) => current + 1);
        }
        if (opcion.valor === "electricidad") {
          setPreguntaActual((current) => current + 3);
        }
      } else if (categoria === "conexion") {
        const tipoFlujoSeleccionado = respuestasUsuario.tipoFlujo;
        // Asegúrate de que medidoresFiltrados es un array, incluso si el tipo de flujo no existe en el estado de medidores.
        const medidoresFiltrados = Array.isArray(
          medidores[tipoFlujoSeleccionado]
        )
          ? medidores[tipoFlujoSeleccionado]
          : [];
        const medidoresPorCategoria = medidoresFiltrados.filter(
          (medidor) => medidor.conexion === opcion.valor
        );
        console.log(
          "Los medidores de esta conexion son: ",
          medidoresPorCategoria
        );
        setMedidoresPreguntasNumericas(medidoresPorCategoria);
        setIsMultipleOption(false);
        setPreguntaActual((current) => current + 1);
      }
      else if(categoria === "clasificacion_presupuesto"){

        let medidoresParaFiltros = medidores;
        let medidoresParaResultados = [];

        for (let i = 0; i < medidoresParaFiltros.length; i++) {
          let medidor = medidoresParaFiltros[i];
          if (medidor.presupuesto < limitesPresupuestoTotal.limiteInferior) {
            medidor.clasificacion_presupuesto = 3;
          } else if (
            medidor.presupuesto >= limitesPresupuestoTotal.limiteInferior &&
            medidor.presupuesto <= limitesPresupuestoTotal.limiteSuperior
          ) {
            medidor.clasificacion_presupuesto = 2;
          } else if (
            medidor.presupuesto > limitesPresupuestoTotal.limiteSuperior
          ) {
            medidor.clasificacion_presupuesto = 1;
          }
        }

        medidoresParaResultados = medidoresParaFiltros.filter(
          (medidor) => medidor.clasificacion_presupuesto === opcion.valor
        );

        if (medidoresParaResultados.length === 0) {
          setMedidoresRecomendados([]);
          setIsExisting(false);
          setIsFinished(true);
        }
        else {
          setMedidores(medidoresParaResultados);
          setIsMultipleOption(true);
          setPreguntaActual((current) => current + 1);
        }
      }
       else {
        setIsMultipleOption(true);
        setPreguntaActual((current) => current + 1);
      }
    }
  }

  function calcularRecomendaciones() {
    console.log("Respuestas del usuario:", respuestasUsuario);
    console.log("Medidores Filtrados:", medidores);

    let medidoresParaFiltros = medidores;
    let medidoresParaResultados = [];

    for (let clave in respuestasUsuario) {

    

      if (clave === "tipoFlujo") {
        continue;
      }

      if (clave === "clasificacion_precision") {
        for (let i = 0; i < medidoresParaFiltros.length; i++) {
          let medidor = medidoresParaFiltros[i];
 
          if (
            medidor.precision_estimada < limitesPrecisionTotal.limiteInferior
          ) {
            medidor.clasificacion_precision = 3;
          } else if (
            medidor.precision_estimada >=
              limitesPrecisionTotal.limiteInferior &&
            medidor.precision_estimada <= limitesPrecisionTotal.limiteSuperior
          ) {
            medidor.clasificacion_precision = 2;
          } else if (
            medidor.precision_estimada > limitesPrecisionTotal.limiteSuperior
          ) {
            medidor.clasificacion_precision = 1;
          }
        }
      

        medidoresParaFiltros = medidoresParaFiltros.filter(
          (medidor) => medidor.clasificacion_precision === respuestasUsuario[clave]
        );

        if (medidoresParaFiltros.length === 1) {
          break;
        } else if(medidoresParaFiltros.length === 0){
            medidoresParaFiltros = medidores;
            continue;
        }else {
          continue;
        }
      }
      else if(clave === "clasificacion_presupuesto"){
        continue;
      }

      console.log("Antes del filtro los medidores que hay son: ", medidoresParaFiltros);
      medidoresParaResultados = medidoresParaFiltros.filter(
        (medidor) => medidor[clave] === respuestasUsuario[clave]
      );
      console.log(medidoresParaResultados);
      console.log("Luego del filtro: ", clave);
      console.log("Buscando esta respuesta: ",respuestasUsuario[clave] );
      console.log("Los medidores que quedan son: ", medidoresParaResultados);
      if (medidoresParaResultados.length === 1) {
        medidoresParaFiltros = medidoresParaResultados;
        break;
      } else if (medidoresParaResultados.length > 1) {
        medidoresParaFiltros = medidoresParaResultados;
        continue;
      } else {
        continue;
      }
    }

    setMedidoresRecomendados(medidoresParaFiltros);
  }

  function reiniciarAplicacion() {
    setPreguntaActual(0);
    setRespuestasUsuario({});
    setIsFinished(false);
    setMedidoresRecomendados([]);
    setMedidoresPreguntasNumericas([]);
    setShowExplanation(false);
    setIsMultipleOption(true);
    setIsExisting(true);
  }

  const renderizarOpciones = () => {
    return preguntas[preguntaActual].opciones.map((opcion) => (
      <button key={opcion.valor} onClick={() => handleAnswerSubmit(opcion)}>
        {opcion.textoRespuesta}
      </button>
    ));
  };

  const manejarValorIngresado = (valor) => {
    console.log("Valor ingresado:", valor);
    setvalorPreguntaAbierta(valor);
    // Aquí puedes manejar el valor ingresado, como actualizar el estado o realizar acciones adicionales.
  };

  const manejarSiguiente = () => {
    const tipoFlujoSeleccionado = respuestasUsuario.tipoFlujo;
    // Asegúrate de que medidoresFiltrados es un array, incluso si el tipo de flujo no existe en el estado de medidores.
    const medidoresFiltrados = Array.isArray(medidores[tipoFlujoSeleccionado])
      ? medidores[tipoFlujoSeleccionado]
      : [];

    console.log("Respuestas del usuario:", respuestasUsuario);
    console.log("Medidores Filtrados:", medidoresFiltrados);

    const categoria = preguntas[preguntaActual].categoria;
    let verificarValor = [];
    if (categoria === "presion") {
      verificarValor = verificarValoresPreguntasNumericas(
        categoria,
        medidoresFiltrados,
        valorPreguntaAbierta
      );
      setMedidoresPreguntasNumericas(verificarValor);
    } else {
      verificarValor = verificarValoresPreguntasNumericas(
        categoria,
        medidoresPreguntasNumericas,
        valorPreguntaAbierta
      );
    }

    console.log("Los medidores que cumplen son: ", verificarValor);

    if (verificarValor.length > 0) {
      if (categoria === "presion") {
        setPreguntaActual((current) => current + 1);
      } else if (categoria === "flujo") {
        setIsMultipleOption(true);
        setPreguntaActual((current) => current + 4);
        setMedidores(verificarValor);
      } else if (categoria === "voltaje") {
        setPreguntaActual((current) => current + 1);
        setMedidoresPreguntasNumericas(verificarValor);
      } else if (categoria === "amperaje") {
        setIsMultipleOption(true);
        setPreguntaActual((current) => current + 1);
        setMedidores(verificarValor);
      }
    } else {
      setMedidoresRecomendados([]);
      setIsExisting(false);
      setIsFinished(true);
    }
    
  };

  return (
    <div className="app-container">
      <Header className="header" />
      {mostrarPortada ? (
        <Portada manejarInicio={() => setMostrarPortada(false)} />
      ) : (
      <div className="main-content">
        <div className="app">
          <div className="cuerpo-principal">
            {isFinished ? (
              <Resultados
                medidoresRecomendados={medidoresRecomendados}
                reiniciarAplicacion={reiniciarAplicacion}
              />
            ) : (
              <div className="pregunta-actual">
                <h2>{preguntas[preguntaActual].titulo}</h2>
                <p>{preguntas[preguntaActual].explicacion}</p>

                <div className="opciones">
                  {isMultipleOption ? (
                    renderizarOpciones()
                  ) : (
                    <>
                      <PreguntasAbiertas
                        key={preguntaActual} 
                        onValorIngresado={manejarValorIngresado}
                        tipo="number"
                      />
                      <button
                        className="botonSiguiente"
                        onClick={manejarSiguiente}
                      >
                        Siguiente
                      </button>
                    </>
                  )}
                </div>
                <BotonReinicio reiniciarAplicacion={reiniciarAplicacion} />
              </div>
            )}
          </div>
        </div>
      </div>
      )}
      <Footer className="footer" />
    </div>
  );
}

export default App;
