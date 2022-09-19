import React from 'react'
import Logofacebook from '../assets/facebook.svg'
import LogoInstagram from '../assets/instagram.svg'
import LogoWhatsapp from '../assets/whatsapp.svg';
const Header = () => {
  return (
   <div className='bg-pink-800 w-full p-4 bottom-1'>
<div className='flex  '>
   <h3 className='text-white m-2'>Redes Sociales</h3>
   <a href='https://www.facebook.com/RubenDarioAguilarAlvarez'><img src={Logofacebook} className="w-7 m-1"/></a>
   <a href='https://www.instagram.com/artaguilar2020/'><img src={LogoInstagram} className=" svg w-7 m-1"/></a>
   <a href=''><img src={LogoWhatsapp} className="w-7 m-1"/></a>
 
</div>
   </div>
  )
}

export default Header