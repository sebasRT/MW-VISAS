import { ServiceDescription, ServiceSection } from '@/pagesStyles/main/ServicesStyled'
import useEncodeWppURI from '@/utils.tsx/useEncodeWppURI'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface props {
  title: string,
  description: string,
  image: StaticImageData, 
  apiParameters:{
    phone: number,
    message: string,
  }
}

const ServiceSectionC = ({title, description, image, apiParameters}: props) => {
const apiURL = useEncodeWppURI(apiParameters.phone, apiParameters.message)

  return (
    <ServiceSection>
      <Link href={apiURL} style={{textDecoration:"none"}}>
        <Image src={image} alt=""  style={{width: "100%", height:"150px", objectFit:"cover"}}/>
        <h1>{title}</h1>
        <ServiceDescription>{description}</ServiceDescription>
    </Link>
    </ServiceSection>
  )
}

export default ServiceSectionC