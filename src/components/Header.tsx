import { theme } from '@/componentsStyles/globalStyles';
import { HeaderContainer, LogoImage, NavContainer} from '../componentsStyles/Header'
import useWindowSize from '../utils.tsx/useWindowSize';
import Info from './Info';
import Link from 'next/link';

const Header = () => {
  const [width] = useWindowSize();
  

  return (
    <HeaderContainer size={width}>
        <LogoImage src='https://static.wixstatic.com/media/8115ef_21790175318b45779c899bcde109b0cf~mv2.png/v1/fill/w_303,h_303,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8115ef_21790175318b45779c899bcde109b0cf~mv2.png)'/>
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