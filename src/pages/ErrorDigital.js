import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que tienes React Router configurado.
import "./stylesPages/ErrorDigital.css";
import errorDigital from "../assets/error404.png";

const ErrorDigital = () => {
  return (
    <div className="error-container">
      <h1>Error al buscar la página</h1>
      <img src={errorDigital} alt="Error Digital" />
      <h3>Lo sentimos, esta página no está disponible</h3>
      <Link to="/"> {/* Utilizamos Link de React Router para regresar al link de '/' */}
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default ErrorDigital;
