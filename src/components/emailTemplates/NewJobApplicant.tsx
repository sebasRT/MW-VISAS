import React from 'react'

interface EmailTemplateProps {
  clientName: string,
  phone: number,
  email: string,
  country?: string
}

export const NewJobApplicantTemplate = ({ clientName, phone, email, country }: EmailTemplateProps) => {

  return (
    <div>
      <h3>Persona interesada en postulaciones de trabajo {country && `a ${country}`}</h3>
      <br />
      <b>Datos del cliente:</b>
      <br />
      {country && <p><b>País:</b> {clientName}</p>
      }
      <p><b>Nombre:</b> {clientName}</p>
      <p><b>Correo:</b> {email}</p>
      <p><b>Teléfono: </b>{phone}</p>
    </div>
  )
}

export default NewJobApplicantTemplate