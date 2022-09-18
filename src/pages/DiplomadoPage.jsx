import React from 'react'
import CardDiplomado from '../components/CardDiplomado'
import proyecdiplomado from '../components/ProyectDiplomado'


const DiplomadoPage = () => {
  return (
 <div className='grid grid-cols-1 md:grid-cols-3'>
{proyecdiplomado.map((proyecto)=>(
<CardDiplomado
key={proyecto.id}
imagen={proyecto.imagen}
nombre={proyecto.nombre}
githut={proyecto.gitHut}
netlify={proyecto.netlify}
/>

))}

 </div>
  )
}

export default DiplomadoPage