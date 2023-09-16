import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import About from './pages/About';
import Servicios from './pages/Servicios';
import Contactanos from './pages/Contactanos';
import Productos from './pages/Productos';
import Copyright from './Copyright';
import Layout from './Layout';
import ErrorDigital from './pages/ErrorDigital';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="*" element={<ErrorDigital />} /> {/* Ruta comodín para cualquier ruta no definida */}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
