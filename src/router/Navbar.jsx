import React from "react";
import { Link } from "react-router-dom";
import LogoHome from "../assets/house-user-solid.svg";

const Navbar = () => {
  return (
    <div className="flex-col w-full m-0 p-6 mx-0 bg-black md:flex md:w-1/12 md:h-96 md:mx-16 md:m-5  ">
      <Link
        title="Home"
        className="text-white text-center p-2 hover:text-orange-500"
        to="/Home"
      >
        <span className="material-symbols-outlined text-4xl ">home</span>
      </Link>
      <Link
        title="Sobre mi"
        className="text-white text-center p-2 hover:text-orange-500"
        to="/Informacion"
      >
        <span className="material-symbols-outlined text-4xl">info</span>
      </Link>
      <Link
        title="Formacion Academica"
        className="text-white text-center p-2 hover:text-orange-500"
        to="/Formacion"
      >
        <span className="material-symbols-outlined text-4xl">menu_book</span>
      </Link>
      <Link
        title="Experiencia Laboral"
        className="text-white text-center p-2 hover:text-orange-500"
        to="/Experiencia"
      >
        <span className="material-symbols-outlined text-4xl">engineering</span>
      </Link>
      <Link
        title="Proyectos"
        className="text-white text-center p-2 hover:text-orange-500"
        to="/Proyectos"
      >
        <span className="material-symbols-outlined text-4xl">hub</span>
      </Link>

      <Link
        title="Trabajos curso React js"
        className="text-white text-center p-2 hover:text-orange-500"
        to="/Diplomado"
      >
        <span className="material-symbols-outlined text-4xl">
          code
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
