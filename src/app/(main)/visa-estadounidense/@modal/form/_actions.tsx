'use server'
import { Resend } from "resend";
import { JobApplicationForm } from "./page";
import NewJobApplicantTemplate from "@/components/emailTemplates/NewJobApplicant"; 
import JobAppConfirmationTemplate from "@/components/emailTemplates/JobAppConfirmation"; 

const resend = new Resend(process.env.RESEND_API_KEY);

  
export async function newJobApplication(data: JobApplicationForm ){
    try {
        const {name, phone, email, country} = data

        const result = await resend.emails.send({
            from: 'Clientes <info@mwvisas.co>',
            to: ['info@mwvisas.co'],
            subject: 'Postulación de trabajo',
            react: NewJobApplicantTemplate({ clientName: name, email, phone, country }) as React.ReactElement,
          })
        result.data?.id && await confirmationEmailToClient(data)
        return result
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function confirmationEmailToClient (data: JobApplicationForm) {

    try {
      const {name, email} = data
      const result = await resend.emails.send({
        from: 'MW-VISAS S.A.S <info@mwvisas.co>',
        to: [email],
        subject: 'Datos recibidos',
        react: JobAppConfirmationTemplate({ clientName: name}) as React.ReactElement,
      });
  
      return {result};
    } catch (error) {
      return {error};
    }
  
  }