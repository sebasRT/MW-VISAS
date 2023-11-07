'use client'
import styled from "styled-components";
import { theme } from "../../componentsStyles/globalStyles";

export const ServicesPage = styled.div`
margin-bottom: 10px;
width: 100%;
h1{
    color: ${theme.colors.blue.dark};
    text-align: center;
}
`
export const ServiceDescription = styled.p`
color: ${theme.colors.blue.dark};
`

export const ServicesContainer = styled.div`
align-items: center;
justify-content: center;
display: grid;
gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(5rem , 15rem));
padding: 20px;
`

export const ServiceSection = styled.section`
cursor: pointer;
border-radius: 5px;
padding: 5px;

h1{
    color: whitesmoke;
    background-color: ${theme.colors.blue.primary};
    text-align: center;
}
background-color: ${theme.colors.grey};
width: 100%;
border: 2.5px solid transparent;
&:hover {
    border: solid ${theme.colors.blue.primary};
}
transition: all 0.1s;
`

export const InfoImage = styled.image`
width: 100%;
height: 150px;
object-fit: cover;
`
