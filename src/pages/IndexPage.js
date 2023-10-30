import React, { useState, useEffect } from "react";
import "./stylesPages/IndexPage.css";
import Testimonio from "./Testimonios";
import grupo1 from "../assets/grup2.png";
import grupo2 from "../assets/dobleImg.png";
import grupo3 from "../assets/paneles.png";
import { Link } from "react-router-dom";

const images = [
  {
    src: grupo1,
    description: "Experiencia y responsabilidad nos avalan",
    id: "/productos",
  },
  {
    src: grupo2,
    description: "Potencia portátil",
    id: "/productos",
  },
  {
    src: grupo3,
    description: "Energía sostenible",
    id: "/productos",
  },
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        setCurrentImage((prevImage) =>
          prevImage === images.length - 1 ? 0 : prevImage + 1
        );
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleSelectImage = (index) => {
    setSelectedImage(index);
    setCurrentImage(index);
    setAutoPlay(false); // Detener la reproducción automática
    setTimeout(() => {
      setAutoPlay(true); // Reanudar la reproducción automática después de 15 segundos
    }, 15000);
  };

  return (
    <>
      <div className="carousel-index">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item-index ${
              index === currentImage ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              animationDelay: `${index * 0.8}s`,
            }}
          >
            <div className="carousel-content">
              <h2 className="carousel-content-h5">{image.description}</h2>
              <Link to={`${image.id}`} className="carousel-btn">
                Ver detalles
              </Link>
              <br />
              <hr style={{ visibility: "hidden" }} />
            </div>
          </div>
        ))}
      </div>
      <div  className="select-div">
        <div className="select-image-div">
          {images.map((image, index) => (
            <img
              key={index}
              className={`select-image ${
                index === currentImage ? "active" : ""
              }`}
              src={image.src}
              alt={`Select Image ${index + 1}`}
              onClick={() => handleSelectImage(index)}
            />
          ))}
        </div>
        <Testimonio />
      </div>
    </>
  );
}

export default Carousel;
