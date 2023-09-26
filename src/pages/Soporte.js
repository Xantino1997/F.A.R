import React from "react";
import "./stylesPages/Soporte.css";
import atencion from "../assets/atencion.png";

function Soporte() {
  return (
    <div className="support-info">
      <h2>Soporte de Atención al Cliente</h2>
      <p>
        En nuestra empresa, nos especializamos en ofrecer soluciones energéticas
        y servicios de construcción edilicia en Galvez, Santa Fe. Nuestro
        compromiso es brindar un soporte de atención al cliente excepcional para
        garantizar que todas sus necesidades sean satisfechas.
      </p>
      <p>
        Nuestro equipo de expertos está altamente capacitado para ayudar en una
        variedad de áreas, incluyendo proyectos de construcción, eficiencia
        energética y más. Ya sea que necesite asesoramiento técnico o asistencia
        en proyectos específicos, estamos aquí para ayudarle en cada paso del
        camino.
      </p>
      <p>
        En nuestra empresa, entendemos que la atención al cliente eficaz es
        esencial para el éxito de su proyecto. No importa la magnitud de su
        proyecto o la complejidad de sus necesidades, puede confiar en nosotros
        para brindar soluciones efectivas y orientadas al cliente.
      </p>
      <p>
        ¡Contáctenos hoy mismo para obtener más información sobre nuestros
        servicios de atención al cliente y cómo podemos ayudarlo a lograr sus
        objetivos en el ámbito de la energía y la construcción!
      </p>
      <div className="soporte-img">
        <img
          className="soporte-img-completa"
          src={atencion}
          alt="Atención al Cliente"
        />
      </div>
    </div>
  );
}

export default Soporte;
