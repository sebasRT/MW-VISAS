import React, { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de MW-Visas',
  description: 'Somos expertos en los tramites migratorios mas demandados de Colombia, desde el tramite de tu pasaporte hasta postulaciones laborales en Estados unidos y Canada. Te invitamos a ver nuestro portafolio de servicios.'
}

const layout = ({children, modal}:{children: ReactNode, modal: ReactNode}) => {
  return (
    <main>
    {modal}
    {children}
    </main>
  )
}

export default layout