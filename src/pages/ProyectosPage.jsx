import React from "react";
import { useState, useEffect } from "react";
import CardProyecto from "../components/CardProyecto";
import proyectos from "../components/Proyectos";

const ProyectosPage = () => {
  return (
    <div className="w-full mb-28 container mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mx-20">
      {proyectos.map((proyecto) => (
        <CardProyecto
          key={proyecto.id}
          icon={proyecto.icon}
          nombre={proyecto.nombre}
          link={proyecto.link}
        />
      ))}
    </div>
  );
};

export default ProyectosPage;
