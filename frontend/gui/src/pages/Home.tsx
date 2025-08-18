//import { Divider } from 'primereact/divider';
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import WhatIsAgrolab from "../components/home/WhatIsAgrolab";
import HowItWorks from "../components/home/HowItWorks";
import OurObjective from "../components/home/OurObjective";
import TheDevelopers from "../components/home/TheDevelopers";

// Estilos externos
import {
  containerStyle,
  sectionStyle,
  //footerStyle,
  responsiveStyle,
} from "../styles/commonStyles";

// PrimeReact estilos
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div style={containerStyle}>
        <style>{responsiveStyle}</style>

        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="home-section" style={sectionStyle}>
            <HeroSection />
          </div>

          <div className="home-section" style={sectionStyle}>
            <WhatIsAgrolab />
          </div>

          <div className="home-section" style={sectionStyle}>
            <HowItWorks />
          </div>

          <div className="home-section" style={sectionStyle}>
            <OurObjective />
          </div>

          <div className="home-section" style={sectionStyle}>
            <TheDevelopers />
          </div>

        </div>
      </div>
       <footer
            style={{
              padding: "1.5rem 2rem",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              &copy; {new Date().getFullYear()} Agrolab. Todos los derechos
              reservados.
            </p>
            <p style={{ margin: "0.3rem 0 0", fontSize: "0.8rem" }}>
              Diseñado y desarrollado por el equipo de Agrolab.
            </p>
          </footer>
    </>
  );
};

export default Home;
