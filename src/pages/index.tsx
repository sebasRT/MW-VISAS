// import AboutUs from './about-us/AboutUs'
// import FrequentQuestions from './FQ/FQ'
import AboutUs from '@/components/sections/about-us/AboutUs'
import Services from '@/components/sections/services/Services'
import Head from 'next/head'


const Main = () => {
  return (
    <div style={{width: "100%", height: "fit-content"}}>
          <Head >
      <title>MW-VISAS  -  Expertos migratorios - Colombia</title>
      <meta name="description" content="Encuentra asesoría y acompañamiento de expertos para obtener tu visa Americana o Canadiense"/>
      
    {/*-------------facebook Meta tags ------------------------------*/}

      <meta property="og:url" content="https://mw-visas.vercel.app/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="MW-VISAS  -  Expertos migratorios - Colombia"/>
      <meta property="og:description" content="Encuentra asesoría y acompañamiento de expertos para obtener tu visa Americana o Canadiense"/>
      <meta property="og:image" content="https://i.postimg.cc/RZfprcbZ/mw-visas-Logo.webp"/>

      <meta charSet="utf-8"/>
      </Head>
        <Services/>
        <AboutUs/>
        {/* <FrequentQuestions/>  */}
    </div>
  )
}

export default Main