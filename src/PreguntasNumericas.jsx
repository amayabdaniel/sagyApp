const verificarValoresPreguntasNumericas = ( categoria, medidores, valorSolicitado) => {

  console.log(medidores);
  const validarRango = (valor, rango) => {
    return valor >= rango.min && valor <= rango.max;
  };

    let medidoresFiltrados = medidores.filter((medidor) => {
      if (categoria === "presion") {
        return (
          validarRango(valorSolicitado, medidor.presion)
        );
      } 
      else if(categoria === "flujo"){
        return (
        validarRango(valorSolicitado, medidor.flujo)
        );
      }
      
      else if (categoria === "voltaje") {
        return (
          validarRango(valorSolicitado, medidor.voltaje)
        );
      }

      else if(categoria == "amperaje"){
        return(
            validarRango(valorSolicitado, medidor.amperaje)
        );
      }

    });

  return medidoresFiltrados;
   
};
export default verificarValoresPreguntasNumericas;
