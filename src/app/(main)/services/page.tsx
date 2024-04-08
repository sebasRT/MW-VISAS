import React, { ReactNode } from 'react'
import usIcon from "@/components/icons/us-icon.svg"
import caIcon from "@/components/icons/ca-icon.svg"
import passportIcon from "@/components/icons/passport-icon.svg"
import searchFileIcon from "@/components/icons/search-file-icon.svg"
import familyIcon from "@/components/icons/family-icon.svg"
import touristVisaConsultIcon from "@/components/icons/tourist-visa-consult-icon.svg"
import studentsIcon from "@/components/icons/students-icon.svg"
import businessIcon from  "@/components/icons/business-icon.svg"
import Image from 'next/image';
import Link from 'next/link'
import WhyUs from '@/components/WhyUs'


const servicesPage = () => {
  return (
    <div className='w-full min-h-screen text-center flex flex-col gap-5 p-3 bg-primary-200'>
      <h1 className='text-primary-700 text-4xl font-semibold'>Todos nuestros servicios</h1>
      <p className='text-primary-950 font-medium text-lg'>Mediante nuestra <b>amplia experiencia</b> prestando servicios de migración nos aseguraremos de que todo nuestro 
        equipo de trabajo te brinde la mejor <b>asesoría</b> y <b>acompañamiento</b> para que cada sueño que coloques en nuestras manos tenga como resultado un <b>éxito total</b>.</p>
      <article className='grid gap-5 md:grid-cols-2'>
        <Service value='pasaporte' title='Pasaporte'><Image src={passportIcon} alt="united states flag" width={80} /></Service>
        <VisaService visa='visa-estadounidense' title='Visa estadounidense'><Image src={usIcon} alt="United States flag" width={80} /></VisaService>
        <VisaService visa='visa-canadiense' title='Visa canadiense'><Image src={caIcon} alt="Canada flag" width={80} /></VisaService>
        <Service value='visaNegada' title='Análisis de casos visas negadas'><Image src={searchFileIcon} alt="Canada flag" width={80} /></Service>
        <Service value='visaFamiliar' title='Visa turismo grupal/familiar'><Image src={familyIcon} alt="Canada flag" width={80} /></Service>
        <Service value='asesoríaTurismo' title='Asesoría para primer visa turismo'><Image src={touristVisaConsultIcon} alt="Canada flag" width={80} /></Service>
        <Service value='asesoríaEstudio' title='Asesoría para primer visa estudiantil'><Image src={studentsIcon} alt="Canada flag" width={80} /></Service>
        <Service value='postulaciónLaboral' title='Postulación laboral Estados unidos o Canadá'><Image src={businessIcon} alt="Canada flag" width={80} /></Service>
      </article>
      <WhyUs/>
    </div>
  )
}

type ServiceType = "pasaporte" | "visaNegada" | "visaFamiliar" | "asesoríaTurismo" | "asesoríaEstudio" | "postulaciónLaboral"

const Service = ({children, title, value}:{children:ReactNode, title: string, value: ServiceType}) => {
  return (
    <section className='bg-primary-50 rounded-md border-transparent border-2 hover:border-primary-400 transition ease-out flex flex-col items-center gap-2 text-primary-900'> 
    <b>{title}</b>
    {children}
    <Link className='italic text-xs underline cursor-pointer' href={`/services/form?service=${value}`}>Saber más</Link>
    </section>
    ) 
}

const VisaService = ({children, title, visa}:{children:ReactNode, title: string, visa: "visa-canadiense" | "visa-estadounidense"}) => {
  return (
    <section className='bg-primary-50 rounded-md border-transparent border-2 hover:border-primary-400 transition ease-out flex flex-col items-center gap-2 text-primary-900'> 
    <b>{title}</b>
    {children}
    <Link className='italic text-xs underline cursor-pointer' href={`/${visa}`}>Solicitar</Link>
    </section>
    )
  
}

export default servicesPage