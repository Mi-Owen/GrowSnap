import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { Card } from 'primereact/card';

interface CrecimientoData {
  dia: string;
  altura: number;
}

const GraficaCrecimiento = () => {
  const [datos, setDatos] = useState<CrecimientoData[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setCargando(true);
      try {
        // 1️⃣ Obtener listado de imágenes desde Firebase
        const listadoRes = await axios.get("http://localhost:5000/api/listado-imagenes");
        const urls = listadoRes.data.imagenes.map((img: { url: string }) => img.url);

        if (urls.length === 0) {
          setError("No se encontraron imágenes.");
          setCargando(false);
          return;
        }

        // 2️⃣ Enviar URLs al endpoint de crecimiento
        const response = await axios.post("http://localhost:5000/api/crecimiento", {
          imagenes: urls
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
      toolbar: { show: false },
      width: '100%',
      parentHeightOffset: 0
    },
    xaxis: { categories: datos.map(d => d.dia) },
    yaxis: { title: { text: "Altura (cm)" } },
    title: { text: "Crecimiento de la Planta", style: { fontSize: '16px' } },
    responsive: [{
      breakpoint: 768,
      options: { chart: { height: 300 } }
    }]
  };

  const series = [{ name: "Altura (cm)", data: datos.map(d => d.altura) }];

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
    <Card title="Gráfica de Crecimiento" className="m-2 h-full">
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Chart options={opciones} series={series} type="line" height={350} width="100%" />
      </div>
    </Card>
  );
};

export default GraficaCrecimiento;
