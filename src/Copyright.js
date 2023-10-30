import React from "react";
import "./styles/Copyright.css";

function Copyright() {
  return (
    <div className="container-derechos">
      <h2>Derechos de Autor</h2>
      <p>
        Todos los derechos de autor y otros derechos de propiedad intelectual en
        el contenido de este sitio web son propiedad de F.A.R Servicios.
      </p>

      <h3>Obligaciones del Usuario</h3>
      <p>
        Los usuarios de este sitio web están obligados a cumplir con las
        siguientes condiciones y restricciones:
      </p>

      <p>
        1-No copiar, reproducir ni distribuir el contenido sin autorización.
      </p>
      <p>
        2-No realizar enlaces no autorizados a este sitio web desde otros sitios
        web.
      </p>
      <p>
        3-No utilizar este sitio web de manera fraudulenta o para fines
        ilegales.
      </p>

      <h3>Enlaces Externos</h3>
      <p>
        Este sitio web puede contener enlaces a sitios web externos. F.A.R
        Servicios no se hace responsable del contenido de estos sitios ni de las
        prácticas de privacidad de terceros.
      </p>

      <h2>Condiciones de Uso del Sitio</h2>
      <p>
        Al utilizar este sitio web, usted acepta cumplir con estas condiciones
        de uso. Si no está de acuerdo con alguna de estas condiciones, le
        recomendamos que no utilice el sitio.
      </p>
      {/* Agrega aquí las condiciones de uso del sitio según las necesidades de F.A.R Servicios */}

      <h2>Términos de Servicio de F.A.R Servicios</h2>
      <p>
        Estos términos de servicio rigen el uso de los servicios proporcionados
        por F.A.R Servicios. Al utilizar nuestros servicios, usted acepta estos
        términos.
      </p>
      {/* Agrega aquí los términos de servicio de F.A.R Servicios según las necesidades de la empresa */}

      <p className="disclaimer">
        Personalizar según las
        políticas y requisitos de F.A.R
      </p>
    </div>
  );
}

export default Copyright;
