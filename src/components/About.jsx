import React from 'react';
import workPlace from '../assets/imagenes/escritorio.png';

export default function About() {
  return (
    <section id='aboutMe' className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
        <img className='object-cover object-center rounded' alt='hero' src={workPlace} />
      </div>
      <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
        <h1 className='title-font md:text-4xl text-2xl mb-4 font-extrabold text-main-text'>Diseñadora industrial que se aventuró en el mundo digital desde el 2020.</h1>
        <p className='mb-8 leading-relaxed text-sm lg:text-base my-6 mx-auto'>Empecé haciendo trabajos freelance como <strong>diseño gráfico para redes sociales</strong>, <strong>estampados de remeras</strong> y <strong>renderizados 3D de mobiliario</strong>. Viendo el auge del sector tecnológico, decidí ampliar mis horizontes con capacitaciones en <strong>diseño UX/UI</strong> y <strong>Desarrollo Full-Stack</strong>, aunque mi corazón sigue en el <strong>diseño</strong> y <strong>Desarrollo Front-End</strong>.</p>
        <p className='mb-8 leading-relaxed text-sm lg:text-base my-6 mx-auto'>
          Actualmente, me desempeño como <strong>diseñadora UX/UI</strong> en una empresa de sistemas para administración de edificios, y estoy buscando siempre <strong>oportunidades que me desafíen y me permitan crecer profesionalmente</strong>. Me encantaría tener la oportunidad de explorar nuevas tecnologías, áreas y colaborar con equipos de desarrollo.</p>
      </div>
    </section>
  )
}