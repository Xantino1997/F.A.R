import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./styles/Header.css";
import logo from "./assets/farservicios2.png";

import { UserContext } from "./UserContext";
import { useContext } from "react";

function Header() {
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetch(`#`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  async function logout() {
    try {
      await fetch("http://localhost:4000/logout", {
        credentials: "include",
        method: "POST",
      });

      setUserInfo(null);

      setRedirect(true);
      Swal.fire({
        title: `¡Hasta luego, ${userInfo.username}!`,
        icon: "success",
        timer: 5000,
        showConfirmButton: false,
      }).then(() => {
        setUserInfo("");
        navigate("/redirigiendo");
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al cerrar sesión",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  useEffect(() => {
    if (redirect) {
      navigate("/redirigiendo");
    }
  }, [redirect]);

  const username = userInfo?.username;
  const profilePicture = userInfo?.profilePicture;

  const handleImageClick = () => {
    Swal.fire({
      icon: "info",
      title: "¿Deseas editar tu perfil?",
      showCancelButton: true,
      confirmButtonText: "Editar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/register");
      }
    });
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" alt="Logo" src={logo} />
      </div>

      <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
        {isMenuOpen && (
          <button className="btn-menu-header" onClick={handleMenuToggle}>
            Cerrar
          </button>
        )}
        <div className="links-header-ul">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                onClick={handleMenuItemClick}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                activeClassName="active"
                onClick={handleMenuItemClick}
              >
                Sobre Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactanos"
                activeClassName="active"
                onClick={handleMenuItemClick}
              >
                Contáctanos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                activeClassName="active"
                onClick={handleMenuItemClick}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos"
                activeClassName="active"
                onClick={handleMenuItemClick}
              >
                Productos
              </NavLink>
            </li>
            {username && (
              <>
                <li>
                  <NavLink
                    to="/agrega-producto"
                    activeClassName="active"
                    onClick={handleMenuItemClick}
                  >
                    Agregar Producto
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/crear-post"
                    activeClassName="active"
                    onClick={handleMenuItemClick}
                  >
                    Crear Noticias
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/#"
                    onClick={() => {
                      logout();
                      handleMenuItemClick();
                    }}
                  >
                    Cerrar Sesión
                  </Link>
                </li>
                <div className="autor-info-header">
                  <img
                    src={
                      profilePicture
                        ? profilePicture
                        : "data:image/png;base64,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"
                    }
                    alt="Autor"
                    className="autor-info-header-img"
                    onClick={handleImageClick}
                  />
                  <p className="autor-info-header-parrafo">{username}</p>
                  <Link
                    className="autor-info-header-register"
                    onClick={handleImageClick}
                  >
                    <p style={{ color: "white" }}>Editar</p>
                  </Link>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setSelectedImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>
              </>
            )}
          </ul>
        </div>
        <h1 className="logo-titulo">Brindamos soluciones</h1>
      </nav>
      {!isMenuOpen && (
        <button className="btn-menu-header-open" onClick={handleMenuToggle}>
          Menú
        </button>
      )}
    </header>
  );
}

export default Header;
