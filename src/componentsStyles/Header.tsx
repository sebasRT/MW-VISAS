import styled from "styled-components";
import {theme} from "./globalStyles";

interface headerProps {
size: number;
}

export const HeaderContainer = styled.div<headerProps>`
display: flex;
flex-direction: ${props => props.size > 768? 'column' : 'row'};
align-items: center;
background-color: ${ theme.colors.blue.dark};
padding: 8px;
top:0;
margin: 0;
position: sticky;
justify-content: space-between;
`
const image = ({className,src}:{className?: string, src: string}) =>  (<img className={className} src={src} ></img>)

export const LogoImage = styled(image)`
width: 180px;
border-radius: 50%;
box-shadow: 0 0 10px ;
@media screen and (max-width: 600px) {
    width: 20vw;
    height: 20vw;
}
`
export const NavContainer = styled.nav<headerProps>`
display: flex;
flex-direction: ${props => props.size > 768? 'column' : 'row'};
gap: 20px;
text-shadow: 0 0 5px black;
a{  

    text-decoration: none;
    color: whitesmoke;
    font-weight: 800;
    transition: all 0.3s ease;
}
a.active {
    color:${theme.colors.blue.light};
    text-decoration: underline;
    font-weight: bold;
    text-shadow:none;
}
`