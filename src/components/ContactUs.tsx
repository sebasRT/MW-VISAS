'use client'
import React, { useReducer, useState } from 'react';
import useEncodeWppURI from '@/utils/useEncodeWppURI';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineFacebook } from 'react-icons/ai'
import Link from 'next/link';
import { sendNewClientEmail } from './services/_actions';

interface State {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

const initialState: State = {
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',
};

type Action =
  | { type: 'name'; value: string }
  | { type: 'email'; value: string }
  | { type: 'subject'; value: string }
  | { type: 'message'; value: string }
  | { type: 'phone'; value: string };

function reducer(state: State, action: Action): State {
  return { ...state, [action.type]: action.value }
}

const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const customValidation = (target: HTMLInputElement) => {

  var value = target.value;

  switch (target.name) {

    case "name":
      if (target.value.length < 3) {
        target.setCustomValidity("Dinos tu nombre")
      } else { target.setCustomValidity("") }
      break;
    case "email":
      if (!emailRegEx.test(value)) {
        target.setCustomValidity("Déjanos un correo valido para contactarte")
      } else { target.setCustomValidity("") }
      break;
    case "phone":
      if (target.value.length < 4) {
        target.setCustomValidity("Déjanos un teléfono donde podamos contactarte")
      } else { target.setCustomValidity("") }
      break;
    case "subject":
      if (target.value.length < 4) {
        target.setCustomValidity("Dinos con qué asunto deseas que te ayudemos")
      } else { target.setCustomValidity("") }


      break;

    default:
      break;
  }

}

const createUriWppMessage = (state: State) => {
  const message = `Hola, soy ${state.name}

Asunto: 
*${state.subject}*
  ${state.message}

Correo: 
${state.email}

Telefono:
${state.phone}
`

  return useEncodeWppURI(573182961436, message)
}

const ContactUs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, setFormState] = useState<"loading" | "done" | "error" | "">("")

  const [whatsappLink, setWhatsappLink] = useState(useEncodeWppURI(573182961436,""))

  const router = useRouter()

  const submitHandler = async (event: React.FormEvent<HTMLButtonElement>) => {

    if (validateState()) {
      event.preventDefault()
      setWhatsappLink(createUriWppMessage(state))

      setFormState("loading")

      const result = await sendNewClientEmail(state)

      if (result.data?.id) {
        setFormState("done")
    
      } else {
        setFormState("error")
      }
    }
  };

  const validateState = () => {
    return state.name.length >= 3 && state.subject.length >= 4 && emailRegEx.test(state.email) && state.phone.length > 1
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
    <div className='md:sticky md:h-screen flex flex-col top-0  justify-around md:w-min'>

      <form className='z-0 flex bg-white self-center flex-col items-center text-center p-2'>
        <h1 className='text-primary-700 font-bold text-xl'>Contáctenos</h1>
        <br />
        <p className='text-sm text-primary-dark'>Tramita tu visa con nosotros y obtén asesoría migratoria</p>
        <br />
        <input
          className={inputStyles}
          placeholder="Nombre"
          type="text"
          name="name"
          minLength={3}
          value={state.name}
          onChange={(e) => onChange(e)}
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
          onChange={(e) => onChange(e)}
          onInvalid={(e) => customValidation(e.target as HTMLInputElement)}
          required
        />
        <input
          className={inputStyles}
          placeholder="Teléfono"
          type="number"
          name="phone"
          value={state.phone}
          onChange={(e) => onChange(e)}
          onInvalid={(e) => customValidation(e.target as HTMLInputElement)}
          required
        />

        <textarea
          className={inputStyles}
          placeholder="Asunto"
          name="subject"
          minLength={4}
          value={state.subject}
          onChange={(e) => onChange(e)}
          onInvalid={(e) => customValidation(e.target as HTMLInputElement)}
          required
          autoComplete="off"
        ></textarea>
        <textarea
          className={inputStyles}
          placeholder="Escribe tu mensaje aquí..."
          name="message"
          value={state.message}
          onChange={(e) => onChange(e)}
          ></textarea>
        <br />
        {
          (() => {
            switch (formState) {
              case "loading":
                return <div
                  className='bg-primary-700 text-white p-3 rounded transition-colors'
                >ENVIANDO...</div>
                break;
              case "done":
                return <div
                  className='bg-primary-300  text-white p-3 rounded transition-colors text-xs max-w-48'
                >Datos enviados correctamente. Te llegará un correo de confirmación. En caso de no recibirlo, te invitamos a contactarnos directamente por Whatsapp usando el botón aquí debajo ⬇️. </div>

              case "error":
                return <div
                  className='bg-primary-300  text-white p-3 rounded transition-colors text-xs max-w-48'
                >Ha ocurrido un error enviando tus datos, te sugerimos contactarnos directamente por Whatsapp usando el botón aquí debajo ⬇️ .</div>

              default:
                return <button
                  className='bg-primary-300 hover:bg-primary-700 text-white p-3 rounded transition-colors'
                  type='submit'
                  onClick={submitHandler}>
                  Enviar
                </button>
            }
          })()
        }
        </form>
      <div className='flex flex-row justify-around text-primary-700 my-2' >
        <Link href="https://www.instagram.com/mw.visas/"><FaInstagram className='cursor-pointer' size={40}></FaInstagram></Link>
        <Link href={whatsappLink}><FaWhatsapp className='cursor-pointer' size={40} /></Link>
        <Link href="https://www.facebook.com/visasmwsas?locale=es_LA"><AiOutlineFacebook className='cursor-pointer' size={40}></AiOutlineFacebook></Link>

      </div>

      <Link href="https://maps.app.goo.gl/AHT72SDgqejdBf6n6"  className=' flex items-center px-7 py-3 cursor-pointer text-center text-lg gap-2 text-primary-900 md:text-sm md:px-2'>
      <span>
        Calle 100 # 19 - 61 oficina 502
        </span>
        <FaLocationArrow className="text-3xl"/>
      </Link>
    </div>

  );
};
const inputStyles = 'border-solid border-b-2 border-b-primary-300 focus-visible:outline-none focus-visible:border-b-3 resize-none focus-visible:border-b-primary-700'
export default ContactUs;
