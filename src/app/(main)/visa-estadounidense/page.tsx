import LinkButton from '@/components/buttons/LinkButton'
import GetVisaBanner from '@/components/services/GetVisaBanner'
import JobApplicationBannerUS from '@/components/services/JobApplicationBannerUS'
import Slide from '@/components/services/Slide'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Tramita tu visa estadounidense',
    description: 'Nuestros expertos migratorios te brindaran asesoría y acompañamiento de principio a fin en el tramite de tu visa Estadounidense.'
  }
  
const americanVisaPage = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center text-primary-700'>
            <h1 className='text-center text-2xl md:text-3xl font-semibold'>VISA ESTADOUNIDENSE</h1>

            <section className='w-full my-16 self-center flex flex-col items-center'>
                <h3 className='text-2xl mb-3'>¿Qué tipo de visa buscas?</h3>
                <div className='grid grid-cols-2 w-3/4'>
                    <LinkButton href='#visa-estadounidense-turismo' className={linkToSectionStyles}>TURISMO</LinkButton>
                    <LinkButton href='#visa-estadounidense-trabajo' className={linkToSectionStyles}>TRABAJO</LinkButton>
                    <LinkButton href='#visa-estadounidense-estudio' className={linkToSectionStyles}>ESTUDIO</LinkButton>
                    <LinkButton href='#visa-estadounidense-transito' className={linkToSectionStyles}>TRANSITO</LinkButton>
                    <LinkButton href='#visa-estadounidense-emergencia' className={`text-xs md:text-base ${linkToSectionStyles}`}>CITA DE EMERGENCIA</LinkButton>
                    <LinkButton href='#visa-estadounidense-tripulante' className={linkToSectionStyles}>TRIPULANTE</LinkButton>
                </div>
                <LinkButton href='/contact-form?procType=renovación' className={`p-3 px-12 text-lg ${linkToSectionStyles}`}>RENOVACIÓN</LinkButton>
            </section>
           <JobApplicationBannerUS/>
            <p className='p-3 text-primary font-semibold text-xl text-center'>
                Mediante nuestra amplia experiencia prestando servicios de migración nos aseguraremos de que todo
                nuestro equipo de trabajo te brinde la mejor asesoría y acompañamiento para que cada sueño que coloques
                en nuestras manos tenga como resultado un éxito total.</p>
            <br />
            <Slide />
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-estadounidense-turismo' className='w-full p-3 flex flex-col md:flex-row justify-around items-center scroll-mt-36 bg-primary-200'>
                <div className='w-fit'>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>TURISMO</b>
                    <p className='w-3/4 rounded-l-full text-primary-950 '>
                        La visa de visitante, conocida como una visa de turista, es un tipo de visa de no inmigrante para las personas
                        que desean entrar temporalmente a estados unidos las categorías son: </p>
                </div>
                <section className='text-center'>
                    <h3>Escoge la que buscas</h3>
                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-col items-center'>
                            <LinkButton href='/contact-form?procType=us-visa&proc=turismo' className='text-white w-fit h-fit m-3 text-xs hover:scale-105 transition ease-in-out'>
                                VISA B1
                            </LinkButton>
                            <p className='text-xs text-center'> Asuntos de negocios y para asistir a conferencias</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <LinkButton href='/contact-form?procType=us-visa&proc=turismo' className='text-white w-fit h-fit m-3 text-xs hover:scale-105 transition ease-in-out'>
                                VISA B2
                            </LinkButton>
                            <p className='text-xs text-center'> Turismo, visitar familiares y obtener tratamientos médicos </p>
                        </div>
                    </div>
                </section>

            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-estadounidense-trabajo' className='w-full p-3 flex flex-col gap-3 justify-end items-end text-right scroll-mt-36'>
                <div>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>TRABAJO</b>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-end justify-between'>
                    <p className='w-3/4 rounded-l-full text-primary-950'>
                        Si cuenta con con la educación o destrezas necesarias, podría calificar para pedir una visa de trabajador legalmente y
                        podrá vivir con su familia en estados unidos. Existen 5 categorías de visa de trabajo destinadas a trabajadores y los
                        requisitos para calificar varían de acuerdo con el tipo de visa. Cada categoría esta destinada a diferentes profesiones o
                        habilidades, comunícate y uno de nuestros profesionales te ayudara para que estés en la mejor categoría.
                    </p>
                    <div className='bottom'>
                        <LinkButton href='/contact-form?procType=us-visa&proc=trabajo' className='text-white animate-bounce w-fit m-3 h-'>PEDIR ASESORÍA</LinkButton>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-estadounidense-estudio' className='w-full p-3 flex flex-col gap-3 scroll-mt-36 bg-primary-200'>
                <div>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>ESTUDIO</b>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='w-3/4 rounded-l-full text-primary-950'>
                        Es una visa de no inmigrante, para personas autorizadas en estudiar y para participar en programas de intercambio de visitantes
                        en estados unidos. El tiempo de duración de esta visa va a depender de la duración y la excelencia que tengas como resultado en
                        habilidades y compromiso sobre tu carrera profesional.
                    </p>
                    <div className='text-center mt-3'>
                        <h3>Escoge la que buscas</h3>
                        <div className='flex gap-5 text-center '>

                            <div className='flex flex-col items-center'>
                                <LinkButton href='/contact-form?procType=us-visa&proc=estudio' className='text-white text-xs w-fit m-3 hover:scale-105 transition ease-in-out'>VISA F-1</LinkButton>
                                <p className='text-xs'>Es para estudiantes internacionales de tiempo completo que cursan estudios académicos universitarios</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <LinkButton href='/contact-form?procType=us-visa&proc=estudio' className='text-white text-xs w-fit m-3 hover:scale-105 transition ease-in-out'>VISA M-1</LinkButton>
                                <p className='text-xs'>Es para estudiantes internacionales a tiempo completo que cursan estudios de formación vocacional</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full ' />
            <br />
            <article id='visa-estadounidense-transito' className='w-full p-3 flex flex-col gap-3 justify-end items-end text-right scroll-mt-36'>
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
                        <LinkButton href='/contact-form?procType=us-visa&proc=transito' className='text-white w-fit m-3 hover:scale-105 transition ease-in-out'>SOLICITAR</LinkButton>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-estadounidense-emergencia' className='w-full p-3 flex flex-col gap-3 scroll-mt-36 bg-primary-200'>
                <div>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>CITA DE EMERGENCIA</b>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='w-3/4 rounded-l-full text-primary-950'>
                        Las citas de emergencia serán concedidas solamente a discreción de la sección consular.
                        Según la información de solicitud se debe de sustentar la solicitud con una explicación detallada
                        de la situación de emergencia que se relacione con la lista de circunstancias tales como lo serian:
                    </p>
                    <br />
                    <ul className='text-sm list-disc pl-3'>
                        <li>Prueba que sustente la declaración de emergencia</li>
                        <li>La muerte de un pariente inmediato</li>
                        <li>Tratamiento medico de emergencia</li>
                        <li>Un solicitante de una visa de estudiante</li>
                        <li>Una necesidad inesperada de viajar a Estados Unidos</li>
                    </ul>
                    <br />
                    <div className='bottom'>
                        <LinkButton href='/contact-form?procType=us-visa&proc=emergencia' className='text-white w-fit m-3 hover:scale-105 transition ease-in-out'>PEDIR ASESORÍA</LinkButton>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
            <article id='visa-estadounidense-tripulante' className='w-full p-3 flex flex-col gap-3 justify-end items-end text-right scroll-mt-36'>
                <div>
                    <p className='text-sm'>Visa</p>
                    <b className='text-lg'>TRIPULANTE</b>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-end justify-between'>
                    <p className='w-3/4 rounded-l-full text-primary-950'>
                        Visa C1/D es necesaria para miembros de tripulación comercial o tripulantes de vuelos, también conocida como visa para crew members.
                        Comunícate con un experto en migración y obtén asesoría
                    </p>
                    <div className='bottom'>
                        <LinkButton href='/contact-form?procType=us-visa&proc=tripulante' className='text-white w-fit m-3 hover:scale-105 transition ease-in-out'>SOLICITAR</LinkButton>
                    </div>
                </div>
            </article>
            <br />
            <hr className='border-solid border-primary-700 border-2 w-full' />
            <br />
        </div>
    )
}


const linkToSectionStyles = 'text-white text-center hover:scale-105 transition ease-in-out delay-100 border-white border-2 rounded-md h-full'
export default americanVisaPage