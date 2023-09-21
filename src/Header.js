// const { user } = useUserContext();
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useUserContext } from "./UserContext";
import Swal from "sweetalert2";
import "./styles/Header.css";
import logo from "./assets/farservicios.png";
import { UserContext } from "./UserContext";
// import sentidos from "./assets/sentidos12.png";
// import user from "./assets/user.png";
import { useContext } from "react";

function Header() {
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  // const { setUserInfo, user } = useUserContext(useUserContext);

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
        // Limpiar el usuario de UserContext (ajusta esto según tu implementación)
        setUserInfo(""); // Esto depende de cómo se implementó el contexto de usuario en tu aplicación
        navigate("/redirigiendo");
      });
    } catch (error) {
      console.error("Error:", error);
      // Mostrar mensaje de error si ocurre un error inesperado
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
        // Redirigir a la página de edición de perfil usando useNavigate
        navigate("/register");
      }
    });
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Cambiar el estado para abrir o cerrar el menú
  };
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" alt="Logo" src={logo} />
        <h3 className="logo-titulo">Brindamos soluciones</h3>
      </div>

      <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
        {/* Botón para cerrar el menú */}
        {isMenuOpen && (
          <button className="btn-menu-header" onClick={handleMenuToggle}>
            Cerrar
          </button>
        )}
        <div className="links-header-ul">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contactanos">Contactanos</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            {/* <li>
                        <Link to="/comunidad">Comunidad</Link>
                      </li> */}
            {!username && (
              <li>
                <Link to="/login">Iniciar sesión</Link>
              </li>
            )}
            {username && (
              <>
                <li>
                  <Link to="/agrega-producto">Agregar Producto</Link>
                </li>
                <li>
                  <Link to="/crear-post">Crear Noticias</Link>
                </li>
                <li>
                  <Link
                    to="/#"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </Link>
                </li>
                <div className="autor-info-header">
                  <img
                    src={
                      profilePicture
                        ? profilePicture
                        : "data:image/png;base64,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"
                    } // Aquí poner la ruta de la imagen de perfil o una imagen por defecto si no hay
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
        <h3 className="logo-titulo">Brindamos soluciones</h3>
      </nav>
      {/* Botón para desplegar el menú */}
      {!isMenuOpen && (
        <button className="btn-menu-header-open" onClick={handleMenuToggle}>
          Menú
        </button>
      )}
    </header>
  );
}
export default Header;
