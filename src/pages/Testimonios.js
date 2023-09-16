import React from "react";
import "./stylesPages/Testimonios.css"; // Asegúrate de que la ruta sea correcta para tu archivo CSS
import cliente1Imagen from "../assets/testimonio1.png"; // Agrega la ruta de la imagen del cliente 1
import cliente2Imagen from "../assets/testimonio2.png"; // Agrega la ruta de la imagen del cliente 2
import cliente3Imagen from "../assets/testimonio3.png"; // Agrega la ruta de la imagen del cliente 3

const testimoniosData = [
  {
    imagen: cliente1Imagen,
    nombre: "Lorena Gerencia Bco Macro:",
    descripcion:
      ' "La empresa F.A.R. es increíble, su servicio es de primera calidad y sus productos son confiables".',
  },
  {
    imagen: cliente2Imagen,
    nombre: "Valeria Ama de casa:",
    descripcion:
      ' "Los generadores eléctricos de F.A.R. me han ahorrado muchas veces en momentos de cortes de energía, ¡son altamente recomendables!".',
  },
  {
    imagen: cliente3Imagen,
    nombre: "Pablo Contruccion en zonas rurales:",
    descripcion:
      ' "No puedo expresar lo satisfecho que estoy con la atención al cliente y la eficiencia de los generadores de F.A.R. ¡Simplemente los mejores!".',
  },
];

function Testimonios() {
  return (
    <div className="testimonios-container">
      <h1  className="testimonios-titulo">Clientes Satisfechos</h1>
      <div className="testimonio">
        {testimoniosData.map((testimonio, index) => (
          <div key={index} className="testimonio-item">
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
