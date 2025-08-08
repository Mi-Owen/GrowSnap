import React from 'react';
import heroImage from '../../assets/images/heroImage.png';

const HeroSection = () => {
  const containerStyle: React.CSSProperties = {
    padding: "4rem 2rem",
    minHeight: "500px"
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const textColumnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: "0",
    lineHeight: "1.2"
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    margin: "0"
  };

  const imageColumnStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "400px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  };

  // Media query para responsividad usando CSS-in-JS
  const responsiveStyle = `
    @media (max-width: 768px) {
      .hero-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
        text-align: center;
      }
      .hero-title {
        font-size: 2rem !important;
      }
      .hero-paragraph {
        font-size: 1.1rem !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section style={containerStyle}>
        <div className="hero-grid" style={gridStyle}>
          {/* Columna izquierda - Texto */}
          <div style={textColumnStyle}>
            <h1 className="hero-title" style={titleStyle}>
              Bienvenido a Agrolab
            </h1>
            <p className="hero-paragraph" style={paragraphStyle}>
              Una solución moderna para tus necesidades. Descubre todas las funcionalidades que tenemos preparadas para ti y comienza a transformar tu experiencia digital.
            </p>
          </div>

          {/* Columna derecha - Imagen */}
          <div style={imageColumnStyle}>
            <img
              src={heroImage}
              alt="Ilustración de bienvenida"
              style={imageStyle}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;