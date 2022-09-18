import React from 'react'
import CarFormacion from '../components/CarFormacion'
import TitulosCardFormacion from '../components/TitulosCardFormacion'
import Logos  from '../components'
const FormacionPage = () => {


  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <CarFormacion 
      img={Logos.sena} 
      titulo={TitulosCardFormacion.sena.titulo}      
      />
      <CarFormacion 
       img={Logos.fimlm} 
      titulo={TitulosCardFormacion.fimlm.titulo}      
      />
         <CarFormacion 
       img={Logos.tic} 
      titulo={TitulosCardFormacion.mintic.titulo}      
      />
         <CarFormacion 
       img={Logos.crehana} 
      titulo={TitulosCardFormacion.crehana.titulo}      
      />
      <CarFormacion 
       img={Logos.domestica} 
      titulo={TitulosCardFormacion.domesica.titulo}      
      />
       <CarFormacion 
       img={Logos.domestica} 
      titulo={TitulosCardFormacion.domesica.titulo2}      
      />
    </div>
  )
}

export default FormacionPage