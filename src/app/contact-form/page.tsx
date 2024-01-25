'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation"
import { FormProvider, useForm } from "react-hook-form"
import * as yup from 'yup';
import TextInput from "./(components)/TextInput";
import ProcedureInput from "./(components)/ProcedureInput";
import TextAreaInput from "./(components)/TextAreaInput";
import Image from "next/image";
import { confirmationEmailToClient, newClient } from "./_actions";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import LinkButton from "@/components/buttons/LinkButton";
import { FaWhatsapp } from "react-icons/fa";
import useEncodeWppURI from "@/utils/useEncodeWppURI";

export type ProcedureType = "us-visa" | "ca-visa" | "pasaporte" | "renovación" | ""
type acVisaType = "trabajo" | "estudio" | "turismo" | "transito"
type usVisaType = "trabajo" | "estudio" | "turismo" | "transito" | "emergencia" | "tripulante"

function getClientData() {

  const formValues: { [key: string]: string } = {}
  const useParams = useSearchParams()
  const entries = useParams.forEach((value, key) => formValues[key] = value)
  
  return formValues as {
    procType: ProcedureType,
    proc: acVisaType | usVisaType
  }
}

export type ClientData = {
  name: string,
  email: string,
  phone: number,
  procedure: {
    type: string,
    proc?: string
  },
  details?: string
}

const schema: yup.ObjectSchema<ClientData> = yup.object(
  {
    name: yup.string().required("Dinos tu nombre para conocerte"),
    email: yup.string().email("Procura darnos un Email valido").required("Añade un Email donde podamos contactarte"),
    phone: yup.number().typeError("Solo valores numéricos").required("Deja un numero a donde podamos contactarte"),
    procedure: yup.object().shape({ type: yup.string().required(), proc: yup.string() }),
    details: yup.string(),
  }
)

const contactForm = () => {
  const { proc, procType } = getClientData()
  const [formState, setFormState] = useState<"loading" | "sent" | "">("")

  const defaultForm = {
    name: "",
    email: "",
    procedure: {
      type: procType || "",
      proc: proc || ""
    },
    details: ""
  }

  const methods = useForm<ClientData>({
    defaultValues: defaultForm,
    resolver: yupResolver(schema)
  })

  const { register, formState: { errors }, trigger, control, getValues } = methods

  let message = `Hola, soy ${getValues("name")}
Estoy interesad@ en sus servicios. 
  ${getValues("details")}
  Mis datos de contacto son: 
  *Teléfono:* ${getValues("phone")}
  *Correo:* ${getValues("email")}  
  `

  const handleSendForm = async () => {

    const valid = trigger()
    if (!valid) {
      return;
    }
    setFormState("loading")
    const form = getValues()
    const result = await newClient(form)

    if (result) {
      setFormState("sent")
      return result
    }
  }

  return (

    <div className="flex flex-col w-full items-center bg-primary-700 min-h-screen text-white gap-9 p-3">
      {
        (() => {
          switch (formState) {
            case "loading":
              return <div className="flex flex-col items-center h-screen justify-center">
                <RotatingLines visible={true} strokeColor="#f4f7fb" width="150" />
                <h1 className="text-2xl font-semibold">Enviando Formulario...</h1>
              </div>
            case "sent":
              return <div className="text-2xl md:text-4xl flex flex-col items-center text-center justify-center">
                <br />
                <b>Formulario enviado correctamente</b>
                <br />
                <p>Recibirás un mensaje al correo electrónico que nos dejaste en el formulario.</p>
                <br />
                <p className="text-xl md:text-3xl">En caso de no recibirlo te invitamos a contactarnos directamente a nuestro whatsapp: </p>
                <br />
                <br />
                <div className="flex flex-row gap-3 items-center">
                  <LinkButton href={useEncodeWppURI(573182961436, message)} className="bg-primary-800 hover:bg-primary-700 transition ease-out"><FaWhatsapp className="text-5xl" /></LinkButton>
                  <LinkButton href="/" className="bg-primary-900 hover:bg-primary-800 transition ease-out">Ir a pagina principal</LinkButton>
                </div>
              </div>

            case "":
              return <>
                <Image
                  className='rounded-full shadow-full shadow-primary-960 w-20 md:w-44'
                  src='/mw-visasLogo.webp' width={1000} height={1000} alt='mw-visas logo' />
                <div className="md:w-2/3">
                  <form action="" className="grid gap-9 md:grid-cols-2 justify-center">
                    <div className="grid gap-5">
                      <TextInput {...register("name")} error={errors.name ? true : false} helperText={errors.name?.message} label="Nombre" />
                      <TextInput {...register("email")} error={errors.email ? true : false} helperText={errors.email?.message} label="Email" />
                      <TextInput {...register("phone")} error={errors.phone ? true : false} helperText={errors.phone?.message} label="Teléfono" type="number" />
                    </div>
                    <div className="grid gap-5">
                      <FormProvider {...methods}>
                        <ProcedureInput />
                        <TextAreaInput />
                      </FormProvider>
                    </div>
                  </form>
                </div>
                <button type="button" onClick={handleSendForm}
                  className="bg-primary-500 p-3 rounded-md hover:bg-primary-900 transition ease-out font-semibold font-sans">
                  ENVIAR</button>
              </>
            default:
              break;
          }
        })()
      }
    </div>
  )
}


export default contactForm