import React ,{useEffect}from 'react'
import { AbUsSection, AboutUsContainer } from '../../pagesStyles/aboutUs/styles'

const Page = () => {
  
  return (
    <AboutUsContainer>
      <h1>Quienes somos</h1>

      <AbUsSection>
        <h2>Misión</h2>
        <p>
          Brindamos un acompañamiento basado en nuestros principios corporativos
          como excelencia, respeto, transparencia, responsabilidad social, honestidad
          y agilidad. Esta guía permite a todos nuestros usuarios sentir un trato humano
          que se enfoca en las necesidades individuales, garantizamos un excelente servicio
          de calidad en nuestros procesos migratorios.
        </p>
      </AbUsSection>

      <AbUsSection>
        <h2>Visión</h2>
        <p>
        Para el 2028  M.W VISAS será una compañía con alto reconocimiento nacional e
        internacional en procesos migratorios con todos los marcos legales, debido a 
        nuestro profesionalismo que nos permite hacer realidad los sueños y proyectos 
        de vida de nuestros clientes.
        </p>
      </AbUsSection>

      <AbUsSection>
        <h2>Objetivo General</h2>
        <p>
        Brindar asesorías internacionales de manera integral, aportando las 
        herramientas y técnicas necesarias para un exitoso proceso migratorio 
        teniendo presente el marco reglamentario  contribuyendo a cada  solicitud 
        de nuestros usuarios.
        </p>
      </AbUsSection>

      <AbUsSection>

      </AbUsSection>
    </AboutUsContainer>
  )
}

export default Page