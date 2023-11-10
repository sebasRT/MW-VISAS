import React from 'react'

const Page = () => {
  
  return (
    <div className='items-center text-center text-blue-dark w-full'>
      <h1 className='text-3xl font-semibold text-blue-primary m-2.5'>Quienes somos</h1>

      <section className={sectionStyles.section}>
        <h2 className={sectionStyles.h2}>Misión</h2>
        <p className={sectionStyles.p}>
          Brindamos un acompañamiento basado en nuestros principios corporativos
          como excelencia, respeto, transparencia, responsabilidad social, honestidad
          y agilidad. Esta guía permite a todos nuestros usuarios sentir un trato humano
          que se enfoca en las necesidades individuales, garantizamos un excelente servicio
          de calidad en nuestros procesos migratorios.
        </p>
      </section>

      <section className={sectionStyles.section}>
        <h2 className={sectionStyles.h2}>Visión</h2>
        <p className={sectionStyles.p}>
        Para el 2028  M.W VISAS será una compañía con alto reconocimiento nacional e
        internacional en procesos migratorios con todos los marcos legales, debido a 
        nuestro profesionalismo que nos permite hacer realidad los sueños y proyectos 
        de vida de nuestros clientes.
        </p>
      </section>

      <section className={sectionStyles.section}>
        <h2 className={sectionStyles.h2} >Objetivo General</h2>
        <p className={sectionStyles.p}>
        Brindar asesorías internacionales de manera integral, aportando las 
        herramientas y técnicas necesarias para un exitoso proceso migratorio 
        teniendo presente el marco reglamentario  contribuyendo a cada  solicitud 
        de nuestros usuarios.
        </p>
      </section>

      <section>

      </section>
    </div >
  )
}
const sectionStyles = {section:'bg-grey m-3',
  h2: 'bg-blue-primary text-grey p-1.5 font-bold',
  p: 'p-10 text-xl'
}
export default Page