import React from "react";
import { Panel } from "primereact/panel";
import { Card } from "primereact/card";
import { titleStyle } from "../../styles/commonStyles";

interface Developer {
  name: string;
  role: string;
  color: string;
  avatar?: string;
}

const developers: Developer[] = [
  {
    name: "Janine Rivera",
    role: "Investigación y diseño",
    color: "bg-pink-100 text-pink-800",
  },
  {
    name: "David Tovar",
    role: "Programación electrónica",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Owen Arredondo",
    role: "Desarrollo web y presentación",
    color: "bg-purple-100 text-purple-800",
  },
];

const TheDevelopers: React.FC = () => {
  return (
    <Panel
      header={<span style={titleStyle}>Los desarrolladores</span>}
      className="mb-4"
      toggleable
    >
      <p className="text-center text-lg mb-6 text-700">
        Agrolab fue creado por un equipo de <strong>3 desarrolladores</strong>{" "}
        apasionados por la tecnología y la naturaleza:
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // distribuye las cards con espacio entre ellas
          flexWrap: "nowrap", // evita que se vayan a otra fila
          gap: "1rem", // espacio mínimo entre cards
          padding: "1rem 0",
        }}
      >
        {developers.map((dev, index) => (
          <Card
            key={index}
            className="h-full shadow-1 hover:shadow-3 transition-all transition-duration-300 transform hover:scale-105"
            style={{
              flex: 1, // cada card ocupa espacio proporcional
              margin: "0 0.5rem", // margen lateral
              minWidth: "200px", // ancho mínimo para que no se achiquen demasiado
            }}
          >
            <div className="text-center">
              <div
                className={`inline-flex align-items-center justify-content-center border-circle w-4rem h-4rem ${dev.color} mb-3 text-xl font-bold`}
              >
                {dev.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h4 className="mt-0 mb-1 text-primary">{dev.name}</h4>
              <p className="m-0 text-600">{dev.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </Panel>
  );
};

export default TheDevelopers;
