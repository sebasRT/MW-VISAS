'use server'
import { Resend } from 'resend';
import { ConfirmationToClientTemplate } from '../emailTemplates/ConfirmationToClientTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

interface Form {
    name: string;
    email: string;
    subject: string;
    message: string;
    phone: string;
}

export async function sendNewClientEmail(data: Form) {

    try {
        const result = await resend.emails.send({
            from: 'Clientes <info@mwvisas.co>',
            to: ['info@mwvisas.co'],
            subject: 'Un usuario te ha enviado un correo',
            react: NewEmailFromClientTemplate({ data }) as React.ReactElement,
        })
       if(result.data?.id ) {
           const confirmation = await emailConfirmationToClient(data)
           return confirmation.result
       }
       return result
    } catch (error: any) {
        throw new Error(error.message)
    }

}
export async function emailConfirmationToClient(data: Form) {

    try {
        const { name, email } = data
        const result = await resend.emails.send({
            from: 'MW-VISAS S.A.S <info@mwvisas.co>',
            to: [email],
            subject: 'Datos recibidos',
            react: ConfirmationToClientTemplate({ clientName: name }) as React.ReactElement,
        });

        return { result };
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const NewEmailFromClientTemplate = ({ data }: { data: Form }) => {
    const { email, message, name, phone, subject } = data
    return (
        <div>
            <h3>Un usuario te ha enviado un correo: </h3>

            <p><b>De: </b>{name}</p>
            <p><b>Asunto: </b>{subject}</p>
            <p><b>Mensaje: </b>{message}</p>
            <br />
            <b>Datos de contacto:</b>
            <p><b>Email: </b>{email}</p>
            <p><b>Teléfono: </b>{phone}</p>
        </div>
    )
}

