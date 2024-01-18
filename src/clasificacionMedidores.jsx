import { CLASIFICACION_ALTA, CLASIFICACION_MEDIA, CLASIFICACION_BAJA } from './constants';

export const calcularLimitesDeClasificacion = (medidoresPorTipo, campo) => {
  const valores = medidoresPorTipo.map((medidor) => medidor[campo]);
  const maxValue = Math.max(...valores);
  const minValue = Math.min(...valores);

  const rango = (maxValue - minValue) / 3;
  const limiteInferior = parseFloat((minValue + rango).toFixed(2));
  const limiteSuperior = parseFloat((limiteInferior + rango).toFixed(2));

  return {
    limiteInferior,
    limiteSuperior,
  };
};

export const clasificarValor = (valor, limites) => {
  if (valor < limites.limiteInferior) {
    return CLASIFICACION_ALTA; 
  } else if (valor < limites.limiteSuperior) {
    return CLASIFICACION_MEDIA; 
  } else {
    return CLASIFICACION_BAJA;
  }
};

export const clasificarTodosLosMedidores = (medidores) => {
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
};
