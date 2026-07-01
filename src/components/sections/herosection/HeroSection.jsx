import "./HeroSection.css"; // Asegúrate de tener aquí los estilos CSS corregidos de la alerta

// Recibimos countdown y portfolioUrl desde las props de la Home
export default function HeroSection({ countdown, portfolioUrl }) {
  return (
    <>
      {/* 1. Sección Estética del Hero */}
      <section className="hero-section" id="hero">
        <div className="container hero-container">
          <div className="hero-center">
            <span className="hero-kicker">// Bienvenido</span>
            <h1 className="hero-title">syskovex.com</h1>
            <p className="hero-text">Esto es una prueba de portada</p>
          </div>
        </div>
      </section>

      {/* 2. Caja informativa de aviso de redirección temporal */}
      <div className="alertBox">
        <h2 className="alertTitle">Sitio oficial en desarrollo</h2>
        <p className="alertText">
          Serás redirigido automáticamente a mi portfolio interactivo en{" "}
          <strong className="counter">{countdown}</strong> segundos...
        </p>
        <a href={portfolioUrl} className="link">
          ¿Tienes prisa? Haz clic aquí para ir directo
        </a>
      </div>
    </>
  );
}
