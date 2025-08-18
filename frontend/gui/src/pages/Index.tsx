import React from "react";
import GraficaCrecimiento from "../components/index/GraficaCrecimiento";
import UltimaImagen from "../components/index/UltimaImagen";
import ListaImagenes from "../components/index/ListaImagenes";
import Navbar from "../components/Navbar";
import { Accordion, AccordionTab } from "primereact/accordion";

const Index = () => {
  const containerStyle: React.CSSProperties = {
    padding: "2rem",
    minHeight: "calc(100vh - 80px)" // Ajustar según altura del navbar
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    alignItems: "start",
    maxWidth: "1400px",
    margin: "0 auto"
  };

  const columnStyle: React.CSSProperties = {
    width: "100%",
    overflow: "hidden"
  };

  const responsiveStyle = `
    @media (max-width: 768px) {
      .dashboard-grid {
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
      }
    }
    
    @media (max-width: 480px) {
      .dashboard-container {
        padding: 1rem !important;
      }
    }
  `;

  return (
    <>
    <br />
    <br />
    <br />
      <style>{responsiveStyle}</style>
      <div>
        <Navbar />
        <div className="dashboard-container" style={containerStyle}>
          <div className="dashboard-grid" style={gridStyle}>
            {/* Columna izquierda - Gráfica */}
            <div style={columnStyle}>
              <GraficaCrecimiento />
            </div>

            {/* Columna derecha - Imagen */}
            <div style={columnStyle}>
              <UltimaImagen />
            </div>
          </div>

          {/* Desplegable con la lista de imágenes */}
          <div style={{ marginTop: "2rem" }}>
            <Accordion>
              <AccordionTab header="Ver todas las imágenes">
                <ListaImagenes />
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
