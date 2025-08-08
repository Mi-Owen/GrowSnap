// =====================================
// components/TheDevelopers.tsx
// =====================================
import React from 'react';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';

// Interface para definir la estructura de un desarrollador
interface Developer {
  name: string;
  role: string;
  icon: string;
  color: string;
}

/**
 * Componente que presenta al equipo de desarrolladores
 * Utiliza Panel y Card de PrimeReact para crear perfiles de equipo
 */
const TheDevelopers: React.FC = () => {
  // Array con información de los desarrolladores
  const developers: Developer[] = [
    {
      name: '[Nombre 1]',
      role: 'Investigación y diseño',
      icon: 'pi pi-search',
      color: 'bg-pink-100 text-pink-800'
    },
    {
      name: '[Nombre 2]',
      role: 'Programación y electrónica',
      icon: 'pi pi-code',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: '[Nombre 3]',
      role: 'Diseño web y presentación',
      icon: 'pi pi-palette',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <Panel header="👩‍💻 Los desarrolladores" className="mb-4" toggleable>
      <p className="text-center text-lg mb-4 text-700">
        Agrolab fue creado por un equipo de <strong>3 estudiantes</strong> apasionados por la tecnología y la naturaleza:
      </p>
      
      {/* Grid con las tarjetas de cada desarrollador */}
      <div className="grid">
        {developers.map((dev, index) => (
          <div key={index} className="col-12 md:col-4">
            <Card className="h-full shadow-1 hover:shadow-3 transition-all transition-duration-300">
              <div className="text-center">
                {/* Ícono circular para cada desarrollador */}
                <div className={`inline-flex align-items-center justify-content-center border-circle w-4rem h-4rem ${dev.color} mb-3`}>
                  <i className={`${dev.icon} text-2xl`}></i>
                </div>
                <h4 className="mt-0 mb-2 text-primary">{dev.name}</h4>
                <p className="m-0 text-600">{dev.role}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default TheDevelopers;
