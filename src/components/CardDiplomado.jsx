import React from "react";
import LogoGithut from "../assets/github.svg";
import Logoweb from "../assets/globe-solid.svg";
const CardDiplomado = ({ imagen, nombre, githut, netlify }) => {
  return (
    <div className="w-full mb-5 mt-5 bg-slate-100 rounded-md hover:shadow-lg md:w-10/12 animate__animated animate__pulse ">
      <img src={imagen} className="w-ful" />
      <div className="w-full flex flex-col justify-center ">
        <h1 className="text-2lg font-bold text-center text-gray-400 ">
          Nombre del Ejercio en Riact js {nombre}
        </h1>

        <div className="flex bg-slate-200">
          <a href={githut}>
            <img
              src={LogoGithut}
              className="w-8 m-2 hover:translate-y-1 transition-all "
            />
          </a>
          <a href={netlify}>
            <img
              src={Logoweb}
              className="w-8 m-2 hover:translate-y-1 transition-all"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDiplomado;
