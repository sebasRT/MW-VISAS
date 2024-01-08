import Info from './Info';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/customed.module.css'

const Header = () => {

  return (
    <div className='flex flex-row md:flex-col items-center bg-blue-dark p-4 top-0 m-0 sticky justify-between'>
        <Image  
          className='rounded-full shadow-full shadow-black w-20 md:w-44'
          src ='/mw-visasLogo.webp' width={1000} height={1000} alt='mw-visas logo' />
        <nav className='flex flex-row md:flex-col gap-8 ' >
        
          <Link 
          className={styles.textShadow}
          href='/' scroll>Inicio</Link>
          <Link
          className={styles.textShadow}
           href='aboutUs' scroll>Nuestra Compañía</Link>
          
        </nav>
        <Info styles="hidden md:flex flex-col text-center text-grey text-xs"/> 
        
    </div>
  )
}

export default Header