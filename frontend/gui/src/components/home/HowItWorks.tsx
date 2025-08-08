import React from 'react';
import { Panel } from 'primereact/panel';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { Divider } from 'primereact/divider';
import { titleStyle } from '../../styles/commonStyles';

/**
 * Componente que explica el funcionamiento de Agrolab
 * Utiliza Timeline de PrimeReact para mostrar el proceso paso a paso
 */
const HowItWorks: React.FC = () => {
  // Datos para el timeline - cada paso del proceso
  const events = [
    {
      status: 'Captura',
      date: 'Paso 1',
      description: 'Un pequeño dispositivo toma fotos de la planta todos los días.'
    },
    {
      status: 'Almacenamiento',
      date: 'Paso 2', 
      description: 'Las fotos se guardan automáticamente en la nube.'
    },
    {
      status: 'Visualización',
      date: 'Paso 3',
      description: 'Desde cualquier computadora o celular, puedes entrar a la página de Agrolab y ver el avance de tu planta.'
    }
  ];

  // Personalización del marcador del timeline
  const customizedMarker = (item: any) => {
    return (
      <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
            style={{ backgroundColor: item.color }}>
        <i className={item.icon}></i>
      </span>
    );
  };

  // Personalización del contenido de cada evento
  const customizedContent = (item: any) => {
  return (
    <Card className="mt-3 shadow-2">
      <div className="flex align-items-center gap-3 mb-2">
        <Badge value={item.date} severity="info"  style={{ fontSize: '1.2rem', padding: '0.5rem 0.8rem', height: 'auto', minWidth: '2.5rem' }}></Badge>
        <h4 className="m-0">{item.status}</h4> {/* aquí */}
      </div>
      <p className="m-0">{item.description}</p> {/* y aquí */}
    </Card>
  );
};


  return (
    <Panel header={<span style={titleStyle}> ¿Cómo funciona? </span>} className="mb-4">
      <Timeline 
        value={events} 
        align="alternate" 
        className="customized-timeline"
        marker={customizedMarker} 
        content={customizedContent} 
      />
      <Divider />
      <div className="bg-blue-50 p-3 border-round">
        <p className="m-0 text-center font-medium text-blue-800">
          <i className="pi pi-info-circle mr-2"></i>
          Todo sucede de forma automática, para que solo tengas que preocuparte de cuidar tu planta y disfrutar viéndola crecer.
        </p>
      </div>
    </Panel>
  );
};

export default HowItWorks;