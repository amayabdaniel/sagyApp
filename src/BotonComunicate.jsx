import React from "react";

function BotonComunicate() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=573002610245&text&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="boton-dirigir-wapp"
    >
      Necesita soporte?
    </a>
  );
}

export default BotonComunicate;
