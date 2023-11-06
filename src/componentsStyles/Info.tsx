import styled from "styled-components";

interface props {
    color: string;
}
export const InfoContainer = styled.div<props>`
color: ${(props)=> props.color};
text-align: center;
font-size: 0.5em    
`