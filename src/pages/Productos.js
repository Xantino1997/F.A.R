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
    { id: 1, nombre: "Maquina Cortadora", imagen: grupo1 },
    { id: 2, nombre: "Pulidor", imagen: grupo2 },
    { id: 3, nombre: "Sistema solar", imagen: grupo3 },
    { id: 4, nombre: "Generador", imagen: grupo4 },
    { id: 5, nombre: "Generador electro base", imagen: grupo5 },
    { id: 6, nombre: "Generador electro base full", imagen: grupo6 },
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
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(filtroLower) // Convierte el nombre del producto a minúsculas antes de la comparación
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

        <p>Aquí iría la descripción del producto.</p>
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        abrirWhatsApp(producto.nombre, producto.imagen);
      }
    });
  };

  const numeroWhatsApp = "543465650158"; // Reemplaza con el número de WhatsApp deseado

  const abrirWhatsApp = (nombreProducto, imagenProducto) => {
    const message = `¡Hola! Estoy interesado en el producto: ${nombreProducto}`;
    const encodedMessage = encodeURIComponent(message);
    const encodedImage = encodeURIComponent(imagenProducto);
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Dispositivo móvil
      window.open(
        `whatsapp://send?phone=${numeroWhatsApp}&text=${encodedMessage}%0A%0A${encodedImage}`,
        "_blank"
      );
    } else {
      // Computadora de escritorio
      window.open(
        `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodedMessage}%0A%0A${encodedImage}`,
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

      <div className="productos-container">
        {productosAMostrar.map((producto) => (
          <div key={producto.nombre} className="producto">
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} />
            <div>
              <button className="producto-btn" onClick={() => abrirModal(producto)}>Ampliar</button>
              <button className="producto-btn" onClick={() => abrirWhatsApp(producto.nombre, producto.imagen)}>
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
