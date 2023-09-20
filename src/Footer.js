import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";
import youtube from "./assets/youtube.png";
import telefono from "./assets/telefono.png";
import mail from "./assets/mail.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-column-footer">
        {/* <div className="column">
                    <h3 className="column-title">Partners</h3>
                    <ul className='partner-list'>
                        <li>
                            <Link className='partner-list-link' to="https://www.argentina.gob.ar/" target="_blank">
                                <img className='escudo' src='data:image/jpeg;base64,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' alt='Gobierno de la Nacion' />
                                <span className="social-text">Gobierno de la Nacion</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='partner-list-link' to="https://www.santafe.gov.ar/" target="_blank">
                                <img className='escudo' src='data:image/jpeg;base64,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' alt='Gobierno de Santa Fe' />
                                <span className="social-text">Gobierno de Santa Fe</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='partner-list-link' to="https://www.facebook.com/melincuecomuna" target="_blank">
                                <img className='escudo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjeDj1qwNLWr9RcULQBIFG4L5NCmGMzFuIWKsEXSMfT1Qvj_7Lu-oqL76L9UQjy3Ydqs&usqp=CAU' alt='Comuna de Melincue' />
                                <span className="social-text">Comuna de Melincue</span>
                            </Link>
                        </li>
                    </ul>
                </div> */}

        <div className="column">
          <h3 className="column-title">Contacto</h3>
          <ul className="contacto-list">
            <li>
              <img
                className="contactos"
                src={mail}
                alt="Correo"
              />
              <a
                target="_blank"
                className="contacto-list-link"
                href="mailto:arielaraujo2023@gmail.com"
              >
                farenergetica@gmail.com
              </a>
            </li>
            <li>
              <img className="contactos" src={telefono} alt="Telefono" />
              <a
                target="_blank"
                className="contacto-list-link"
                href="tel:03465499170"
              >
                03465-499 170
              </a>
            </li>
            <li>
              <img className="contactos" src={whatsapp} alt="Whatsapp" />
              <a target="_blank" className="contacto-list-link" href="#">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="column-title">Redes Sociales</h3>
          <ul className="redes-list">
            <li>
              <Link
                className="redes-list-link"
                to="https://www.facebook.com/centromocovi/?locale=es_LA"
                target="_blank"
              >
                <img
                  className="social-facebook"
                  src={facebook}
                  alt="Facebook"
                />
                <span className="social-text">Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                className="redes-list-link"
                to="https://www.instagram.com/centromocovi/?hl=af"
                target="_blank"
              >
                <img
                  className="social-instagram"
                  src={instagram}
                  alt="Instagram"
                />
                <span className="social-text">Instagram</span>
              </Link>
            </li>
            <li>
              <Link className="redes-list-link" to="#" target="_blank">
                <img className="social-youtube" src={youtube} alt="Youtube" />
                <span className="social-text">Youtube</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>
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
