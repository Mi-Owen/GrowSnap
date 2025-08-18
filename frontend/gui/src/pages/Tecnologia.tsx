import React from 'react';
import { Card } from 'primereact/card';
import Navbar from "../components/Navbar";


const Tecnologia: React.FC = () => {
  return (
    <>
    <Navbar/>
    <br />
    <br />
    <br />
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      {/* Título de la página */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>
        La tecnología que hace posible Agrolab
      </h1>

      {/* Introducción */}
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6, textAlign: 'center' }}>
        En Agrolab creemos que la tecnología debe ser sencilla y útil para todos. Nuestro sistema está diseñado
        para trabajar de forma automática, sin que tengas que preocuparte por configuraciones complicadas.
      </p>

      {/* Secciones */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Card title="1. El corazón de Agrolab">
          <p>
            Usamos un pequeño pero poderoso dispositivo llamado <strong>ESP32 con cámara integrada (ESP-CAM)</strong>.
            Este “cerebro” se encarga de tomar fotos de la planta cada cierto tiempo.
          </p>
        </Card>

        <Card title="2. La nube como álbum">
          <p>
            Las fotos no se guardan solo en la memoria del dispositivo. Se envían a un espacio seguro en internet
            llamado <strong>Firebase</strong>, donde quedan organizadas y listas para ser vistas desde cualquier parte del mundo.
          </p>
        </Card>

        <Card title="3. La web como ventana">
          <p>
            La página de Agrolab es como una ventana digital. Allí puedes ver las fotos en orden, comparar el antes y
            después, y seguir el crecimiento de tu planta.
          </p>
        </Card>
      </div>

      {/* Frase final inspiradora */}
      <p style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '2rem', textAlign: 'center', color: '#2d6a4f' }}>
        Pequeños dispositivos, grandes resultados.
      </p>

      
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

export default Tecnologia;
