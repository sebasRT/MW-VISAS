import WhyUs from '@/components/WhyUs';
import GetVisaBanner from '@/components/services/GetVisaBanner';
import Services from '@/components/services/Services'
 
const Main = () => {
  return (
    <article className='w-full text-primary-dark'>

      <h1 className='text-5xl font-bold text-center text-primary-700'>MW-VISAS</h1>
      <GetVisaBanner />
      <hr />
      <p className='p-3 text-primary-900 text-center text-lg my-3'> ¡Bienvenid@ a <b>MW-VISAS</b>! Somos una firma dedicada a hacer realidad tus sueños de
        migrar a <b>Estados Unidos</b> y <b>Canadá</b>. Con una trayectoria sólida y un equipo de <b>expertos
          en leyes migratorias</b>, nos enorgullece ser tu aliado en este emocionante viaje hacia nuevas oportunidades
        y horizontes.
        <br />
        En MW-VISAS, entendemos que cada persona
        tiene una historia única y aspiraciones individuales. Por eso, ofrecemos <b>servicios migratorios personalizados</b> y
        adaptados a tus necesidades específicas.
        Nuestro compromiso es guiarte en cada paso del proceso, desde la evaluación inicial
        hasta la obtención de <b>tu visa o residencia permanente</b>.
      </p>
      <hr />
      <Services />
      <WhyUs/>
      
    </article>
  )
}

export default Main