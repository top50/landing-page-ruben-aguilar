import React from 'react'
import { Link } from "react-router-dom";
const CardDescriccion = ({titulo,descriccion}) => {
  return (
    <div className='m-6 mb-10 md:w-full animate__animated animate__backInLeft' >
    <h2 className='text-white font-bold text-4xl mt-10 w:full'>{titulo}</h2>
    <div className='w-10/13 mt-2'>
    <p className='text-white mb-5 text-2xl text-justify'>{descriccion}</p>
    </div>   
    </div> 
  )
}

export default CardDescriccion