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
                              
                                <span className="social-text">Gobierno de la Nacion</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='partner-list-link' to="https://www.santafe.gov.ar/" target="_blank">
                               
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
