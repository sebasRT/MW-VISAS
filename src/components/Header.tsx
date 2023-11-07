import { theme } from '@/componentsStyles/globalStyles';
import { HeaderContainer, LogoImage, NavContainer} from '../componentsStyles/Header'
import useWindowSize from '../utils.tsx/useWindowSize';
import Info from './Info';
import Link from 'next/link';

const Header = () => {
  const [width] = useWindowSize();
  

  return (
    <HeaderContainer size={width}>
        <LogoImage src= "https://i.postimg.cc/RZfprcbZ/mw-visas-Logo.webp"/>
        <NavContainer size={width}>
        
          <Link href='/' scroll>Inicio</Link>
          <Link href='aboutUs' scroll={false}>Nuestra Compañía</Link>
          {/* <Link href='FQ'>Preguntas Frecuentes</Link> */}
          
        </NavContainer>
        { width > 768 ? <Info color={theme.colors.grey}/> : null}
        
    </HeaderContainer>
  )
}

export default Header