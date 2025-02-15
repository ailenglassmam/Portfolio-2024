import React from 'react';
import EducationCard from './EducationCard';

export default function Education() {
  return (
    <section id='education' className='bg-second-background text-white-text'>
      <div className='container mx-auto h-fit p-10 px-5 py-24 flex flex-col justify-center align-middle'>
        <h2 className='text-xl md:text-2xl font-extrabold text-white-text w-fit px-1 rounded mb-6'>Educación.</h2>
        <p className='text-sm lg:text-base my-6 mx-auto'>He invertido en mi crecimiento y desarrollo profesional a través de una serie de cursos especializados. Estas experiencias formativas me han permitido adquirir nuevas habilidades y conocimientos en áreas clave como el <strong>diseño gráfico, la programación web y el uso de herramientas de desarrollo</strong>.</p>
        <EducationCard></EducationCard>
      </div>

    </section>
  )
}
