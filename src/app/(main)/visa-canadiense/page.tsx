import LinkButton from '@/components/buttons/LinkButton'
import JobApplicationBannerCA from '@/components/services/JobApplicationBannerCA'
import Slide from '@/components/services/Slide'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Tramita tu visa Canadiense',
    description: 'Nuestros expertos migratorios te brindaran asesoría y acompañamiento de principio a fin en el proceso de tu visa Canadiense.'
  }
  
const canadianVisasPage = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center text-primary-700'>
            <h1 className='text-center text-2xl md:text-3xl font-semibold'>VISA CANADIENSE</h1>
            <section className='w-full my-16 self-center flex flex-col items-center'>
                <h3 className='text-2xl mb-3'>¿Qué tipo de visa buscas?</h3>
                <div className='grid grid-cols-2 w-3/4'>
                    <LinkButton href='#visa-canadiense-turismo' className={linkToSectionStyles}>TURISMO</LinkButton>
                    <LinkButton href='#visa-canadiense-trabajo' className={linkToSectionStyles}>TRABAJO</LinkButton>
                    <LinkButton href='#visa-canadiense-estudio' className={linkToSectionStyles}>ESTUDIO</LinkButton>
                    <LinkButton href='#visa-canadiense-transito' className={linkToSectionStyles}>TRANSITO</LinkButton>
                </div>
                <LinkButton href='/contact-form?procType=renovación&proc=canadiense' className={`p-3 px-12 text-lg ${linkToSectionStyles}`}>RENOVACIÓN</LinkButton>
            </section>
            <JobApplicationBannerCA/>
            <p className='p-3 text-primary font-semibold text-xl text-center'>
                Mediante nuestra amplia experiencia prestando servicios de migración nos aseguraremos de que todo
                nuestro equipo de trabajo te brinde la mejor asesoría y acompañamiento para que cada sueño que coloques
                en nuestras manos tenga como resultado un éxito total.</p>
            <br />
            <Slide />
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-canadiense-turismo' className='w-full p-3 flex flex-col gap-3 scroll-mt-36 bg-primary-200'>
                <div>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>TURISMO</b>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <p className='w-3/4 rounded-l-full text-primary-950 '>
                        Si es usted un ciudadano colombiano   y desea visitar Canadá por menos de 6 meses en calidad de turismo, estudios cortos,
                        negocios o visitar a familiares y/o amigos, necesita una visa de residente temporal y podrás tener ingresos ilimitados durante el tiempo vigencia de la  visa otorgada                </p>
                    <div className='flex flex-row md:flex-col'>
                        <LinkButton href='/contact-form?procType=ca-visa&proc=turismo' className='text-white w-fit h-fit m-3 text-xs'>SOLICITUD POR PRIMERA VEZ</LinkButton>
                        <LinkButton href='/contact-form?procType=renovación&proc=canadiense' className='text-white w-fit h-fit m-3 text-sm'>RENOVACIÓN</LinkButton>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-canadiense-trabajo' className='w-full p-3 flex flex-col gap-3 justify-end items-end text-right scroll-mt-36'>
                <div>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>TRABAJO</b>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-end justify-between'>
                    <p className='w-3/4 rounded-l-full text-primary-950'>
                        El gobierno canadiense ofrece a los ciudadanos extranjeros distintas alternativas para obtener una visa de trabajo la cual es la de mayor demanda ya que aparte de poder trabajar libremente podrá estudiar y bajo el TLC entre canada y Colombia permite a los empleadores canadienses contratar a ciertos profesionales y técnicos que sean ciudadanos colombianos para trabajar  temporalmente sin necesidad de LMIA.
                        Si quieres saber mas información comunícate y nosotros te asesoramos de la manera mas efectiva.
                    </p>
                    <div className='bottom'>
                        <LinkButton href='/contact-form?procType=ca-visa&proc=trabajo' className='text-white animate-bounce w-fit m-3 h-'>CONTÁCTENOS</LinkButton>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-canadiense-estudio' className='w-full p-3 flex flex-col gap-3 scroll-mt-36 bg-primary-200'>
                <div>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>ESTUDIO</b>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className='w-3/4 rounded-l-full text-primary-950'>
                        ¿Estas planeando un proyecto? el visado de estudiante es beneficioso si quieres quedarte en Canadá mas de 6 meses,
                        ya que además te permite combinarlo con trabajo, en caso de que realices estudios de diploma o superiores. Puedes trabajar
                        tiempo parcial y hay programas como (los diplomas CO-OP, Work Permit, Post Graduation Work permit)
                        Comunícate y te ayudamos a tomar la mejor decisión
                    </p>
                    <div className='bottom'>
                        <LinkButton href='/contact-form?procType=ca-visa&proc=estudio' className='text-white w-fit m-3 h-'>CONTÁCTENOS</LinkButton>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-canadiense-transito' className='w-full p-3 flex flex-col gap-3 justify-end items-end text-right scroll-mt-36'>
                <div>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>TRANSITO</b>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-end justify-between'>
                    <p className='w-3/4 rounded-l-full text-primary-950'>
                        Si usted va desea viajar a Canada de transito por una duración de 48 horas o menos, en camino hacia un tercer país,
                        necesita una visa de transito y debe de tener la visa o permiso del país de destino final el itinerario y /o copias de las reservas aéreas
                    </p>
                    <div className='bottom'>
                        <LinkButton href='/contact-form?procType=ca-visa&proc=transito' className='text-white w-fit m-3 h-'>CONTÁCTENOS</LinkButton>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
        </div>
    )
}

const linkToSectionStyles = 'text-white text-center hover:scale-105 transition ease-in-out delay-100 border-white border-2 rounded-md'
export default canadianVisasPage