import Header from "./Header";
import Footer from "./Footer";
import Chatbot from "./ChatBot";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main style={{ padding: "10px", paddingTop: "0px" }}>
      <Header />
      <>
        <br /> {/* Etiqueta <br> para salto de línea */}
        <br /> {/* Etiqueta <br> para salto de línea */}
        <br /> {/* Etiqueta <br> para salto de línea */}
        <br /> {/* Etiqueta <hr> para una línea horizontal */}
      </>
      <Outlet />
      <Chatbot />
      <br />
      <Footer />
    </main>
  );
}
