import React from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';


export default function Footer() {
  return (
    <footer className='px-10 lg:px-20 2xl:px-96 bg-grey h-60 text-black flex flex-col justify-center'>
      <h4 className='mx-auto text-sm text-center'>Sitio diseñado y codificado con <FavoriteRoundedIcon/> por <a href='https://www.linkedin.com/in/ailenglassmam/' target='_black' className='hover:text-link-hover transition-colors'>Ailén Glassmam</a></h4>
      <h6 className='mx-auto mt-3 text-xs text-center'>Copyright © 2024 | Berazategui, Buenos Aires, Argentina</h6>
    </footer>
  )
}