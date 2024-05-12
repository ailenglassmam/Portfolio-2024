/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        education: "url('/assets/imagenes/background-gradient.svg')",
        pbg1: "url('./assets/proyectos/1.jpg')",
        pbg2: "url('./assets/proyectos/2.jpg')",
        pbg3: "url('./assets/proyectos/3.jpg')",
        pbg4: "url('./assets/proyectos/4.jpg')"
      },
    },
    boxShadow: {
      'lightShadow': '10px 10px 0 2px #0D05F2',
    },
    colors: {
      'main-background': '#F2F2F2',
      'second-background': '#0D05F2',
      'title': '#030BA6',
      'subtitle': '#040FD9',
      'main-text': '#0D0D0D',
      'second-text': '#030A8C',
      'white-text': '#F2F2F2',
      'primary-button': '#0D0D0D',
      'primary-button-hover': '#0D0D0D',
      'primary-button-text': '#F2F2F2',
      'primary-button-text-hover': '#0D0D0D',
      'secondary-button': '#F2F2F2',
      'secondary-button-hover': '#0D05F2',
      'link': '#0D05F2',
      'link-hover': '#80A6F2'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}

