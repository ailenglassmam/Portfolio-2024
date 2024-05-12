import React from 'react';
import behance from '../assets/iconos/brand-behance.svg';
import linkedin from '../assets/iconos/brand-linkedin.svg';
import github from '../assets/iconos/brand-github.svg';
import contact from '../assets/imagenes/background-contact-2.png'

export default function Contact() {
  return (
    <section id='contact' className='container mx-auto h-fit p-10 px-5 py-24 text-main-text flex flex-col justify-center align-middle'>
      <div className='grid grid-cols-1 md:w-1/2 mx-auto gap-4 bg-second-background rounded-lg'>
        <div className=' text-white-text p-8 rounded-lg'>
          <h3 className='text-lg md:text-xl font-bold'>Seguime.</h3>
          <p className='my-5'>Estoy buscando oportunidades. Estoy entusiasmada por unirme a un equipo comprometido.</p>
          <div className='w-full h-1 bg-white-text  rounded-full mb-5'></div>
          <div className='grid grid-cols-3 justify-center'>
            <a href='https://www.behance.net/ailnglassmam' target='_blank' className='bg-main-background  w-fit rounded-full p-3 mx-auto  hover:bg-link-hover'><img className=' text-white' src={behance}></img></a>
            <a href='https://www.linkedin.com/in/ailenglassmam/' target='_blank' className='bg-main-background  w-fit rounded-full p-3 mx-auto  hover:bg-link-hover transition-colors'><img src={linkedin}></img></a>
            <a href='https://github.com/ailenglassmam?tab=repositories' target='_blank' className='bg-main-background  w-fit rounded-full p-3 mx-auto  hover:bg-link-hover transition-colors'><img src={github}></img></a>
          </div>
        </div>
      </div>
    </section>
  )
}