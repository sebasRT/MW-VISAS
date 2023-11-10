import useEncodeURI from '@/utils/useEncodeWppURI'
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
const apiURL = useEncodeURI(apiParameters.phone, apiParameters.message)

  return (
    <>
    <section className='cursor-pointer rounded bg-grey border-2 hover:border-blue-primary p-1 w-full h-full transition-all duration-150'>
      <Link href={apiURL} style={{textDecoration:"none"}}>
        <Image src={image} alt=""  style={{width: "100%", height:"150px", objectFit:"cover"}}/>
        <h1 className='font-semibold bg-blue-primary my-1 text-center text-grey'>{title}</h1>
        <p className='text-blue-dark'>{description}</p>
    </Link>
    </section>
    </>
  )
}

export default ServiceSectionC