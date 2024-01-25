import React from 'react'

interface EmailTemplateProps {
    clientName: string;
    service?: string;
    email: string;
    phone: number;
}

const NewServicePetitionTemplate = ({clientName, service, email, phone }: EmailTemplateProps) => {
    return (
        <div>
            <h3>Nuevo cliente interesado en tus servicios.</h3>
            <h4>{service}</h4>
            <br />
            <b>Datos del cliente:</b>
            <br />
            <p><b>Nombre:</b> {clientName}</p>
            <p><b>Correo:</b> {email}</p>
            <p><b>Teléfono: </b>{phone}</p>

        </div>
    )
}

export default NewServicePetitionTemplate