import React from "react";
import "./stylesPages/Contactanos.css";
import genteTrabaja from "../assets/motorfondo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="overlay">
        <img src={genteTrabaja} alt="Fondo" className="video-bg" />
      </div>
      <div className="contacto-info">
        <div className="gmail-container">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>farenergetica@gmail.com</p>
        </div>
        <div className="direccion-container">
          <FontAwesomeIcon  icon={faMapMarker} className="icon" /> {/* Icono de Ubicación */}
          <p>Galvez Santa Fe</p> {/* Reemplaza "Tu Ubicación Aquí" con la ubicación deseada */}
        </div>
        <div className="telefono-container">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>(341) 5327122</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
