const preguntas = [
  {
    categoria: "tipoFlujo",
    titulo: "Tipo de Flujo a Medir",
    explicacion:
      "Elija el tipo de flujo que necesita medir, como agua, electricidad o gas.",
    opciones: [
      { textoRespuesta: "Agua", valor: "agua" },
      { textoRespuesta: "Electricidad", valor: "electricidad" },
      { textoRespuesta: "Gas", valor: "gas" },
    ],
  },
  {
    categoria: "presion",
    tipoMedidor: ["agua", "gas"], // Esta pregunta aparece solo para agua y gas
    titulo: "Presión de Operación Requerida",
    explicacion:
      "Indique la presión de operación en bar. Si el valor es decimal, utilice un punto (.) para separar la parte decimal. Ejemplo: 3.5 bar.",
    tipoEntrada: "numerico",
  },

  // Flujo para Agua y Gas
  {
    categoria: "flujo",
    tipoMedidor: ["agua", "gas"], // Esta pregunta aparece solo para agua y gas
    titulo: "Flujo Máximo Necesario",
    explicacion:
      "Ingrese el flujo máximo requerido en metros cúbicos por hora (m3/h). Utilice un punto (.) para decimales, como en 10.5 m3/h.",
    tipoEntrada: "numerico",
  },

  // Voltaje para Electricidad
  {
    categoria: "conexion",
    titulo: "Tipo de conexión requerido",
    explicacion: "Seleccione el tipo de conexión que necesitan sus medidores.",
    opciones: [
      { textoRespuesta: "Monofásico", valor: "monofásico" },
      { textoRespuesta: "Bifásico", valor: "bifásico" },
      { textoRespuesta: "Trifásico", valor: "trifásico" },
    ],
  },
  {
    categoria: "voltaje",
    tipoMedidor: ["electricidad"], // Esta pregunta aparece solo para electricidad
    titulo: "Voltaje de Operación",
    explicacion:
      "Indique el voltaje de operación para su medidor en V, dependiendo del tipo de medidor tenga en cuenta si es fase-neutro (ej. 120V) o fase-fase (ej. 208V). Según corresponda a su configuración específica.",
    tipoEntrada: "numerico",
  },

  // Amperaje para Electricidad
  {
    categoria: "amperaje",
    tipoMedidor: ["electricidad"], // Esta pregunta aparece solo para electricidad
    titulo: "Amperaje Máximo",
    explicacion:
      "Indique el amperaje máximo en amperios (A). Por ejemplo, si el valor es de 15 amperios, ingrese 15.",
    tipoEntrada: "numerico",
  },

  
  {
    categoria: "clasificacion_precision",
    titulo: "Nivel de Precisión Requerido",
    explicacion:
      "Seleccione el grado de exactitud que necesitan sus mediciones. Opciones desde alta precisión para requisitos rigurosos hasta una precisión más baja para aplicaciones generales.",
    opciones: [
      { textoRespuesta: "Alta precisión (Menor a 0.87% de error)", valor: 3 },
      {
        textoRespuesta: "Precisión media (Entre 0.88% y 1.75% de error)",
        valor: 2,
      },
      { textoRespuesta: "Baja precisión (Mayor a 1.76% de error)", valor: 1 },
    ],
  },
  {
    categoria: "clasificacion_presupuesto",
    titulo: "Rango de Presupuesto",
    explicacion:
      "Indique el rango de presupuesto que tiene asignado para la adquisición de su equipo de medición. Elija entre opciones económicas, un balance entre costo y funcionalidad, o soluciones premium con características avanzadas.",
    opciones: [
      { textoRespuesta: "Económico (Menor a $112.49)", valor: 3 },
      { textoRespuesta: "Moderado (Entre $112.50 y $337.49)", valor: 2 },
      { textoRespuesta: "Premium (Mayor a $337.50)", valor: 1 },
    ],
  },
  {
    categoria: "soporte",
    titulo: "Cobertura de Soporte Posventa",
    explicacion:
      "Determine el nivel de soporte y servicio al cliente que espera después de la compra. Desde soporte básico hasta coberturas extendidas que incluyen mantenimiento y reparaciones.",
    opciones: [
      { textoRespuesta: "Cobertura alta", valor: 3 },
      { textoRespuesta: "Cobertura media", valor: 2 },
      { textoRespuesta: "Cobertura baja", valor: 1 },
    ],
  },
  {
    categoria: "disponibilidad",
    titulo: "Disponibilidad en el mercado",
    explicacion:
      "Informe sobre la importancia de la pronta disponibilidad del equipo para su proyecto. Valore si necesita una solución inmediata o si puede permitirse un tiempo de espera para la entrega.",
    opciones: [
      { textoRespuesta: "Disponibilidad alta", valor: 3 },
      { textoRespuesta: "Disponibilidad media", valor: 2 },
      { textoRespuesta: "Disponibilidad baja", valor: 1 },
    ],
  },
  {
    categoria: "certificacion",
    titulo: "Certificación",
    explicacion:
      "Especifique el tipo de certificaciones que requiere para sus equipos de medición. Esto puede incluir estándares internacionales, normativas locales, o ninguna certificación específica.",
    opciones: [
      { textoRespuesta: "Certificación internacional", valor: 3 },
      { textoRespuesta: "Certificación nacional", valor: 2 },
      { textoRespuesta: "Sin certificación específica", valor: 1 },
    ],
  },
  {
    categoria: "instalacion",
    titulo: "Facilidad de instalación",
    explicacion:
      "Seleccione la opción que mejor represente sus expectativas en cuanto al tiempo de instalación para su nuevo medidor.",
    opciones: [
      { textoRespuesta: "Plug and play", valor: 3 },
      { textoRespuesta: "Varias horas a un día", valor: 2 },
      { textoRespuesta: "Múltiples días con planificación", valor: 1 },
    ],
  },
];

export { preguntas };
