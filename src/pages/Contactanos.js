import React from "react";
import "./stylesPages/Contactanos.css";
import genteTrabaja from "../assets/motorfondo.png";
const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="overlay">
      <img src={genteTrabaja} alt="Fondo" className="video-bg" />
      </div>
      <div className="contacto-info">
        <div className="gmail-container">
          <h3>Gmail:</h3>
          <p> correo@gmail.com</p>
        </div>
        <div className="direccion-container">
          <h3>Dirección:</h3>
          <p>123 Calle Principal</p>
        </div>
        <div className="telefono-container">
          <h3>Teléfono:</h3>
          <p> (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
