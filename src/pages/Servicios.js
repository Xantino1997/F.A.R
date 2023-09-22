import React from "react";
import "./stylesPages/Servicios.css";
import { Link } from "react-router-dom"; // Importa Link desde React Router
import familia from "../assets/familia.png";
import herramientas from "../assets/herramientas.png";
import atencion from "../assets/atencion.png";

const serviciosData = [
  {
    title: "Mantenimientos edilicios",
    description:
      "En F.A.R. Servicios, nos especializamos en ofrecer soluciones integrales para el mantenimiento edilicio. Nuestro compromiso es mantener sus instalaciones en óptimas condiciones, brindando un rendimiento confiable y eficiente en cada proyecto. Contamos con un equipo calificado que sigue los estándares más altos de calidad en cada tarea. Ya sea que necesite mantenimiento preventivo o correctivo, nuestra experiencia y dedicación garantizan la satisfacción de nuestros clientes.",
    image: herramientas, // Agregar la ruta de la imagen aca
    route: "/mantenimiento", // Agregar la ruta correspondiente aquí
  },
  {
    title: "Soporte Técnico 24/7",
    description:
      "Nuestro equipo de soporte técnico está disponible las 24 horas del día, los 7 días de la semana, para atender cualquier consulta o emergencia relacionada con sus generadores eléctricos.",
    image: atencion,
    route: "/soporte", // Agregar la ruta correspondiente aquí
  },
  {
    title: "Energía Sostenible",
    description:
      "Comprometidos con el medio ambiente, ofrecemos soluciones de energía sostenible que reducen su huella de carbono y promueven la responsabilidad ambiental.",
    image: familia,
    route: "/energia-sostenible", // Agregar la ruta correspondiente aquí
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
            <Link to={servicio.route} className="ver-mas-btn">
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
