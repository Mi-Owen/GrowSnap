// =====================================
// components/OurObjective.tsx
// =====================================
import React from 'react';
import { Panel } from 'primereact/panel';

/**
 * Componente que presenta el objetivo del proyecto
 * Utiliza Panel de PrimeReact con un diseño destacado
 */
const OurObjective: React.FC = () => {
  return (
    <Panel className="mb-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="flex align-items-center gap-3 mb-3">
        <i className="pi pi-flag text-4xl text-orange-500"></i>
        <h2 className="m-0 text-2xl font-bold text-800">Nuestro objetivo</h2>
      </div>
      <p className="text-lg line-height-3 text-700 m-0">
        Queremos que cualquiera, desde <strong>estudiantes hasta agricultores</strong>, pueda monitorear sus plantas de forma fácil, rápida y sin equipos costosos.
        Agrolab busca <em>acercar la tecnología al cuidado de las plantas</em>.
      </p>
    </Panel>
  );
};

export default OurObjective;