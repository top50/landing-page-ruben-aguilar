import React from 'react'
import { Link } from "react-router-dom";
const Card = ({titulo,descriccion,boton}) => {
  return (
    <div className='m-6 mb-10 md:w-full animate__animated animate__backInLeft ' >
    <h2 className='text-white font-bold text-4xl mt-10 w:full'>{titulo}</h2>
    <div className='w-10/13 mt-2'>
    <p className='text-white mb-5 text-2xl text-justify'>{descriccion}</p>
    </div>
    <button className='text-white bg-orange-500 p-2 rounded-2xl mt-5 hover:bg-orange-800 transition-all' >{boton}</button>
    </div> 
  )
}

export default Card