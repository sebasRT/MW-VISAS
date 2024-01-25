'use client'
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import LinkButton from "../buttons/LinkButton"
import { useRef, useState } from "react"
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

import usIcon from "@/components/icons/us-icon.svg"
import caIcon from "@/components/icons/ca-icon.svg"
import passportIcon from "@/components/icons/passport-icon.svg"
import searchFileIcon from "@/components/icons/search-file-icon.svg"
import familyIcon from "@/components/icons/family-icon.svg"
import touristVisaConsultIcon from "@/components/icons/tourist-visa-consult-icon.svg"
import studentsIcon from "@/components/icons/students-icon.svg"
import businessIcon from  "@/components/icons/business-icon.svg"

type ServiceType = "pasaporte" | "visaNegada" | "visaFamiliar" | "asesoríaTurismo" | "asesoríaEstudio" | "postulaciónLaboral"

const servicesList = [

  {title: "Visa Americana",  image: usIcon, url: "/visa-estadounidense"  },
  {title: "Visa Canadiense",  image: caIcon, url: "/visa-canadiense"},
  {title: "Pasaporte",  image: passportIcon, url: "/form?service=pasaporte"},
  {title: "Postulaciones de trabajo", image: businessIcon, url: "/form?service=postulaciónLaboral"},
  {title: "Visa turismo familiar", image: familyIcon, url: "/form?service=visaFamiliar"},
  {title: "Análisis de caso visa negada", image: searchFileIcon, url: "/form?service=visaNegada"},
  {title: "Asesoría visa estudiantil", image: studentsIcon, url: "/form?service=asesoríaEstudio"},
  {title: "Asesoría visa turismo", image: touristVisaConsultIcon, url: "/form?service=asesoríaTurismo"},

]



const Services = () => {
  const [current, setCurrent]= useState<number>(0)

  const slideRef = useRef<HTMLDivElement>(null)

  const handleNext = () =>{
    if(slideRef.current){
      slideRef.current.scrollLeft += 250
    }
  }

  const handlePrev = () => {
    if(slideRef.current){
      slideRef.current.scrollLeft -= 250
    }
  }

  return (
    <div className="my-3 relative overflow-hidden flex-nowrap w-full max-w-3xl mx-auto bg-primary-50" >
      <MdNavigateNext onClick={handleNext} className="text-primary-600 absolute right-0 z-10 text-4xl bg-gradient-to-r from-transparent to-primary-50 h-full"/>
      <MdNavigateBefore className="text-primary-600 absolute left-0 z-10 text-4xl bg-gradient-to-l from-transparent to-primary-50 h-full" onClick={handlePrev}/>
      <div className={`flex flex-row duration-200 p-4 overflow-x-scroll scroll-smooth`} ref={slideRef}>
        {
          servicesList.map((service, index) => <ServiceSectionC title={service.title}  image={service.image} url={service.url} key={index}/>)
        }
      </div>
    </div>
  )
}

interface props {
  title: string,
 
  image: StaticImageData,
  url: string
}

const ServiceSectionC = ({ title, image, url }: props) => {

  return (
    <div className="h-full min-w-[250px] p-2 hover:scale-105 transition ease-out">
      <section className='h-full cursor-pointer flex flex-col gap-3 items-center rounded bg-grey border-2 hover:border-primary-700 transition-all duration-150 text-grey'>
          <h1 className='font-semibold bg-primary-700 my-1 text-center text-grey w-full'>{title}</h1>
        <Link href={url} style={{ textDecoration: "none" }}>
          <Image src={image} alt="" style={{ width: "200%", height: "150px", objectFit: "cover" }} />
        </Link>
        <LinkButton href={url} className='rounded-lg text-xs p-0 px-2'>SOLICITAR</LinkButton>
      </section>
    </div>
  )
}


export default Services