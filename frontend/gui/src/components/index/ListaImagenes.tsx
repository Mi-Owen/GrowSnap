import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { app } from "../../lib/firebase";
import { getDatabase, ref, get } from "firebase/database";

interface Imagen {
  filename: string;
  timestamp: number;
  url: string;
}

const ListaImagenes = () => {
  const [imagenes, setImagenes] = useState<Imagen[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const database = getDatabase(app);
        const imagesRef = ref(database, "esp32cam/images");
        const snapshot = await get(imagesRef);
        if (snapshot.exists()) {
          const data = snapshot.val() as Record<string, Imagen>;
          const imagenArray: Imagen[] = Object.values(data).sort(
            (a, b) => b.timestamp - a.timestamp
          );
          setImagenes(imagenArray);
        } else {
          console.log("No hay imágenes en la base de datos.");
          setImagenes([]);
        }
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
        setImagenes([]);
      } finally {
        setCargando(false);
      }
    };

    fetchImagenes();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {cargando ? (
        <p>Cargando imágenes...</p>
      ) : imagenes.length === 0 ? (
        <p>No hay imágenes disponibles.</p>
      ) : (
        imagenes.map((img, index) => (
          <Card
            key={img.filename}
            title={`Foto ${imagenes.length - index}`}
            className="m-2"
            style={{ width: "250px" }}
          >
            <img
              src={img.url}
              alt={`Foto ${imagenes.length - index}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                transform: "rotate(-90deg)",
             
              }}
            />

            <p
              style={{ fontSize: "0.8rem", color: "#666", marginTop: "0.5rem" }}
            >
              {new Date(img.timestamp).toLocaleString()}
            </p>
          </Card>
        ))
      )}
    </div>
  );
};

export default ListaImagenes;
