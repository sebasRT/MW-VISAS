import React, { ReactNode } from 'react'
import { BsFillPersonCheckFill } from "react-icons/bs";
import { LuSearchCheck, LuSearch } from "react-icons/lu";
import { GiColombia } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight, MdCheckCircle } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaHandsHelping } from "react-icons/fa";


import '@/styles/slides.css'

const Slide = () => {
  return (
    <div className="sliderFrame">
    <div className="slideItems text-5xl ">
        <Feature description='Proceso totalmente personalizado'> <BsFillPersonCheckFill/></Feature>
        <Feature description='Análisis de viabilidad antes de iniciar solicitud' ><LuSearchCheck /></Feature>
        <Feature description='Consulta desde cualquier lugar del país' >            <div className="relative ">
              <GiColombia /><LuSearch className="text-xl text-primary-400 absolute top-[50%] right-6" />
            </div></Feature>
        <Feature description='Orientación de principio a fin en tu solicitud' >
        <div className="flex flex-row text-4xl">
              <MdKeyboardDoubleArrowRight /><MdCheckCircle /><MdKeyboardDoubleArrowRight /><MdCheckCircle />
            </div></Feature>
        <Feature description='Transparencia y eficacia en cada proceso' ><FaHandsHelping/></Feature>
        <Feature description='Capacitación para entrevista consular' ><LiaChalkboardTeacherSolid/></Feature>
    </div>
</div>
)
}

const Feature = ({ description, children }: { description: string, children: ReactNode }) => {
    return (
        <div className='itemContainer text-primary-600'>
           {children}
            <p className='font-semibold text-2xl text-primary-950 '>{description}</p>
        </div>
    )

}

export default Slide