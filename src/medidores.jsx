import { clasificarTodosLosMedidores } from "./clasificacionMedidores";

export const medidores = {
  agua: [
    /*   { (para agua o gas y ubicar en el grupo adecuado)
        instrumento: "Nombre del medidor",
        presion: { min: 0, max: 0 }, Rango de presión mínima y máxima (Bar)
        flujo: { min: 0, max: 0 }, Rango de flujo mínimo y máximo (m3/h)
        precision_estimada: 3, Valor en % de error 
        presupuesto: 100, Precio en dolar
        soporte: 1, Nivel según clasificación (3 alto, 2 medio, 1 baja)
        disponibilidad: 2, Nivel según clasificación (3 alto, 2 medio, 1 baja)
        certificacion: 1, Nivel según clasificación (3 alto, 2 medio, 1 baja)
        instalacion: 1, Nivel según clasificación (3 alto, 2 medio, 1 baja)
        url: "Enlace para ver más información del medidor
      }, */
    {
      instrumento: "Medidor para agua potable chorro único",
      presion: { min: 0, max: 16 },
      flujo: { min: 0.03, max: 3 },
      precision_estimada: 3,
      presupuesto: 40.67,
      soporte: 1,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 1,
      url: "https://equysis.com/images/contenido/Catalogo%20Medidores%20de%20Agua20200912113152.pdf"
    },
    {
      instrumento: "Medidor de agua chorro múltiple KVS-R80 esfera seca A/F Básico 1 1/4 Pulg. 32mm + 260mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 2.5 },
      precision_estimada: 1.5,
      presupuesto: 78.78,
      soporte: 1,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MOD.-KVS-R80-MEDIDOR-CHORRO-MULTIPLE-ESFERA-SECA-AF-FICHA-TECNICA.pdf"
    },
    {
      instrumento: "Medidor de agua chorro múltiple KVS-R80 esfera seca A/F Básico 1 1/2 Pulg. 40mm + 300mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 4 },
      precision_estimada: 1.5,
      presupuesto: 151.62,
      soporte: 1,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MOD.-KVS-R80-MEDIDOR-CHORRO-MULTIPLE-ESFERA-SECA-AF-FICHA-TECNICA.pdf"
    },
    {
      instrumento: "Medidor de agua chorro múltiple KVS-R80 esfera seca A/F Básico 2 Pulg. 50mm + 300mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 6.3 },
      precision_estimada: 1.5,
      presupuesto: 202.44,
      soporte: 1,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MOD.-KVS-R80-MEDIDOR-CHORRO-MULTIPLE-ESFERA-SECA-AF-FICHA-TECNICA.pdf"
    },
    {
      instrumento: "Medidor de agua chorro múltiple KVS R160 esfera A/F básic 3/4 Pulg. 20mm + 190mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 2.5 },
      precision_estimada: 1.5,
      presupuesto: 43.95,
      soporte: 2,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MOD.-KVS-R80-MEDIDOR-CHORRO-MULTIPLE-ESFERA-SECA-AF-FICHA-TECNICA-copia.pdf"
    },
    {
      instrumento: "Medidor de agua chorro múltiple KVS R160 esfera A/F básic 1 Pulg. 25mm + 260mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 4 },
      precision_estimada: 1,
      presupuesto: 93.52,
      soporte: 2,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MOD.-KVS-R80-MEDIDOR-CHORRO-MULTIPLE-ESFERA-SECA-AF-FICHA-TECNICA-copia.pdf"
    },
    {
      instrumento: "Medidor de agua chorro múltiple KVS R160 esfera A/F básic 1 1/2 Pulg. 40mm + 300mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 6.3 },
      precision_estimada: 1,
      presupuesto: 190.46,
      soporte: 2,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MOD.-KVS-R80-MEDIDOR-CHORRO-MULTIPLE-ESFERA-SECA-AF-FICHA-TECNICA-copia.pdf"
    },
    {
      instrumento: "Medidor de agua chorro múltiple KVS R160 esfera A/F básic 2 Pulg. 50mm + 300mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 10 },
      precision_estimada: 1,
      presupuesto: 321.63,
      soporte: 2,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MOD.-KVS-R80-MEDIDOR-CHORRO-MULTIPLE-ESFERA-SECA-AF-FICHA-TECNICA-copia.pdf"
    },
    {
      instrumento: "KVS R200 Medidor volumétrico esfera seca A/F básico",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 4 },
      precision_estimada: 1.8,
      presupuesto: 36.65,
      soporte: 1,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2021/02/MOD.-KVS-R160-R200-MEDIDOR-VOLUMETRICO-ESFERA-SECA-AF.pdf"
    },
    {
      instrumento: "Medidor de agua volumétrico KVS R160 esfera seca A/F pre-equipado 1/2 Pulg. 15mm + 190mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 2.5 },
      precision_estimada: 1.2,
      presupuesto: 32.59,
      soporte: 1,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2021/02/MOD.-KVS-R160-R200-MEDIDOR-VOLUMETRICO-ESFERA-SECA-AF.pdf"
    },
    {
      instrumento: "Medidor de agua volumétrico KVS R160 esfera seca A/F pre-equipado 3/4 Pulg. 20mm + 190mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 4 },
      precision_estimada: 1.2,
      presupuesto: 35.88,
      soporte: 1,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2021/02/MOD.-KVS-R160-R200-MEDIDOR-VOLUMETRICO-ESFERA-SECA-AF.pdf"
    },
    {
      instrumento: "KVS R200 Medidor Volumétrico",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 4 },
      precision_estimada: 1.6,
      presupuesto: 34.21,
      soporte: 1,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2021/02/MOD.-KVS-R160-R200-MEDIDOR-VOLUMETRICO-ESFERA-SECA-AF.pdf"
    },
    {
      instrumento: "LXH Medidor volumétrico R200",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 3 },
      precision_estimada: 1.5,
      presupuesto: 39.41,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/LXH-R160.-MOD.-LXH-DN15-20-MEDIDOR-VOLUME%CC%81TRICO-R160-CUERPO-LATO%CC%81N-CON-PRE-DISPOSICIO%CC%81N.pdf"
    },
    {
      instrumento: "Medidor volumétrico LXH R200 DN20 cuerpo de latón con predisposición",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 5 },
      precision_estimada: 1.5,
      presupuesto: 36.62,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 1,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/LXH-R160.-MOD.-LXH-DN15-20-MEDIDOR-VOLUME%CC%81TRICO-R160-CUERPO-LATO%CC%81N-CON-PRE-DISPOSICIO%CC%81N.pdf"
    },
    {
      instrumento: "Medidor volumétrico de pistón rotativo NWM PD-SDC E8 1/2 Pulg. 15mm + rosca 3/4 Pulg. entrada + 3/4 salida R315",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max:  3.125 },
      precision_estimada: 1.5,
      presupuesto: 44.18,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 3,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/NWM-PD-SDC-E8-MOD.-NWM-PD-SDC-E8-DN15-MEDIDOR-VOLUME%CC%81TRICO-DE-PISTO%CC%81N-ROTATIVO-R200-CUERPO-COMPOSITE-ESFERA-SECA-CON-PRE-DISPOSICIO%CC%81N.pdf"
    },
    {
      instrumento: "PDLFC Medidor volumétrico R200",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max:  5 },
      precision_estimada: 1.5,
      presupuesto: 30.90,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 3,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/INOX-CON-PREDISPOSICIO%CC%81N.pdf"
    },
    {
      instrumento: "Medidor mecánico de agua chorro único SJ-LFC 5R Cuerpo composite 5 rodillos R160 1/2 Pulg. DN15 115mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 3.125 },
      precision_estimada: 1,
      presupuesto: 26.12,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/SJ-LFC-5R-MOD.-SJ-LFC-MEDIDOR-MECA%CC%81NICO-CUERPO-COMPOSITE-5-RODILLOS-R160.pdf"
    },
    {
      instrumento: "Medidor de agua chorro único SJ-SDC D3 R100 cuerpo composite 1/2 DN15 115mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0.016, max: 3.125 },
      precision_estimada: 2,
      presupuesto: 23.17,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/SJ-SDC-MOD.-SJ-SDC-D3-DN15-MEDIDOR-CHORRO-U%CC%81NICO-R100-CUERPO-COMPOSITE.pdf"
    },
    {
      instrumento: "Medidor chorro único SJ-SDC PLUS R100 cuerpo de latón 1/2 Pulg. 15mm + rosca 3/4 Pulg. entrada - 3/4 Pulg. salida",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 3.125 },
      precision_estimada: 2,
      presupuesto: 25.01,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/SJ-SDC-PLUS-MOD.-SJ-SDC-PLUS-DN15-20-MEDIDOR-CHORRO-U%CC%81NICO-R100-CUERPO-LATO%CC%81N.pdf"
    },
    {
      instrumento: "Medidor chorro único SJ-SDC PLUS R100 cuerpo de latón 1 Pulg. 20mm + rosca 1 Pulg. entrada - 1 Pulg. salida",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 5 },
      precision_estimada: 2,
      presupuesto: 38.24,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/SJ-SDC-PLUS-MOD.-SJ-SDC-PLUS-DN15-20-MEDIDOR-CHORRO-U%CC%81NICO-R100-CUERPO-LATO%CC%81N.pdf"
    },
    {
      instrumento: "Medidor chorro único SJ-SDC PLUS R160 Cuerpo COMPOSITE con predisposición",
      presion: { min: 0, max: 16 },
      flujo: { min: 0.06, max: 3.125 },
      precision_estimada: 2,
      presupuesto: 27.16,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/SJ-SDC-PLUS-MOD.-SJ-SDC-PLUS-DN15-MEDIDOR-CHORRO-U%CC%81NICO-R160-CUERPO-LATO%CC%81N-CON-PRE-DISPOSICIO%CC%81N_compressed.pdf"
    },
    {
      instrumento: "Medidor de chorro único SJ-SDC PLUS R160 cuerpo de latón con predisposición",
      presion: { min: 0, max: 16 },
      flujo: { min: 0, max: 5 },
      precision_estimada: 2,
      presupuesto: 30.18,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 1,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/SJ-SDC-PLUS-MOD.-SJ-SDC-PLUS-DN15-20-MEDIDOR-CHORRO-U%CC%81NICO-R100-CUERPO-LATO%CC%81N.pdf"
    },
    {
      instrumento: "Medidor de agua fría 30º WPH K30 WOLTMANN de turbina pre-equipado BRIDA ANSI R80 2 Pulg. 50 mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0.03, max: 31.25 },
      precision_estimada: 1,
      presupuesto: 239.78,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 2,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MEDIDOR-WOLTMAN-DE-TURBINA-AGUA-FRI%CC%81A-30o-PRE-EQUIPADO-MOD.-WPH-K30.pdf"
    },
    {
      instrumento: "Medidor de agua fría 30º WPH K30 WOLTMANN de turbina  pre-equipado BRIDA ANSI R80 2 1/2 Pulg. 65 mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0.03, max: 50 },
      precision_estimada: 1,
      presupuesto: 283.37,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 2,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MEDIDOR-WOLTMAN-DE-TURBINA-AGUA-FRI%CC%81A-30o-PRE-EQUIPADO-MOD.-WPH-K30.pdf"
    },
    {
      instrumento: "Medidor de agua fría 30º WPH K30 WOLTMANN de turbina  pre-equipado BRIDA ANSI R80 3 Pulg. 80 mm",
      presion: { min: 0, max: 16 },
      flujo: { min: 0.03, max: 78.75 },
      precision_estimada: 1,
      presupuesto: 328.91,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 2,
      instalacion: 2,
      url: "https://www.batsur.co/wp-content/uploads/2020/12/MEDIDOR-WOLTMAN-DE-TURBINA-AGUA-FRI%CC%81A-30o-PRE-EQUIPADO-MOD.-WPH-K30.pdf"
    },
    {
      instrumento: "Medidor para agua tipo paleta tangencial",
      presion: { min: 0, max: 16 },
      flujo: { min: 1.2, max: 30 },
      precision_estimada: 1,
      presupuesto: 83.37,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 3,
      url: "https://equysis.com/images/contenido/Catalogo%20Medidores%20de%20Agua20200912113152.pdf"
    },
    {
      instrumento: "Medidor para agua de pistón rotativo RTKD-M",
      presion: { min: 0.3, max: 16 },
      flujo: { min: 0.0064, max: 2 },
      precision_estimada: 0.5,
      presupuesto: 130.62,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 3,
      instalacion: 2,
      url: "https://pim.zenner.com/wp-content/uploads/documents/data_sheets/water_meter/HWZ/ES/DB_HWZ_RTKD-M_RTKD-M-CC_ES.pdf"
    },
    {
      instrumento: "Medidor de flujo tipo electromagnético con pantalla remota",
      presion: { min: 0, max: 10.3421 },
      flujo: { min: 3, max: 60 },
      precision_estimada: 2,
      presupuesto: 194.37,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 2,
      instalacion: 2,
      url: "https://equysis.com/images/contenido/Catalogo%20Medidores%20de%20Agua20200912113152.pdf"
    },
    {
      instrumento: "Medidor para agua potable tipo ultrasónico de tiempo en tránsito",
      presion: { min: 0, max: 16 },
      flujo: { min: 0.05, max: 31.5 },
      precision_estimada: 1,
      presupuesto: 129.72,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 2,
      instalacion: 3,
      url: "https://equysis.com/images/contenido/Catalogo%20Medidores%20de%20Agua20200912113152.pdf"
    },
    {
      instrumento: "Medidor para agua de Desplazamiento Positivo y Medidores de Velocidad",
      presion: { min: 0, max: 19.5 },
      flujo: { min: 10, max: 97 },
      precision_estimada: 0.5,
      presupuesto: 350.15,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 3,
      instalacion: 3,
      url: "https://grupo-syz.com/wp-content/uploads/2022/05/Medidor-desplazamiento-brodie-birotor-plus.pdf"
    },
    {
      instrumento: "Medidor para agua de Pistón Oscilante Serie Universal",
      presion: { min: 0, max: 67 },
      flujo: { min: 0.09, max: 0.9 },
      precision_estimada: 1,
      presupuesto: 250.25,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 2,
      instalacion: 2,
      url: "https://www.badgermeter.com/es-us/productos/medidores/medidores-de-flujo-de-piston-oscilante/medidores-serie-universal/"
    },
  ],
  electricidad: [
    /* {
      instrumento: "Nombre del medidor",
      conexion: "monofásico", (Tipo de conexión monofásico, bifásico o trifásico)
      voltaje: { min: 120, max: 120 }, Rango de voltaje fase neutro y fase fase
      amperaje: { min: 5, max: 100 }, Rango de amperaje mínimo y máximo
      precision_estimada: 3, Valor en % de error 
      presupuesto: 50, Precio en dolar
      soporte: 2, Nivel según clasificación (3 alto, 2 medio, 1 baja)
      disponibilidad: 3, Nivel según clasificación (3 alto, 2 medio, 1 baja)
      certificacion: 1, Nivel según clasificación (3 alto, 2 medio, 1 baja)
      instalacion: 2, Nivel según clasificación (3 alto, 2 medio, 1 baja)
      url: "Enlace para ver más información del medidor"
    }, */
    {
      instrumento: "Contador Electronico Monofasico 1x (5-100) A, 120 V",
      conexion: "monofásico",
      voltaje: { min: 120, max: 120 },
      amperaje: { min: 5, max: 100 },
      precision_estimada: 3,
      presupuesto: 50,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 2,
      url: "https://interelectricas.com.co/medidores-de-energia/2085-contador-electronico-monofasico-5-100a-lcd.html"
    },
    {
      instrumento: "Contador Electrónico Bifásico Ref. 2x (5-100) A, 120/208 V",
      conexion: "bifásico",
      voltaje: { min: 120, max: 208 },
      amperaje: { min: 5, max: 100 },
      precision_estimada: 0.5,
      presupuesto: 120,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 3,
      instalacion: 2,
      url: "https://interelectricas.com.co/medidores-de-energia/1570-contador-electronico-bifasico-5-100a-lcd-cl-1-calibrado.html"
    },
    {
      instrumento: "Contador Elster A1860 con Puerto Ref: CL 0 5S CALIBRADO (1-10) A, 57/100 V",
      conexion: "trifásico",
      voltaje: { min: 57, max: 100 },
      amperaje: { min: 1, max: 10 },
      precision_estimada: 1,
      presupuesto: 180,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 3,
      instalacion: 2,
      url: "https://interelectricas.com.co/medidores-de-energia/2944-contador-elster-a1860-1-10a-con-puerto-ref-cl-0-5s-calibrado.html"
    },
    {
      instrumento: "Contador Elster A1860 con Puerto Ref: CL 0 5S CALIBRADO (1-10) A, 277/480 V",
      conexion: "trifásico",
      voltaje: { min: 277, max: 480 },
      amperaje: { min: 1, max: 10 },
      precision_estimada: 1.5,
      presupuesto: 190,
      soporte: 3,
      disponibilidad: 1,
      certificacion: 3,
      instalacion: 2,
      url: "https://interelectricas.com.co/medidores-de-energia/2944-contador-elster-a1860-1-10a-con-puerto-ref-cl-0-5s-calibrado.html"
    },
    {
      instrumento: "Contador Elster A1800 Indirecta con Puerto (1-100) A, 57/100 V",
      conexion: "trifásico",
      voltaje: { min: 57, max: 100 },
      amperaje: { min: 1, max: 100 },
      precision_estimada: 1,
      presupuesto: 340,
      soporte: 3,
      disponibilidad: 1,
      certificacion: 1,
      instalacion: 3,
      url: "https://interelectricas.com.co/medidores-de-energia/5011-contador-elster-a1800-1-10a-indirecta-con-puerto.html"
    },
    {
      instrumento: "Contador Elster A1800 Indirecta con Puerto (1-100) A, 277/480 V",
      conexion: "trifásico",
      voltaje: { min: 277, max: 480 },
      amperaje: { min: 1, max: 100 },
      precision_estimada: 1,
      presupuesto: 340,
      soporte: 3,
      disponibilidad: 1,
      certificacion: 1,
      instalacion: 3,
      url: "https://interelectricas.com.co/medidores-de-energia/5011-contador-elster-a1800-1-10a-indirecta-con-puerto.html"
    },
  ],
  gas: [
    /*   { (para agua o gas y ubicar en el grupo adecuado)
    instrumento: "Nombre del medidor",
    presion: { min: 0, max: 0 }, Rango de presión mínima y máxima (Bar)
    flujo: { min: 0, max: 0 }, Rango de flujo mínimo y máximo (m3/h)
    precision_estimada: 3, Valor en % de error 
    presupuesto: 100, Precio en dolar
    soporte: 1, Nivel según clasificación (3 alto, 2 medio, 1 baja)
    disponibilidad: 2, Nivel según clasificación (3 alto, 2 medio, 1 baja)
    certificacion: 1, Nivel según clasificación (3 alto, 2 medio, 1 baja)
    instalacion: 1, Nivel según clasificación (3 alto, 2 medio, 1 baja)
    url: "Enlace para ver más información del medidor"
  }, */
    {
      instrumento: "Medidor para gas G1.6 tipo Diafragma",
      presion: { min: 0, max: 0.5 },
      flujo: { min: 0.016, max: 2.5 },
      precision_estimada: 0.5,
      presupuesto: 390,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 3,
      instalacion: 2,
      url: "https://tuvalrep.com.co/wp-content/uploads/2022/08/FICHA-TECNICA-MEDIDOR-GAS-G-1.6-ESTANDAR-METREX.pdf"
    },
    {
      instrumento: "Medidor de gas para control interno Ref. G1.6",
      presion: { min: 0.015, max: 0.5 },
      flujo: { min: 0.016, max: 2.5 },
      precision_estimada: 1,
      presupuesto: 85,
      soporte: 1,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 2,
      url: "https://jhasupply.com.co/producto/medidor-de-gas-residencial-g16/10001/"
    },
    {
      instrumento: "Medidor de gas para control interno comercial Ref. G4 con conectores de 3/4.",
      presion: { min: 0.015, max: 0.5 },
      flujo: { min: 0.016, max: 6 },
      precision_estimada: 1,
      presupuesto: 130,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 1,
      instalacion: 2,
      url: "https://jhasupply.com.co/producto/medidor-de-gas-g4-comercial-con-conectores/100003/"
    },
    {
      instrumento: "Contador de gas con membrana G1.6A",
      presion: { min: 0, max: 0.5 },
      flujo: { min: 0.016, max: 4 },
      precision_estimada: 0.5,
      presupuesto: 180,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 2,
      instalacion: 2,
      url: "https://zenner.com/es/products/gas_diaphragm_g1-6a_g2-5a/"
    },
    {
      instrumento: "Contadores de gas de amplio rango Atmos® WG2.5S",
      presion: { min: 0, max: 0.5 },
      flujo: { min: 0.016, max: 6 },
      precision_estimada: 0.5,
      presupuesto: 200,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 3,
      instalacion: 2,
      url: "https://zenner.com/es/products/gas_diaphragm_wg2-5s_wide-range/"
    },
    {
      instrumento: "Medidor de flujo de gas ultrasónico",
      presion: { min: 0, max: 153 },
      flujo: { min: 7, max: 610 },
      precision_estimada: 0.2,
      presupuesto: 400,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 3,
      instalacion: 3,
      url: "https://www.fiorentini.com/wp-content/uploads/2021/03/fiosonic_brochure_SPA.pdf"
    },
    {
      instrumento: "Medidor de gas de turbina Quantometer",
      presion: { min: 16, max: 20 },
      flujo: { min: 2, max: 2500 },
      precision_estimada: 0.5,
      presupuesto: 340,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 3,
      instalacion: 3,
      url: "https://premac.co/producto/medidor-de-gas-de-turbina-quantomer/"
    },
    {
      instrumento: "Medidor de gas de Orificio",
      presion: { min: 1.5, max: 12 },
      flujo: { min: 0.07, max: 4 },
      precision_estimada: 2.5,
      presupuesto: 160,
      soporte: 2,
      disponibilidad: 3,
      certificacion: 3,
      instalacion: 2,
      url: "https://es.silverinstruments.com/differential-pressure-flowmeter/orifice-plate-flow-meter.html"
    },
    {
      instrumento: "Medidor de gas de Coriolis",
      presion: { min: 0, max: 16 },
      flujo: { min: 0.07, max: 3 },
      precision_estimada: 0.2,
      presupuesto: 380,
      soporte: 2,
      disponibilidad: 2,
      certificacion: 3,
      instalacion: 2,
      url: "https://br.omega.com/omegaFiles/green/pdf/FMC-5000.pdf"
    },
    {
      instrumento: "Medidor de gas de flujo másico Serie SLAMf",
      presion: { min: 0.35, max: 103.4 },
      flujo: { min: 0, max: 6 },
      precision_estimada: 3,
      presupuesto: 210,
      soporte: 3,
      disponibilidad: 3,
      certificacion: 3,
      instalacion: 2,
      url: "https://www.gometrics.net/producto/slamf-series/"
    },
    {
      instrumento: "Medidor de gas Rotativo G16",
      presion: { min: 0, max: 20 },
      flujo: { min: 0.25, max: 25 },
      precision_estimada: 0.5,
      presupuesto: 340,
      soporte: 3,
      disponibilidad: 2,
      certificacion: 2,
      instalacion: 3,
      url: "https://sti-gas.com/medidores-rotativos-industriales-cgr-fx-common/"
    },
  ],
};
export const obtenerMedidoresConClasificacion = () => {
  const medidoresCopiados = JSON.parse(JSON.stringify(medidores));
  clasificarTodosLosMedidores(medidoresCopiados);
  return medidoresCopiados;
};
