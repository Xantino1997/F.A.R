import React, { useState, useEffect } from "react";
import "./stylesPages/Testimonios.css";
import cliente1Imagen from "../assets/testimonio1.png"; 
import cliente2Imagen from "../assets/testimonio2.png"; 
import cliente3Imagen from "../assets/testimonio3.png"; 

const testimoniosData = [
  {
    imagen: cliente1Imagen,
    nombre: "Banco Galicia:",
    descripcion:
      ' "La empresa F.A.R. es increíble, su servicio es de primera calidad y sus productos son confiables".',
  },
  {
    imagen: cliente2Imagen,
    nombre: "Banco Frances:",
    descripcion:
      ' "Los generadores eléctricos de F.A.R. me han ahorrado muchas veces en momentos de cortes de energía, ¡son altamente recomendables!".',
  },
  {
    imagen: cliente3Imagen,
    nombre: "Sancor Seguros:",
    descripcion:
      ' "No puedo expresar lo satisfecho que estoy con la atención al cliente y la eficiencia de los generadores de F.A.R. ¡Simplemente los mejores!".',
  },
];

function Testimonios() {
  const [imagenVisible, setImagenVisible] = useState(0); // Inicializa con 0 para el primer testimonio

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenVisible((imagenVisible) =>
        imagenVisible === testimoniosData.length - 1 ? 0 : imagenVisible + 1
      );
    }, 10000); // Cambiar cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonios-container">
      <h1 className="testimonios-titulo">Clientes Satisfechos</h1>
      <div className="testimonios-unicos">
        {imagenVisible !== null && (
          <div className="testimonio-unico">
            <img
              src={testimoniosData[imagenVisible].imagen}
              alt={`Cliente ${imagenVisible + 1}`}
              className="testimonio-imagen-unico"
            />
            <h4>{testimoniosData[imagenVisible].nombre}</h4>
            <p className="testimonio-descripcion-unico">
              {testimoniosData[imagenVisible].descripcion}
            </p>
          </div>
        )}
      </div>
      <div className="testimonio">
        {testimoniosData.map((testimonio, index) => (
          <div
            key={index}
            className={`testimonio-item ${
              index === imagenVisible ? "seleccionado" : ""
            }`}
            onClick={() => setImagenVisible(index)}
          >
            <img
              src={testimonio.imagen}
              alt={`Cliente ${index + 1}`}
              className="testimonio-imagen"
            />
            <h4>{testimonio.nombre}</h4>
            <p className="testimonio-descripcion">{testimonio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonios;
