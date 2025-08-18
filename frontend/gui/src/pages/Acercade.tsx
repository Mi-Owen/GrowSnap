import React from 'react';
import { Card } from 'primereact/card';
import Navbar from "../components/Navbar";

const Acercade: React.FC = () => {
  return (
     <>
    <Navbar/>
    <br />
    <br />
    <br />
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Página Acerca de */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center' }}>
        Conoce quiénes están detrás de Agrolab
      </h1>

      <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center' }}>
        Agrolab nació como un proyecto escolar, con la visión de convertirse en una herramienta útil para estudiantes, agricultores y amantes de las plantas. Queremos acercar la tecnología a la naturaleza, facilitando el seguimiento del crecimiento de las plantas de manera sencilla y accesible.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Card title="1. La idea">
          <p>
            Buscábamos una manera fácil de observar cómo crecen las plantas sin tener que estar presentes todo el tiempo.
            Así nació Agrolab: combinando fotografía automática, almacenamiento en la nube y acceso remoto desde cualquier lugar.
          </p>
        </Card>

        <Card title="2. El equipo">
          <p>
            Somos un grupo de tres estudiantes apasionados por la tecnología y la naturaleza, cada uno aportando habilidades únicas:
          </p>
          <ul style={{ marginLeft: '1rem', lineHeight: 1.5 }}>
            <li><strong>Janine Rivera</strong> – Investigación y diseño.</li>
            <li><strong>David Tovar</strong> – Programación electrónica.</li>
            <li><strong>Owen Arredondo</strong> – Desarrollo web y presentación del proyecto.</li>
          </ul>
        </Card>

        <Card title="3. Nuestra motivación">
          <p>
            Creemos que la tecnología debe acercar a las personas a la naturaleza. Queremos que más personas puedan cuidar sus plantas fácilmente y disfrutar viendo su crecimiento día a día.
          </p>
        </Card>
      </div>

      {/* Página Misión y Visión */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginTop: '3rem' }}>
        Nuestra misión y visión
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Card title="Misión">
          <p>
            Desarrollar herramientas simples y accesibles para monitorear el crecimiento de plantas, utilizando tecnología que cualquier persona pueda usar sin conocimientos técnicos. Queremos que cuidar plantas sea fácil, educativo y divertido.
          </p>
        </Card>

        <Card title="Visión">
          <p>
            Convertirnos en una solución reconocida por su facilidad de uso, bajo costo y contribución al cuidado del medio ambiente. Aspiramos a llegar a escuelas, invernaderos y hogares, fomentando la conexión entre personas y naturaleza.
          </p>
        </Card>
      </div>

      <p style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '2rem', textAlign: 'center', color: '#2d6a4f' }}>
        En Agrolab soñamos con un futuro donde la tecnología y la naturaleza crezcan juntas.
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

export default Acercade;
