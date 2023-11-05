import styled from "styled-components";
import { theme } from "./globalStyles";

export const FQContainer = styled.div`
align-self: center;
align-items: center;
justify-content: center;
width:90%;
display: grid;
gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(5rem , 15rem));
padding: 20px;
`

export const FQSection = styled.section`
border-radius: 5px;
padding: 5px;
h1{
    color: whitesmoke;
    background-color: ${theme.colors.blue.primary};
    text-align: center;
}
background-color: whitesmoke;
width: 100%;
`