import {
  calcularLimitesDeClasificacion,
  clasificarTodosLosMedidores,
} from "./clasificacionMedidores";
import { CLASIFICACION_ALTA, CLASIFICACION_BAJA, CLASIFICACION_MEDIA } from "./constants";

const actualizarOpcionesPreguntas = (medidores, preguntasIniciales, tipoDeFlujo) => {
  clasificarTodosLosMedidores(medidores);

  const todosLosMedidores = [].concat(...Object.values(medidores[tipoDeFlujo]));
  console.log("Todos los medidores: ", todosLosMedidores);

  const limitesPrecisionTotal = calcularLimitesDeClasificacion(
    todosLosMedidores,
    "precision_estimada"
  );
  const limitesPresupuestoTotal = calcularLimitesDeClasificacion(
    todosLosMedidores,
    "presupuesto"
  );

  let preguntasActualizadas = preguntasIniciales.map((pregunta) => {
    if (pregunta.categoria === "clasificacion_precision") {
      return {
        ...pregunta,
        opciones: [
          {
            textoRespuesta: `Alta precisión (Menor a ${limitesPrecisionTotal.limiteInferior}% de error)`,
            valor: CLASIFICACION_ALTA,
          },
          {
            textoRespuesta: `Precisión media (Entre ${limitesPrecisionTotal.limiteInferior}% y ${limitesPrecisionTotal.limiteSuperior}% de error)`,
            valor: CLASIFICACION_MEDIA,
          },
          {
            textoRespuesta: `Baja precisión (Mayor a ${limitesPrecisionTotal.limiteSuperior}% de error)`,
            valor: CLASIFICACION_BAJA,
          },
        ],
      };
    } else if (pregunta.categoria === "clasificacion_presupuesto") {
      return {
        ...pregunta,
        opciones: [
          {
            textoRespuesta: `Económico (Menor a $${limitesPresupuestoTotal.limiteInferior})`,
            valor: CLASIFICACION_ALTA,
          },
          {
            textoRespuesta: `Moderado (Entre $${limitesPresupuestoTotal.limiteInferior} y $${limitesPresupuestoTotal.limiteSuperior})`,
            valor: CLASIFICACION_MEDIA,
          },
          {
            textoRespuesta: `Premium (Mayor a $${limitesPresupuestoTotal.limiteSuperior})`,
            valor: CLASIFICACION_BAJA,
          },
        ],
      };
    }
    return pregunta;
  });

  return preguntasActualizadas;
};

export default actualizarOpcionesPreguntas;
