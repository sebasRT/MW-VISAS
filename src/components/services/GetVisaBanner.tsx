'use client'
import React, { useState } from 'react'
import LinkButton from '../buttons/LinkButton'
import styles from '@/styles/banners.module.css'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'

const GetVisaBanner = () => {
  const [clicked, setClicked] = useState(false)

  return (
    // <section className={styles.GetVisaBanner + " " + "text-white h-80 md:h-64 relative grid place-items-center p-4 m-3 text-2xl text-center"}>
    <section className='relative h-80 md:h-72 grid place-items-center p-4 m-3 text-2xl text-center justify-center text-primary-50 bg-gradient-to-b from-transparent to-black'>
      
      <CldImage src="mw-visas/g9rtqmz0sc8uhcpgtiba" alt='Obtén tu visa'  fill={true} style={{objectFit: "cover", objectPosition: "top", zIndex: -1}} className='' />
     
      {
        clicked ? <>
          <p>¿A que país te gustaría viajar?</p>

          <LinkButton href='/visa-estadounidense' className='w-fit' >ESTADOS UNIDOS</LinkButton>
          <LinkButton href='/visa-canadiense' className='w-fit'>CANADÁ</LinkButton>
        </>
          :
          <>
            <h2 className='text-4xl'>¿Buscas sacar tu visa?</h2>
            <p>En MW-VISAS te brindaremos todo el asesoramiento que necesitas de la mano de expertos.</p>

            <button className='text-base font-semibold font-sans uppercase bg-primary-700 p-2 mt-3 animate-bounce' onClick={() => setClicked(true)}>ME INTERESA</button>
          </>
      }
    </section>
  )
}

export default GetVisaBanner