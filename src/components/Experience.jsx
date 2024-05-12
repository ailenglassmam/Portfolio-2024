import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section id='experience' className='container mx-auto h-fit p-10 px-5 py-24 text-main-text flex flex-col justify-center align-middle'>
      <h2 className='text-xl md:text-2xl font-extrabold  w-fit px-1 rounded mb-6'>Experiencia.</h2>
      <p className='text-sm lg:text-base mt-4 mb-20 mx-auto'>Tuve la oportunidad de trabajar en varios proyectos, tanto en <strong>proyectos desde cero como en proyectos ya iniciados</strong>, utilizando diferentes herramientas y programas para llevar a cabo cada proyecto con éxito.</p>
      <ExperienceCard></ExperienceCard>
      <div className='flex flex-col text-center md:text-start md:items-center mt-12 md:flex-row md:justify-between'>
        <h2 className='text-xl md:text-2xl font-bold md:w-2/3 px-1 rounded'>Te invito a ver <span className='dark:text-yellow text-orange p-1 rounded-lg'>mi trabajo</span> en Behance.</h2>
        <a href='https://www.behance.net/ailnglassmam' target='_blank' className='uppercase text-center text-xs font-medium text-primary-button-text px-4 py-2 rounded-full bg-primary-button border-primary-button border-2 hover:border-primary-button-hover hover:bg-main-background hover:text-primary-button-text-hover hover:transition-all'>Behance</a>
      </div>
    </section>
  )
}
