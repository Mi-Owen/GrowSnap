import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';

const UltimaImagen = () => {
  const [imagenUrl, setImagenUrl] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/ultima-imagen')
      .then((res) => {
        const filename = res.data.filename;
        setImagenUrl(`http://localhost:5000/images/${filename}`);
      })
      .catch((err) => {
        console.error('Error al cargar la imagen:', err);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <Card 
      title="Última Imagen del Crecimiento" 
      className="m-2 h-full"
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '300px'
      }}>
        {cargando ? (
          <p>Cargando imagen...</p>
        ) : imagenUrl ? (
          <img 
            src={imagenUrl} 
            alt="Crecimiento de planta" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '300px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }} 
          />
        ) : (
          <p style={{ color: 'red' }}>No se pudo cargar la imagen</p>
        )}
      </div>
    </Card>
  );
};

export default UltimaImagen;