// =====================================
// components/BehindTheScenes.tsx
// =====================================
import React from 'react';
import { Card } from 'primereact/card';
import { titleStyle } from '../../styles/commonStyles';
/**
 * Componente que explica la tecnología detrás de Agrolab
 * Utiliza Card de PrimeReact con un grid layout para organizar la información técnica
 */
const BehindTheScenes: React.FC = () => {
  const header = (
    <div className="flex align-items-center gap-2">
      <span className="text-xl font-bold" style={titleStyle}>Detrás de cámaras</span>
    </div>
  );

  return (
    <Card header={header} className="mb-4 shadow-2">
      <div className="grid">
        {/* Componente ESP32 */}
        <div className="col-12 md:col-6">
          <div className="bg-blue-50 p-3 border-round mb-3">
            <h4 className="text-primary mt-0">Cerebro Electrónico</h4>
            <p className="m-0 text-700">ESP32 con cámara integrada (ESP-CAM)</p>
          </div>
        </div>
        
        {/* Almacenamiento en la nube */}
        <div className="col-12 md:col-6">
          <div className="bg-purple-50 p-3 border-round mb-3">
            <h4 className="text-primary mt-0">Almacenamiento</h4>
            <p className="m-0 text-700">Espacio seguro en internet</p>
          </div>
        </div>
        
        {/* Interfaz web */}
        <div className="col-12">
          <div className="bg-green-50 p-3 border-round">
            <h4 className="text-primary mt-0">Interfaz Web</h4>
            <p className="m-0 text-700">Página web que muestra las fotos de forma clara y ordenada</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BehindTheScenes;