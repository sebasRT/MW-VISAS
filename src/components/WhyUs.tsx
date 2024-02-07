import { BsFillPersonCheckFill } from "react-icons/bs";
import { LuSearchCheck, LuSearch } from "react-icons/lu";
import { GiColombia } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight, MdCheckCircle } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaHandsHelping } from "react-icons/fa";
import Image from 'next/image'
import { ReactNode } from "react";


const WhyUs = () => {
  return (
<article className='bg-primary-600 text-center p-3 flex flex-col items-center justify-center w-full text-primary-50 '>
        <h2 className='text-3xl font-semibold text-center'>¿Por qué hacer tu proceso con nosotros?</h2>
        <figure className=' w-1/6 md:w-1/12'>
          <Image src="/mw-visasLogo.webp" alt='MWW-VISAS logo' width={1000} height={1000} />
        </figure>
        <section className='grid gap-4 grid-cols-2 md:grid-cols-3 m-4 text-sm md:text-base text-center'>
          <Feature description='Proceso totalmente personalizado'>
            <BsFillPersonCheckFill/></Feature>
          <Feature description='Análisis de viabilidad antes de iniciar solicitud' >
            <LuSearchCheck /></Feature>
          <Feature description='Consulta desde cualquier lugar del país' >
            <div className="relative ">
              <GiColombia /><LuSearch className="text-xl text-primary-500 absolute top-[50%] right-7" />
            </div></Feature>
          <Feature description='Orientación de principio a fin en tu solicitud' >
            <div className="flex flex-row text-2xl md:text-4xl">
              <MdKeyboardDoubleArrowRight /><MdCheckCircle /><MdKeyboardDoubleArrowRight /><MdCheckCircle />
            </div></Feature>
          <Feature description='Capacitación para entrevista consular' >
            <LiaChalkboardTeacherSolid/></Feature>
          <Feature description='Transparencia y eficacia en cada proceso' >
            <FaHandsHelping/></Feature>
        </section>
      </article>  )
}

const Feature = ({ description, children }: { description: string, children: ReactNode }) => {
    return (
      <div className='flex flex-col items-center text-7xl bg-primary-500 justify-around hover:bg-primary-600 hover:scale-105 transition ease-in rounded-sm'>
        {children}
        <span className="text-sm md:text-base">{description}</span>
      </div>
    )
  
  }
  

export default WhyUs