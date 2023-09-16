import React from "react";
import "./stylesPages/Contactanos.css";
import genteTrabaja from "../assets/gente_trabajando.mp4";
const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="overlay">
        <video autoPlay loop muted className="video-bg">
          <source src={genteTrabaja} type="video/mp4" />
          <source src={genteTrabaja} type="video/webm" />
          <source src={genteTrabaja} type="video/ogg" />
          {/* Agrega otros formatos de video para compatibilidad con diferentes navegadores */}
        </video>
      </div>
      <div className="contacto-info">
          <h3>Gmail:</h3>
          <p> correo@gmail.com</p>
          <h3>Dirección:</h3>
          <p>123 Calle Principal</p>
          <h3>Teléfono:</h3>
          <p> (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contacto;
