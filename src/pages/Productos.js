import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./stylesPages/Productos.css";
import grupo1 from "../assets/grupo1.png";
import grupo2 from "../assets/grupo2.png";
import grupo3 from "../assets/grupo3.png";
import grupo4 from "../assets/familia.png";
import grupo5 from "../assets/atencion.png";
import grupo6 from "../assets/fondoheader.png";

const MySwal = Swal;

const Productos = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Generador electrico",
      imagen: grupo1,
      descripcion: "Generador electrico funcional",
    },
    {
      id: 2,
      nombre: "Generador electrico color naranja",
      imagen: grupo2,
      descripcion: "Ideal para dias de camping",
    },
    {
      id: 3,
      nombre: "Generador electrico color amarillo",
      imagen: grupo3,
      descripcion: "Facil manejo y transporte",
    },
    {
      id: 4,
      nombre: "Generador familiar",
      imagen: grupo4,
      descripcion: "Energia eficiente y amigable con el medio ambiente",
    },
    {
      id: 5,
      nombre: "Soporte integral",
      imagen: grupo5,
      descripcion: "Soporte eficiente e integral",
    },
    {
      id: 6,
      nombre: "Generador electro base full",
      imagen: grupo6,
      descripcion: "Eficiente y potente ideal para el hogar",
    },
    // Agrega más productos aquí
  ]);
  const [filtro, setFiltro] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 3;

  useEffect(() => {
    filtrarProductos();
  }, [filtro, paginaActual]);

  const filtrarProductos = () => {
    const filtroLower = filtro.toLowerCase(); // Convierte el filtro a minúsculas
    const productosFiltrados = productos.filter(
      (producto) => producto.nombre.toLowerCase().includes(filtroLower) // Convierte el nombre del producto a minúsculas antes de la comparación
    );
    setProductosFiltrados(productosFiltrados);
  };

  const abrirModal = (producto) => {
    MySwal.fire({
      title: producto.nombre,
      imageUrl: producto.imagen,
      imageAlt: producto.nombre,
      showCloseButton: true,
      confirmButtonText: "WhatsApp",
      confirmButtonColor: "#25d366",
      html: `
        <p>Descripción del producto:</p>

        <p>${producto.descripcion}</p>
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        abrirWhatsApp(producto.nombre);
      }
    });
  };

  const numeroWhatsApp = "543415327122"; // Reemplaza con el número de WhatsApp deseado

  const abrirWhatsApp = (nombreProducto) => {
    const message = `¡Hola! Estoy interesado en el producto: ${nombreProducto}`;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Dispositivo móvil
      window.open(
        `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    } else {
      // Computadora de escritorio
      window.open(
        `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    }
  };

  const handlePaginaSiguiente = () => {
    if (
      paginaActual < Math.ceil(productosFiltrados.length / productosPorPagina)
    ) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const handlePaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const productosAMostrar = productosFiltrados.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );

  return (
    <div className="conteiner-buscador">
      <h1 className="titulo-buscador">Buscador de Productos</h1>

      <input
        type="text"
        placeholder="Buscar por Nombre"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <button onClick={filtrarProductos}>Buscar</button>
      <br />
      <small style={{color:"red"}}>*Las imagenes son ilustrativas</small>
      <div className="productos-container">
        {productosAMostrar.map((producto) => (
          <div key={producto.nombre} className="producto">
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} />
            <div>
              <button
                className="producto-btn"
                onClick={() => abrirModal(producto)}
              >
                Ampliar
              </button>
              <button
                className="producto-btn"
                onClick={() => abrirWhatsApp(producto.nombre)}
              >
                WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePaginaAnterior} disabled={paginaActual === 1}>
          Anterior
        </button>
        <span className="page-number">
          Página {paginaActual} de{" "}
          {Math.ceil(productosFiltrados.length / productosPorPagina)}
        </span>
        <button
          onClick={handlePaginaSiguiente}
          disabled={
            paginaActual ===
            Math.ceil(productosFiltrados.length / productosPorPagina)
          }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Productos;
