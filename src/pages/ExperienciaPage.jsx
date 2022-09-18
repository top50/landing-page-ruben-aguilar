import React from 'react'
import CarFormacion from '../components/CarFormacion'
import TitulosCardFormacion from '../components/TitulosCardFormacion'
import Logos  from '../components'
const ExperienciaPage = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-9 mb-20">
  <CarFormacion
  img={Logos.anggie}
  titulo={TitulosCardFormacion.experiencia.graficasangie.cargo}
  
  />
  <CarFormacion
  img={Logos.radiosiglo}
  titulo={TitulosCardFormacion.experiencia.xxiradio.cargo}
  
  />
  <CarFormacion
  img={Logos.ambulatorios}
  titulo={TitulosCardFormacion.experiencia.ambulatorios.cargo}
  
  />
  <CarFormacion
  img={Logos.tresmedio}
  titulo={TitulosCardFormacion.experiencia.atresmedios.cargo}
  
  />
  </div>
  )
}

export default ExperienciaPage