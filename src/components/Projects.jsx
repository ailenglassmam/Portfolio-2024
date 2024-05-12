import React from 'react';
import Gallery from './Gallery';

export default function Projects() {
  return (
    <section id='projects' className='container mx-auto h-fit p-10 px-5 py-24 text-main-text flex flex-col justify-center align-middle '>
      <h2 className='text-xl md:text-2xl font-extrabold  w-fit px-1 rounded mb-6'>Proyectos.</h2>
      <p className='text-sm lg:text-base mt-4 mb-20 mx-auto'>Durante mi trayectoria en diferentes capacitaciones, me enfoqué en el desarrollo del <strong>Front-End</strong>, trabajando en diversos proyectos. A lo largo del desarrollo de cada uno de ellos adquirí experiencia tanto en la implementación de soluciones de código puro como en el uso de frameworks y templates para crear interfaces interactivas y atractivas.</p>
      <Gallery></Gallery>
      <div className='flex flex-col text-center md:items-center mt-12'>
        <h2 className='text-xl md:text-2xl font-bold md:w-2/3 px-1 rounded mb-5'>Te invito a ver <span className='dark:text-yellow text-orange p-1 rounded-lg'>mis proyectos</span> en Github.</h2>
        <a href='https://github.com/ailenglassmam?tab=repositories' target='_blank' className='uppercase text-center text-xs font-medium text-primary-button-text px-4 py-2 rounded-full bg-primary-button border-primary-button border-2 hover:border-primary-button-hover hover:bg-main-background hover:text-primary-button-text-hover hover:transition-all'>Github</a>
      </div>
    </section>
  )
}
