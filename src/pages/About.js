import React from "react";
import "./stylesPages/About.css"; // Asegúrate de que la ruta sea correcta para tu archivo CSS
import personalImage from "../assets/personal.png"; // Agrega la ruta de la imagen personal.png

function Nosotros() {
  return (
    <>
      <div className="container-sin-contenido">
        <p className="container-sin-contenido-parrafo">No se puede mostrar contenido</p>
      </div>
      <div className="nosotros-container">
        <div className="nosotros-info">
          <h1>
            <span className="bold-text">F.A.R Servicios</span>
          </h1>
          <p>
            Somos una empresa comprometida con la excelencia en la prestación de
            servicios y productos de calidad. F.A.R es una empresa emergente que
            tiene la fuerza necesaria para emprender camino en el rubro de las
            energías renovables. Lo que nos diferencia del resto es nuestro
            enfoque en la innovación y la sostenibilidad, siempre priorizando la
            satisfacción de nuestros clientes.
          </p>
        </div>
        <div className="imagen-container">
          <img src={personalImage} alt="Personal" className="imagen-personal" />
        </div>
      </div>
    </>
  );
}

export default Nosotros;
