import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import trabajos from '../information/trabajosData';

export default function ExperienceCard() {

  const trabajosRealizados = trabajos.map(trabajo => {
    return (
      <div className='w-auto rounded-xl hover:shadow-2xl drop-shadow-2xl hover:shadow-lightShadow transition-shadow border-2 border-second-background' key={trabajo.id}>
        <div className='p-5'>
          <span className='bg-second-background text-main-background text-xs font-medium px-2.5 py-0.5 mb-4 rounded-full uppercase'>{trabajo.metodo}</span>
          <h5 className='my-2 text-2xl font-bold tracking-tight text-main-text' >{trabajo.titulo}</h5>
          <p className='mb-3 font-medium text-second-text'>{trabajo.tipo}</p>
          <a href={trabajo.link} target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-main-text ml-auto hover:text-title transition-colors'>Ver Más <ArrowForwardRoundedIcon /></a>
        </div>
      </div>
    )
  })

  return (
    <article className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-20'>
      {/* experience */}
      {trabajosRealizados}
      {/* experience */}
    </article>
  )
}
