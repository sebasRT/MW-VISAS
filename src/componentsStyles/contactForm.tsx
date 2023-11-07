import styled from "styled-components";
import {theme} from "./globalStyles";

export const ContactForm = styled.form`
z-index: 1;
background-color: white;
top:10%;
position:sticky;
text-align: center;
display: flex;
flex-direction: column;
align-self: center;
padding: 30px;
align-items: center;
gap:6px;
h1{
    color: ${theme.colors.blue.dark} ;   
};
input{
    border-style: none;
    border-bottom: 2px solid ${theme.colors.blue.light};
    width: 100%;
}

input:focus-visible{
    outline: none;
    border-bottom: 3px solid ${theme.colors.blue.primary};
    
};
textArea{
    width: 100%;
    border-style: none;
    border-bottom: 2px solid ${theme.colors.blue.light};
    transition: all 0.3s;
}
textArea:focus-visible{
    outline: none;
    border-bottom: 3px solid ${theme.colors.blue.primary};
}
button:hover{
    background-color: ${theme.colors.blue.light};
}
`


export const SendButton = styled.button`
    background-color: ${(props)=> props.disabled ? theme.colors.blue.light : theme.colors.blue.primary};
    border-style: none;
    color: whitesmoke;
    padding: 1em;
    border-radius: 8px;
    transition: all 0.2s;
    
`
