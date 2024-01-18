import {
  calcularLimitesDeClasificacion,
  clasificarValor,
} from "./clasificacionMedidores";

export const actualizarClasificacionesMedidores = (medidores) => {
  Object.values(medidores).forEach((tipoMedidores) => {
    const limitesPrecision = calcularLimitesDeClasificacion(
      tipoMedidores,
      "precision_estimada"
    );
    const limitesPresupuesto = calcularLimitesDeClasificacion(
      tipoMedidores,
      "presupuesto"
    );

    tipoMedidores.forEach((medidor) => {
      medidor.clasificacion_precision = clasificarValor(
        medidor.precision_estimada,
        limitesPrecision
      );
      medidor.clasificacion_presupuesto = clasificarValor(
        medidor.presupuesto,
        limitesPresupuesto
      );
    });
  });

  return medidores;
};
