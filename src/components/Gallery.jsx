import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function Gallery() {
  return (
    <article className='grid grid-cols-1 md:grid-cols-3 w-full gap-5 mb-20'>
      <div className='grid gap-4 bg-pbg1 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-second-background rounded-lg p-5'>
        {/* project 1 */}
        <div className='flex flex-col justify-between'>
          <div>
            <span className='bg-main-background text-title text-xs font-medium px-2.5 py-0.5 rounded-full uppercase'>UTN - FRRE</span>
            <h5 className='mb-5 mt-3 text-2xl font-bold tracking-tight text-white-text'>SPA | Pawhost</h5>
          </div>
          <div className='flex flex-col justify-end'>
            <a href='https://ailenglassmam.github.io/P1-OnePage/' target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-text ml-auto hover:text-link-hover transition-colors'>Deploy <ArrowForwardRoundedIcon /></a>
            <a href='https://github.com/ailenglassmam/P1-OnePage' target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-text ml-auto hover:text-link-hover transition-colors'>Repo <ArrowForwardRoundedIcon /></a>
          </div>
        </div>
        {/* project 1 */}
      </div>
      <div className='grid grid-cols-1 md:grid-rows-2 gap-5'>
        {/* project 2 */}
        <div className='grid gap-4 bg-pbg2 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-second-background rounded-lg p-5'>
          <div>
            <span className='bg-main-background text-title text-xs font-medium px-2.5 py-0.5 rounded-full uppercase'>Codo a Codo</span>
            <h5 className='mb-5 mt-3 text-2xl font-bold tracking-tight text-white-text'>SPA | Humaya</h5>
          </div>
          <div className='flex flex-col justify-end'>
            <a href='https://humayadulcesargentinos.netlify.app/' target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-text ml-auto hover:text-link-hover transition-colors'>Deploy <ArrowForwardRoundedIcon /></a>
            <a href='https://github.com/ailenglassmam/Humaya-react-project' target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-text ml-auto hover:text-link-hover transition-colors'>Repo <ArrowForwardRoundedIcon /></a>
          </div>
        </div>
        {/* project 2 */}
        {/* project 3 */}
        <div className='grid gap-4 bg-pbg3 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-second-background rounded-lg p-5'>
          <div>
            <span className='bg-main-background text-title text-xs font-medium px-2.5 py-0.5 rounded-full uppercase'>Codo a Codo</span>
            <h5 className='mb-5 mt-3 text-2xl font-bold tracking-tight text-white-text'>CosmoTask</h5>
          </div>
          <div className='flex flex-col justify-end'>
            <a href='https://cosmotask.netlify.app/' target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-text ml-auto hover:text-link-hover transition-colors'>Deploy <ArrowForwardRoundedIcon /></a>
            <a href='https://github.com/ailenglassmam/CosmoTask-Todo-list-project' target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-text ml-auto hover:text-link-hover transition-colors'>Repo <ArrowForwardRoundedIcon /></a>
          </div>
        </div>
        {/* project 3 */}
      </div>
      {/* project 4 */}
      <div className='grid gap-4 bg-pbg4 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-second-background rounded-lg p-5'>
        <div>
          <span className='bg-main-background text-title text-xs font-medium px-2.5 py-0.5 rounded-full uppercase'>Codo a Codo</span>
          <h5 className='mb-5 mt-3 text-2xl font-bold tracking-tight text-white-text'>Quotify</h5>
        </div>
        <div className='flex flex-col justify-end'>
          <a href='https://quotifyapp.netlify.app/' target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-text ml-auto hover:text-link-hover transition-colors'>Deploy <ArrowForwardRoundedIcon /></a>
          <a href='https://github.com/LeandroEchegorria/Quotify' target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white-text ml-auto hover:text-link-hover transition-colors'>Repo <ArrowForwardRoundedIcon /></a>
        </div>
      </div>
      {/* project 4 */}
    </article>
  )
}
