'use server'
import { Resend } from "resend";
import { ClientData } from "./page";
import { NewClientTemplate } from "@/components/emailTemplates/NewClientTemplate";
import { ConfirmationToClientTemplate } from "@/components/emailTemplates/ConfirmationToClientTemplate"; 


const resend = new Resend(process.env.RESEND_API_KEY);

export async function newClient(data: ClientData) {
    
    
    try {
        const {name, email, phone, procedure, details} = data
        const result = await resend.emails.send({
          from: 'Clientes <alemwvisas@gmail.com>',
          to: ['info@mwvisas.co'],
          subject: 'Nuevo cliente interesado en tus servicios',
          react: NewClientTemplate({ clientName: name, email, phone, procedure, details }) as React.ReactElement,
        });

        result.data?.id && confirmationEmailToClient(data)
        return {result};
      } catch (error: any) {
        throw new Error(error.message)
      }
  
}

export async function confirmationEmailToClient (data: ClientData) {

  try {
    const {name, email, phone, procedure, details} = data
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