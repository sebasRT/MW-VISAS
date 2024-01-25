import styles from '@/styles/banners.module.css'
import LinkButton from '../buttons/LinkButton'

const JobApplicationBannerUS = () => {

  return (
    <div className={`${styles.JobApplicationBannerUS} flex flex-col items-center text-center justify-center w-full h-fit relative text-whitesmoke gap-12 p-3`}>
       <h2 className='font-bold text-3xl'>Postulaciones de trabajo para Estados Unidos</h2>
       <p className='text-lg'>Nuestra psicóloga experta en migración te ayudara a crear tu curriculum,
         cartas de presentación, test de habilidades y aplicación a las  mejores empresas
          y ofertas laborales. Te guiaremos paso a paso para que puedas pasar todos los
           filtros y tu solicitud sea un éxito Comunícate.</p>
        <LinkButton href='/visa-estadounidense/form' className='animate-bounce'>ME INTERESA</LinkButton>
    </div>
  )
}

export default JobApplicationBannerUS