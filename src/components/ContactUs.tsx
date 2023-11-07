import React, { useReducer, useState } from 'react';
import { ContactForm, SendButton } from '../componentsStyles/contactForm';
import useEncodeWppURI from '@/utils.tsx/useEncodeWppURI';
import { useRouter } from 'next/router';

interface State {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: State = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

type Action =
  | { type: 'name'; value: string }
  | { type: 'email'; value: string }
  | { type: 'subject'; value: string }
  | { type: 'message'; value: string };

function reducer(state: State, action: Action): State {
 return {...state, [action.type]: action.value}
}

const emailRegEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const customValidation = (target: HTMLInputElement ) =>{

  var value = target.value;

  switch (target.name) {

    case "name":
      if (target.value.length < 3) {
        target.setCustomValidity("Dinos tu nombre")
      } else{target.setCustomValidity("")}
      break;
    case "email":
      if (!emailRegEx.test(value)) {
        target.setCustomValidity("Dejanos un correo valido para contactarte")
      }else{target.setCustomValidity("")}
      break;
    case "subject":
      if (target.value.length < 4) {
        target.setCustomValidity("Con que asunto deseas que te ayudemos")
      }else{target.setCustomValidity("")}

      break;
  
    default:
      break;
  }

}

const createUriWppMessage = (state: State)=>{
  const message =`Hola, soy ${state.name}

Asunto: 
*${state.subject}*
  ${state.message}

Correo: 
${state.email}`

  return useEncodeWppURI(573196578007, message)
}

const ContactUs: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
   const router = useRouter()

  const submitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    
    if (validateState()) {
      event.preventDefault()
      const URL = createUriWppMessage(state)
      router.push(URL)   
  } 
  };

  const validateState = ()=>{
   return state.name.length >= 3 && state.subject.length >= 4 && emailRegEx.test(state.email)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    customValidation(event.target as HTMLInputElement)    
    const action: Action = {
      type: event.target.name as Action['type'],
      value: event.target.value,
    };
    dispatch(action);
  };


  return (
    <ContactForm>
      <h1>Contáctenos</h1>
      <p>Tramita tu visa con nosotros y<br /> obtén asesoría migratoria</p>
      <br />
      <input
        placeholder="Nombre"
        type="text"
        name="name"
        minLength={3}
        value={state.name}
        onChange={(e)=>onChange(e)}
        required
        onInvalid={(e) => customValidation(e.target as HTMLInputElement)}
        autoComplete=""
        />
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={state.email}
        onChange={(e)=>onChange(e)}
        onInvalid={(e) => customValidation(e.target as HTMLInputElement)}
        required
      />
      <textarea
        placeholder="Asunto"
        name="subject"
        minLength={4}
        value={state.subject}
        onChange={(e)=>onChange(e)}
        onInvalid={(e) => customValidation(e.target as HTMLInputElement)}
        required
        autoComplete="off"
      ></textarea>
      <textarea
        placeholder="Escribe tu mensaje aquí..."
        name="message"
        value={state.message}
        onChange={(e)=>onChange(e)}
      ></textarea>
      <br />
      <SendButton type="submit" onClick={submitHandler}  >
        Enviar
      </SendButton>
    </ContactForm>
  );
};

export default ContactUs;
