import { theme } from "@/componentsStyles/globalStyles";
import styled from "styled-components";


export const IntroContainer = styled.div`
align-items: center;
text-align: center;
color: ${theme.colors.blue.dark};
background-color: ${theme.colors.grey};

h2{
    align-items: center;
    background-color: ${theme.colors.blue.primary };
    padding: 5px;
    color: ${theme.colors.grey};
    font-weight: bold ;
}
margin: 10px;
`
export const Intro = styled.p`
padding: 5%;
font-size: large;
`