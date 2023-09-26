import React from "react";
import "./stylesPages/EnergiaSostenible.css";
import lightbulb from "../assets/lightbulb.png";

function EnergiaSostenible() {
  return (
    <div className="energy-info">
      <h2>Compromiso con la Energía Sostenible</h2>
      <p>
        En F.A.R., estamos firmemente comprometidos con la promoción de la energía responsable y el cuidado de los recursos naturales. Reconocemos la importancia de utilizar la energía de manera sostenible para preservar nuestro entorno y garantizar un futuro más limpio y saludable para las generaciones venideras.
      </p>
      <p>
        Nuestra empresa se esfuerza por adoptar prácticas de energía sostenible en todos nuestros proyectos y operaciones. Trabajamos en estrecha colaboración con nuestros clientes para desarrollar soluciones que sean eficientes en términos energéticos y respetuosas con el medio ambiente.
      </p>
      <p>
        Al incorporar tecnologías y métodos innovadores, buscamos reducir nuestro impacto ambiental y promover el uso responsable de los recursos naturales. Estamos comprometidos con la investigación continua y la implementación de prácticas sostenibles que contribuyan a la conservación de la energía y la preservación del entorno.
      </p>
      <p>
        En F.A.R., creemos que la energía sostenible no solo es una responsabilidad, sino también una oportunidad para construir un mundo más limpio y sostenible. Estamos emocionados de colaborar con nuestros clientes y socios para avanzar hacia un futuro más brillante y respetuoso con el planeta.
      </p>
      <div className="energy-img">
        <img className="energy-img-completa" src={lightbulb} alt="Energía Sostenible" />
      </div>
    </div>
  );
}

export default EnergiaSostenible;
