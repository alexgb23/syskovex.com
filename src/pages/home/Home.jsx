import { useEffect, useState } from "react";
import HeroSection from "../../components/sections/heroSection/HeroSection";
import usePageTitle from "../../hooks/usePageTitle";

function Home() {
  usePageTitle(
    "Syskovex | Laboratorio, Sistemas, infraestructura y desarrollo de software",
  );

  const [countdown, setCountdown] = useState(5);
  // Dirección exacta de tu portfolio ya alojado en Cloudflare
  const portfolioUrl = "https://alex.syskovex.com";

  // Temporizador para la redirección automática
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      window.location.href = portfolioUrl;
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, []);

  // Declaramos los enlaces sociales para que HeroSection no dé error
  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://syskovex.com/#syskovex",
    name: "Alex Alexander Galvez",
    url: "https://syskovex.com/",
    image: "https://syskovex.com/imagen_portfolio_mia_retocada-960.avif",
    jobTitle: "Systems, Infrastructure, Software",
    description:
      "Proyecto de Laboratorio para infraestructura IT, redes, virtualización, automatización y desarrollo de software.",
    knowsAbout: [
      "Infraestructura IT",
      "Administración de sistemas",
      "Virtualización",
      "Redes",
      "Seguridad perimetral",
      "Automatización",
      "IoT",
      "Linux",
      "APIs",
      "Desarrollo de software",
    ],
  };

  const safeJsonLd = JSON.stringify(personSchema).replace(/<\//g, "<\\/");

  return (
    <main id="main-content" style={{ textAlign: "center", padding: "20px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
        <h1>Bienvenido a Syskovex</h1>
      {/* Renderizado de tu sección estética pasando los estados del contador */}
      <HeroSection
        profile={null}
        socialLinks={socialLinks}
        expertise={[]}
        error={null}
        countdown={countdown}
        portfolioUrl={portfolioUrl}
      />
    </main>
  );
}

export default Home;
