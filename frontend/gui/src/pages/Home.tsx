//import { Divider } from 'primereact/divider';
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import WhatIsAgrolab from "../components/home/WhatIsAgrolab";
import HowItWorks from '../components/home/HowItWorks';
import OurObjective from '../components/home/OurObjective';
import BehindTheScenes from '../components/home/BehindTheScenes';
import TheDevelopers from '../components/home/TheDevelopers';

// Estilos externos
import { containerStyle, sectionStyle, footerStyle, responsiveStyle } from '../styles/commonStyles';

// PrimeReact estilos
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Home = () => {
  return (
    <>
    <Navbar />
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
          <BehindTheScenes />
        </div>

        <div className="home-section" style={sectionStyle}>
          <TheDevelopers />
        </div>

        <footer style={footerStyle}>
          <i className="pi pi-heart text-red-500 mr-2"></i>
          Hecho con amor por estudiantes apasionados por la tecnología y la naturaleza
        </footer>
      </div>
    </div>
    </>
  );
};

export default Home;
