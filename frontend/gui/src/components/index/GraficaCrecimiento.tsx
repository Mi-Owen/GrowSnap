import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { Card } from 'primereact/card';

const GraficaCrecimiento = () => {
  const [datos, setDatos] = useState<{ dia: string; altura: number }[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      try {
        const response = await axios.post("http://localhost:5000/api/crecimiento", {
          imagenes: [
            "imagen_dia1.jpg",
            "imagen_dia2.jpg",
            "imagen_dia3.jpg",
            "imagen_dia4.jpg",
          ],
        });

        setDatos(response.data.datos);
        setError(null);
      } catch (err) {
        setError("Error al obtener los datos del crecimiento.");
        console.error(err);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  const opciones = {
    chart: {
      type: "line" as const,
      toolbar: {
        show: false // Ocultar toolbar para ahorrar espacio
      },
      width: '100%', // Forzar que use el 100% del contenedor
      parentHeightOffset: 0
    },
    xaxis: {
      categories: datos.map((d) => d.dia),
    },
    title: {
      style: {
        fontSize: '16px' // Título más pequeño
      }
    },
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          height: 300
        }
      }
    }]
  };

  const series = [
    {
      name: "Altura (px)",
      data: datos.map((d) => d.altura),
    },
  ];

  if (cargando) return (
    <Card className="m-2">
      <p>Cargando datos...</p>
    </Card>
  );
  
  if (error) return (
    <Card className="m-2">
        
      <p style={{ color: "red" }}>{error}</p>
    </Card>
  );

  return (
    <Card  title="Gráfica de Crecimiento"  className="m-2 h-full">
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Chart 
          options={opciones} 
          series={series} 
          type="line" 
          height={350}
          width="100%" // Forzar ancho al 100%
        />
      </div>
    </Card>
  );
};

export default GraficaCrecimiento;