'use server'
import { Resend } from "resend";
import {  ServicePetitionForm } from "./page";
import NewServicePetitionTemplate from "@/components/emailTemplates/NewServicePetitionTemplate";
import { ConfirmationToClientTemplate } from "@/components/emailTemplates/ConfirmationToClientTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);


  export async function newServicePetition (data: ServicePetitionForm) {

    try {
        const {name, phone, email, service} = data

        const result = await resend.emails.send({
            from: 'Clientes <jesnero11@gmail.com>',
            to: ['Nueva petición'],
            subject: 'Cliente interesado en tus servicios',
            react: NewServicePetitionTemplate({ clientName: name, email, phone, service }) as React.ReactElement,
          })
        result.data?.id && await emailConfirmationToClient(data)
        return result
    } catch (error: any) {
        throw new Error(error.message)
    }

}

export async function emailConfirmationToClient (data: ServicePetitionForm){

    try {
        const {name, email } = data
        const result = await resend.emails.send({
          from: 'MW-VISAS S.A.S <info@mwvisas.co>',
          to: [email],
          subject: 'Datos recibidos',
          react: ConfirmationToClientTemplate({ clientName: name}) as React.ReactElement,
        });
    
        return {result};
      } catch (error:any) {
        throw new Error(error.message)
      }
}