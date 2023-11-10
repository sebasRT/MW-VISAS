import React, { useReducer, useState } from 'react';
import useEncodeWppURI from '@/utils/useEncodeWppURI';
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
    <form className='z-0 flex bg-white sticky top-1/4 self-center flex-col items-center text-center my-20'>
      <h1 className='text-blue-primary font-bold text-xl'>Contáctenos</h1>
      <br />
      <p className='text-sm text-blue-dark'>Tramita tu visa con nosotros y obtén asesoría migratoria</p>
      <br />
      <input
        className={inputStyles}
        placeholder="Nombre"
        type="text"
        name="name"
        minLength={3}
        value={state.name}
        onChange={(e)=>onChange(e)}
        required
        onInvalid={(e) => customValidation(e.target as HTMLInputElement)}
        autoComplete="off"
        />
      <input
        className={inputStyles}
        placeholder="Email"
        type="email"
        name="email"
        value={state.email}
        onChange={(e)=>onChange(e)}
        onInvalid={(e) => customValidation(e.target as HTMLInputElement)}
        required
      />
      <textarea
        className={inputStyles}
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
        className={inputStyles}
        placeholder="Escribe tu mensaje aquí..."
        name="message"
        value={state.message}
        onChange={(e)=>onChange(e)}
      ></textarea>
      <br />
      <button 
      className='bg-blue-light hover:bg-blue-primary text-white p-3 rounded transition-colors'
      type="submit"
      onClick={submitHandler}>
        Enviar
      </button>
    </form>
  );
};
const inputStyles = 'border-solid border-b-2 border-b-blue-light focus-visible:outline-none focus-visible:border-b-3 focus-visible:border-b-blue-primary'
export default ContactUs;
