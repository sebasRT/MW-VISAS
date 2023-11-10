import useWindowSize from '../utils/useWindowSize';
import Info from './Info';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/customed.module.css'

const Header = () => {
  const [width] = useWindowSize();
  

  return (
    <div className='flex flex-row md:flex-col items-center bg-blue-dark p-4 top-0 m-0 sticky justify-between'>
        <Image  
          className='rounded-full shadow-full shadow-black'
          src ='/mw-visasLogo.webp' width={width > 768 ? 180: 90} height={width > 768 ? 180: 90} alt='mw-visas logo' />
        <nav className='flex flex-row md:flex-col gap-8 ' >
        
          <Link 
          className={styles.textShadow}
          href='/' scroll>Inicio</Link>
          <Link
          className={styles.textShadow}
           href='aboutUs' scroll>Nuestra Compañía</Link>
          {/* <Link href='FQ'>Preguntas Frecuentes</Link> */}
          
        </nav>
        { width > 768 ? <Info size='text-xs' color='text-grey'/> : null}
        
    </div>
  )
}

export default Header