import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CarImagen from '../components/CarImagen';
import logoPerfil from '../assets/perfil.png';

const HomePage = () => {
  return (
    
  <div className='md:flex'>
  <Card 
  titulo="Ruben Dario Aguilar Alvarez"
  descriccion="Soy Lic. Ciencias Sociales , Tecnologo en Sistemas he trabajado con CMS como Wordpres
  para sitios noticiosos, manejo la herramienta illustrator, me gusta la fotografia y  la edicion de videos
  actualmente vivo en Montería Cordoba Colombia..
  "
  boton={<Link to ="../Informacion">Leer mas..</Link>}
  />
  <CarImagen
  imagen={<img src={logoPerfil} className="h-full w-full mb-4 md:w-32 lg:w-full"/>} 
  
  
  />
 
  </div>

 
  
  )
}

export default HomePage;