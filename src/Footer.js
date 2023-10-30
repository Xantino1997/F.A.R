import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const phoneNumber = "543462529718";


const shareOnWhatsApp = () => {
  const message = "Hola, escribo para contactarme con alguien de soporte.";

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // Dispositivo móvil
    window.open(
      `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  } else {
    // Computadora de escritorio
    window.open(
      `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-column-footer">
        <div className="column">
          <h3 className="column-title">Contacto</h3>
          <ul className="contacto-list">
            <li>
              <a
                className="contacto-list-link"
                href="mailto:farservicioclientes@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} className="contactos" />
              </a>
            </li>
            <li>
              <a className="contacto-list-link" href="tel:03465499170">
                <FontAwesomeIcon icon={faPhone} className="contactos" />
              </a>
            </li>
            <li>
              <a
                className="contacto-list-link"
                href="#"
                onClick={shareOnWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="contactos" />
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="column-title">Redes</h3>
          <ul className="redes-list">
            <li>
              <a
                className="redes-list-link"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
            </li>
            <li>
              <a
                className="redes-list-link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                {/* <span className="social-text">Instagram</span> */}
              </a>
            </li>
            <li>
              <a
                className="redes-list-link"
                href="https://www.youtube.com/" // Reemplaza con la URL de tu canal de YouTube
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                {/* <span className="social-text">Youtube</span> */}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p className="copyright">
          &copy; {currentYear} F.A.R Servicios -
          <Link to="/copyright" className="copyright">
            Todos los derechos reservados.
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
