import { theme } from "@/componentsStyles/globalStyles";
import styled from "styled-components";

export const AboutUsContainer = styled.div`
width: 100%;
align-items: center;
text-align: center;
color: ${theme.colors.blue.dark};
`
export const AbUsSection = styled.section`
background-color: ${theme.colors.grey};
margin: 10px;
h2{
    background-color: ${theme.colors.blue.primary};
    color: ${theme.colors.grey};
    padding: 5px;
}
p{
    padding: 5%;
    font-size: large;
}
`