import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../lib/firebase"; // tu inicialización de Firebase

interface Imagen {
  filename: string;
  timestamp: number;
  url: string;
}

const UltimaImagen = () => {
  const [imagen, setImagen] = useState<Imagen | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const db = getDatabase(app);
    const imagesRef = ref(db, "esp32cam/images");

    // Escucha cambios en tiempo real
    const unsubscribe = onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convierte objeto a array
        const imagesArray: Imagen[] = Object.values(data);
        // Ordena por timestamp descendente
        const ultima = imagesArray.sort((a, b) => b.timestamp - a.timestamp)[0];
        setImagen(ultima);
      }
      setCargando(false);
    });

    return () => unsubscribe(); // limpiar listener al desmontar
  }, []);

  return (
    <Card title="Última Imagen del Crecimiento" className="m-2 h-full">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
        }}
      >
        {cargando ? (
          <p>Cargando imagen...</p>
        ) : imagen ? (
          <img
            src={imagen.url}
            alt="Crecimiento de planta"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
           // ← Aquí giramos la imagen a la izquierda
            }}
          />
        ) : (
          <p style={{ color: "red" }}>No se pudo cargar la imagen</p>
        )}
      </div>
    </Card>
  );
};

export default UltimaImagen;
