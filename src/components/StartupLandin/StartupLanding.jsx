const StartupLanding = () => {
  return (
    <div className="startup">
      <header className="startup__hero">
        <h1 className="startup__title">NovaTech</h1>
        <p className="startup__subtitle">
          Impulsamos el crecimiento digital de startups con soluciones web y
          marketing tecnológico.
        </p>
        <a href="#contact" className="startup__cta">
          Contáctanos
        </a>
      </header>

      <section className="startup__section">
        <h2 className="startup__section-title">Nuestros Servicios</h2>
        <div className="startup__services">
          <div className="startup__card">
            <h3>Diseño Web</h3>
            <p>Interfaces modernas y centradas en el usuario.</p>
          </div>
          <div className="startup__card">
            <h3>Marketing Digital</h3>
            <p>Campañas que posicionan tu marca y aumentan tus ventas.</p>
          </div>
          <div className="startup__card">
            <h3>Desarrollo Frontend</h3>
            <p>Experiencias rápidas y responsivas con React y APIs.</p>
          </div>
        </div>
      </section>

      <section className="startup__team">
        <h2 className="startup__section-title">Nuestro Equipo</h2>
        <div className="startup__team-grid">
          {[
            { name: "Ana López", role: "CEO & Fundadora" },
            { name: "Carlos Vega", role: "Desarrollador Frontend" },
            { name: "Lucía Torres", role: "Marketing Lead" },
          ].map((member, i) => (
            <div key={i} className="startup__member">
              <img
                src={`https://randomuser.me/api/portraits/${
                  i % 2 === 0 ? "women" : "men"
                }/${i + 20}.jpg`}
                alt={member.name}
                className="startup__photo"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="startup__contact">
        <h2 className="startup__section-title">Contáctanos</h2>
        <form className="startup__form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows="4" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </section>

      <footer className="startup__footer">
        © {new Date().getFullYear()} NovaTech — Hecho por Jared Asahel
      </footer>
    </div>
  );
};

export default StartupLanding;
