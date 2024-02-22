'use client'
import { useState } from 'react';
import Info from './Info';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='sticky
    md:w-min
      flex
      flex-row
      items-center 
      content-center 
      text-center
    bg-primary-900
      p-4 
      top-0
      m-0 
      gap-3
      text-xs
      justify-between 
      z-20
      md:h-screen
      md:flex-col
      md:text-left
           '>
      <Image
        className='rounded-full shadow-full shadow-primary-960 w-20 md:w-44'
        src='/mw-visasLogo.webp' width={1000} height={1000} alt='mw-visas logo' />
      <nav className='flex flex-row md:flex-col gap-3 md:gap-8 text-xs' >

    <div className={`${isOpen ? "fixed" : "hidden"} h-screen w-screen fixed inset-0 z-20 bg-transparent`} onClick={()=>setIsOpen(false)}></div>
    <div className='md:hidden relative'>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-200 rounded-lg  hover:bg-primary-700 focus:outline-none  focus:bg-primary-700 transition"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
              />
          </svg>
        </button>
        <div
          className={`${isOpen ? 'flex' : 'hidden'
        }  md:block md:w-auto absolute z-30 w-fit -left-full transition ease-out duration-75`}
        id="navbar-default"
        >
          <ul className="font-medium flex flex-col gap-4 p-4 md:p-0 mt-4 border border-gray-500 rounded-s-lg bg-primary-950 rtl:space-x-reverse">
            <li><Link
              className="text-primary-50 font-sans uppercase "
              href='/' scroll>Inicio</Link></li>
            <li><Link
              className="text-primary-50 font-sans uppercase "
              href='/services' scroll>Servicios</Link></li>
            <li><Link
              className="text-primary-50 font-sans uppercase "
              href='/aboutUs' scroll>Nuestra Compañía</Link></li>
            <li><Link
              className="text-primary-50 font-sans uppercase "
              href='/FAQ' scroll>Preguntas frecuentes</Link></li>
          </ul>
              </div>
        </div>

        <div className='hidden md:flex flex-col gap-8'>

          <Link
          className="text-primary-50 font-semibold font-sans uppercase hover:scale-105 transition"
          href='/' scroll>Inicio</Link>
          <Link
          className="text-primary-50 font-semibold font-sans uppercase hover:scale-105 transition"
          href='services' scroll>Servicios</Link>
        <Link
          className="text-primary-50 font-semibold font-sans uppercase hover:scale-105 transition"
          href='aboutUs' scroll>Nuestra Compañía</Link>
          <Link
          className="text-primary-50 font-semibold font-sans uppercase hover:scale-105 transition"
          href='services' scroll>Preguntas frecuentes</Link>
          
       
        </div>
      </nav >
      <Info styles="hidden md:flex flex-col text-center text-primary-50 text-xs" />

    </div >
  )
}

const linkStyeles = ''
export default Header