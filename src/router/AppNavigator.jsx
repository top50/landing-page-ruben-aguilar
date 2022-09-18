import React from 'react'
import { Route, Routes } from 'react-router-dom'

import "../App.css"
import DiplomadoPage from '../pages/DiplomadoPage'
import ExperienciaPage from '../pages/ExperienciaPage'
import FormacionPage from '../pages/FormacionPage'
import HomePage from '../pages/HomePage'
import InformacionPage from '../pages/InformacionPage'
import ProyectosPage from '../pages/ProyectosPage'

import Navbar from './Navbar'

const AppNavigator = () => {
  return (
    <div className='w-full md:flex'>
      <Navbar />
   <Routes>
    <Route path='/*' element={<HomePage />} />
    <Route path='/Home' element={<HomePage />}/>
    <Route path='/Informacion' element={<InformacionPage  />}/>
    <Route path='/Formacion' element={<FormacionPage  />}/>
    <Route path='/Experiencia' element={<ExperienciaPage  />}/>
    <Route path='/Proyectos/' element={<ProyectosPage />}/>
    <Route path='/Diplomado' element={<DiplomadoPage  />}/>
   </Routes>
   </div>
  )
}

export default AppNavigator