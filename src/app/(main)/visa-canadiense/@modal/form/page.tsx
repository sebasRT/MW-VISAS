'use client'
import TextInput from '@/app/contact-form/(components)/TextInput'
import Modal from '@/components/Modal'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { RotatingLines } from 'react-loader-spinner'
import { useRouter } from 'next/navigation'
import LinkButton from '@/components/buttons/LinkButton'
import { FaWhatsapp } from 'react-icons/fa'
import useEncodeWppURI from '@/utils/useEncodeWppURI'
import { newJobApplication } from './_actions'


export type JobApplicationForm = {
  name: string;
  phone: number;
  email: string;
  country?: string; 
}

const schema: yup.ObjectSchema<JobApplicationForm> = yup.object({
  name: yup.string().required("Dinos tu nombre para conocerte"),
  phone: yup.number().typeError("Agrega un teléfono de contacto").required("Agrega un teléfono de contacto"),
  email: yup.string().email("Agrega un correo valido").required("Deja un correo donde podamos contactarte"),
  country: yup.string()
})

const JobApplicationFormModal = () => {

  const router = useRouter()

  const methods = useForm<JobApplicationForm>({defaultValues: {country: "Estados Unidos"}, resolver: yupResolver(schema), reValidateMode: "onChange" })

  const [formState, setFormState] = useState<"loading" | "done" | "error" | "">("")

  const { register, formState: { errors }, getValues, trigger } = methods

  const handleSendForm = async () => {
    

    const valid = await trigger()
    const form = getValues()

    
    if(valid){
      setFormState("loading")
      const result = await newJobApplication(form)
      result?.data?.id ? setFormState("done") : setFormState("error")
    }
  }

  return (
    <Modal>
      <div className='bg-primary-700 p-3  text-primary-50 items-center text-center flex flex-col gap-5 rounded-md'>
        {
          (() => {
            switch (formState) {
              case "loading":
                return <>
                  <RotatingLines visible={true} strokeColor="#f4f7fb" width="150" />
                </>

              case "done":
                return <>
                  <h2 className='text-2xl font-semibold'>Datos enviados con éxito</h2>
                  <h2 className='text-xl'>Te llegará un correo confirmando que hemos recibido tu información correctamente.</h2>
                  <button type="button" onClick={() => router.back()}
                    className="bg-primary-500 p-3 w-fit rounded-md hover:bg-primary-900 transition ease-out font-semibold font-sans">
                    OK</button>
                </>

              case "error":
                return <>
                  <h2 className='text-2xl font-semibold'>No hemos podido recibir tus datos</h2>
                  <p className='text-xl'>Lamentamos las molestias, para continuar con tu tramite te invitamos a contactarnos directamente en Whatsapp</p>
                
                  <LinkButton href={useEncodeWppURI(573182961436, "")} className="bg-primary-600 hover:bg-primary-800 transition ease-out rounded-3xl flex items-center">
                    <FaWhatsapp className="text-5xl" />
                    <p>CONTACTAR</p>
                    </LinkButton>
                  <button type="button" onClick={() => router.back()}
                    className="bg-primary-500 p-3 w-fit rounded-md hover:bg-primary-900 transition ease-out font-semibold font-sans">
                    SALIR</button>
                     
                </>

              default:
                return <>
                  <h2 className='font-semibold text-lg'>Déjanos tus datos para contactarte</h2>
                  <form action="" onChange={async()=>await trigger()}>
                    <TextInput error={errors.name ? true : false} helperText={errors.name?.message} label="Nombre" {...register("name")} />
                    <TextInput error={errors.phone ? true : false} helperText={errors.phone?.message} label="Teléfono" {...register("phone")} type='number' />
                    <TextInput error={errors.email ? true : false} helperText={errors.email?.message} label="Email" {...register("email")} />
                  </form>
                  <button type="button" onClick={handleSendForm}
                    className="bg-primary-500 p-3 rounded-md hover:bg-primary-900 transition ease-out font-semibold font-sans">
                    ENVIAR</button>
                </>

                break;
            }
          })()
        }
      </div>
    </Modal>
  )
}

export default JobApplicationFormModal