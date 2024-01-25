import Info from './Info';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/customed.module.css'

const Header = () => {

  return (
    <div className='sticky
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
      <nav className='flex flex-row md:flex-col gap-8 ' >

        <Link
          className={`${styles.textShadow} hover:scale-105`}
          href='/' scroll>Inicio</Link>
        <Link
          className={`${styles.textShadow} hover:scale-105`}
          href='aboutUs' scroll>Nuestra Compañía</Link>
        <Link
          className={`${styles.textShadow} hover:scale-105`}
          href='services' scroll>Servicios</Link>

      </nav>
      <Info styles="hidden md:flex flex-col text-center text-primary-50 text-xs" />

    </div>
  )
}

const linkStyeles = ''
export default Header