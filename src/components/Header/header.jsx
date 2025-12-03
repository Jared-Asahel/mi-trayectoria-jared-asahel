const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Jared Asahel</h1>
      <h2 className="header__job">Desarrollador Full Stack</h2>
      <h2 className="header__technologies">
        React | Node.js | Express | MongoDB | REST API
      </h2>
      <div className="header__content">
        <button className="header__button-projects">
          <i className="fa-brands fa-github fa-2x"></i>Ver mis proyectos
        </button>
        {/* 🚀 Botón CV - MODIFICADO para descarga 🚀 */}
        <a
          href="/Jared_Diaz_CV.pdf" // 👈 Asegúrate que el archivo esté en la carpeta /public
          download="Jared_Diaz_CV.pdf" // 👈 Nombre del archivo de descarga
          className="header__button-cv" // 👈 Usamos la misma clase para aplicar los estilos de botón
        >
          <i className="fa-solid fa-download"></i>Descargar mi CV
        </a>
        <button className="header__button-linkedln">
          <i className="fa-brands fa-linkedin fa-2x"></i>
          Conectar con Linkedln
        </button>
      </div>
    </header>
  );
};

export default Header;
