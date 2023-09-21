import React from "react";
import "./stylesPages/Servicios.css"; // Asegúrate de que la ruta sea correcta para tu archivo CSS
import familia from "../assets/familia.png";
import potencia from "../assets/potencia.png";
import atencion from "../assets/atencion.png";

const serviciosData = [
  {
    title: "Generadores Eléctricos de Alta Calidad",
    description:
      "Nuestros generadores eléctricos ofrecen un rendimiento confiable y eficiente. Mantenemos los estándares más altos de calidad para garantizar la satisfacción de nuestros clientes.",
    image: potencia, // Agrega la ruta de tu imagen aquí
  },
  {
    title: "Soporte Técnico 24/7",
    description:
      "Nuestro equipo de soporte técnico está disponible las 24 horas del día, los 7 días de la semana, para atender cualquier consulta o emergencia relacionada con sus generadores eléctricos.",
    image: atencion, // Agrega la ruta de tu imagen aquí
  },
  {
    title: "Energía Sostenible",
    description:
      "Comprometidos con el medio ambiente, ofrecemos soluciones de energía sostenible que reducen su huella de carbono y promueven la responsabilidad ambiental.",
    image: familia, // Agrega la ruta de tu imagen aquí
  },
];

function Servicios() {
  return (
    <div className="servicios-container">
      <div className="servicios-list">
        {serviciosData.map((servicio, index) => (
          <div className="servicio" key={index}>
            <h2 className="servicio-titulo">{servicio.title}</h2>
            <div className="servicio-imagen-container">
              <img
                src={servicio.image}
                alt={servicio.title}
                className="servicio-imagen"
              />
              <div className="servicio-imagen-overlay"></div>
            </div>
            <p className="servicio-descripcion">{servicio.description}</p>
            <button className="ver-mas-btn">Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
