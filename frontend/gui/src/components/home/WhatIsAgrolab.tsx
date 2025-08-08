import React from 'react';
import { Card } from 'primereact/card';
import { titleStyle, paragraphStyle } from '../../styles/commonStyles';

const WhatIsAgrolab: React.FC = () => {
  const header = (
    <div className="flex align-items-center gap-2">
      <span style={titleStyle}>¿Qué es Agrolab?</span>
    </div>
  );

  return (
    <Card header={header} className="mb-4 shadow-3">
      <p style={paragraphStyle}>
        Agrolab es un proyecto escolar que ayuda a <strong>observar y seguir el crecimiento de una planta</strong> de manera automática.
        En lugar de tomar fotos manualmente todos los días, Agrolab lo hace por ti y las muestra en una página web para que puedas ver cómo cambia la planta con el tiempo.
      </p>
    </Card>
  );
};

export default WhatIsAgrolab;
