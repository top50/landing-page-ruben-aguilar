import React from "react";
import CardDescriccion from "../components/CardDescriccion";
import LogoPerfil from "../assets/dos.png";
import CarImagen from "../components/CarImagen";

const InformacionPage = () => {
  return (
    <div className="md:flex">
      <CarImagen
        imagen={
          <img src={LogoPerfil} className="h-full w-full md:w-32 lg:w-full" />
        }
      />
      <CardDescriccion
        titulo="Rubén Dario Aguilar Alvarez"
        descriccion="Soy Lic. Ciencias Sociales, Tecnólogo en Sistemas he trabajado con CMS como Wordpres para sitios noticiosos, manejo la herramienta illustrator, me gusta la fotografía y la edición de videos, actualmente vivo en Montería Córdoba Colombia he realizado estudios con la FIMLM en el Diplomado en Desarrollo Front-end con React JS, también estoy realizando estudios con MIN TIC con el convenio IBM en programación.
    He trabajado para empresas estatales diferentes al rol de programador como fue para Restitución de Tierras en el año 2021 y la Alta Consejería para la reintegración de personas al margen de la Ley en el año 2006 a 2009, donde en ambos cargos fue una experiencia gratificante
    "
      />
    </div>
  );
};

export default InformacionPage;
