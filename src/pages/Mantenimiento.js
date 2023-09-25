import React from "react";
import "./stylesPages/Mantenimiento.css";
import mantenimiento from "../assets/herramientas.png";

function MantenimientoEdilicio() {
  return (
    <div className="mantenimiento-edilicio">
      <div className="mantenimiento-edilicio-image">
        <img src={mantenimiento} alt="Mantenimiento Edilicio" />
      </div>
      <div className="mantenimiento-edilicio-text">
        <h2 className="mantenimiento-edilicio-text-title">
          Mantenimiento Edilicio
        </h2>
        <p>
          El "mantenimiento edilicio" abarca un conjunto de servicios esenciales
          diseñados para asegurar que su edificio o estructura conserve su
          integridad, funcionalidad y apariencia óptimas a lo largo del tiempo.
          En F.A.R. Servicios, entendemos la importancia crítica de mantener sus
          instalaciones en condiciones óptimas. Nuestro equipo altamente
          calificado se dedica a brindar un mantenimiento integral que abarca
          desde tareas preventivas hasta reparaciones correctivas.
        </p>
        <p>
          Nuestros servicios de mantenimiento edilicio incluyen inspecciones
          regulares, reparaciones oportunas, renovaciones estéticas y medidas de
          seguridad, todo diseñado para proteger su inversión y garantizar la
          seguridad y comodidad de sus ocupantes. Trabajamos incansablemente
          para mantener los más altos estándares de calidad en cada proyecto que
          emprendemos.
        </p>
        <h3 className="mantenimiento-edilicio-text-title">
          Razónes para elegir F.A.R. Servicios:
        </h3>
        <p>
          <b>1)Experiencia y Profesionalismo:</b>
          <br />
          <br /> En F.A.R. Servicios, contamos con un equipo de profesionales
          altamente capacitados y experimentados en el campo del mantenimiento
          edilicio. Nuestra experiencia nos permite abordar una amplia gama de
          desafíos y ofrecer soluciones efectivas.
        </p>
        <p>
          <b>2)Compromiso con la Calidad:</b>
          <br />
          <br /> Nos enorgullece mantener los más altos estándares de calidad en
          cada proyecto que realizamos. Cada tarea de mantenimiento se lleva a
          cabo con precisión y atención al detalle para garantizar la
          satisfacción de nuestros clientes.
        </p>
        <p>
          <b>3)Variedad de Servicios:</b>
          <br />
          <br /> Ofrecemos una amplia gama de servicios de mantenimiento
          edilicio, desde mantenimiento preventivo hasta renovaciones estéticas
          y reparaciones urgentes. Esto nos permite adaptarnos a las necesidades
          específicas de cada cliente.
        </p>
        <p>
          <b>4)Atención Personalizada:</b>
          <br />
          <br /> Valoramos la relación con nuestros clientes y nos esforzamos
          por ofrecer un servicio personalizado. Trabajamos estrechamente con
          usted para entender sus necesidades y objetivos.
        </p>
        <p>
          Compromiso con la Seguridad: La seguridad es nuestra prioridad.
          Cumplimos con todas las regulaciones y estándares de seguridad para
          garantizar la protección de su edificio y sus ocupantes.
        </p>

        <p>
          En F.A.R. Servicios, estamos comprometidos a ser su socio confiable en
          todo lo relacionado con el mantenimiento edilicio. Contáctenos hoy
          mismo para conversar y ver cómo podemos mantener sus instalaciones en
          excelentes condiciones, garantizando su tranquilidad.
        </p>
      </div>
    </div>
  );
}

export default MantenimientoEdilicio;
