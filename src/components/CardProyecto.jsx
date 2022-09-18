import React from 'react'

const CardProyecto = ({icon,nombre,link}) => {
  return (
    <div className="bg-pink-800 grid grid-cols-1 h-auto mb-3 w-full rounded-full p-2 justify-items-center md:w-1/2 animate__animated animate__backInLeft">
    <div className="mb-1">
      <span className="material-symbols-outlined text-3xl text-white">{icon}</span>
    </div>
    <a href={link} className="font-black text-2xs p-1 text-white hover:text-orange-500">
      {nombre}
    </a>
  </div>
  )
}

export default CardProyecto
