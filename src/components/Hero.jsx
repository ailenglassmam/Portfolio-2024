import React from 'react';
import avatar from '../assets/imagenes/designer.png';

export default function Hero() {

  return (
    <section id='home' className='container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center md:h-screen'>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h4 className='leading-relaxed text-sm lg:text-base my-4 md:mx-0 mx-auto'>Hola, soy <span className='font-bold'>Ailén</span>, y estoy armando mi carrera profesional como</h4>
        <h1 className='title-font md:text-8xl text-4xl mb-4 font-extrabold text-main-text'>Diseñadora Y <span className=' text-second-background'>Desarrolladora</span></h1>
        <p className='leading-relaxed text-sm lg:text-base my-4 md:mx-0 mx-auto'>Actualmente en <span className='font-bold'>Buenos Aires, Argentina</span></p>
        <div div className='flex justify-center gap-4 my-10'>
          <a href='#contact' className='uppercase text-center text-xs font-medium text-primary-button-text px-4 py-2 rounded-full bg-primary-button border-primary-button border-2 hover:border-primary-button-hover hover:bg-main-background hover:text-primary-button-text-hover hover:transition-all'>Contactame</a>
          <a href='#projects' className='uppercase text-center text-xs font-medium text-black px-4 py-2 rounded-full bg-transparent border-2 border-secondary-button hover:border-secondary-button-hover hover:border-2 hover:transition-all'>Ver proyectos</a>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-full my-10'>
        <img className='object-cover object-center rounded' alt='hero' src={avatar} />
      </div>
    </section>
  )
}