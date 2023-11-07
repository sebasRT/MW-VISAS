// import AboutUs from './about-us/AboutUs'
// import FrequentQuestions from './FQ/FQ'
import AboutUs from '@/components/sections/about-us/AboutUs'
import Services from '@/components/sections/services/Services'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Main = () => {
  return (
    <div style={{width: "100%", height: "fit-content"}}>
          <Head >
      <title>MW-VISAS  -  Expertos migratorios - Colombia</title>
      <meta name="description" content="Encuentra asesoría y acompañamiento de expertos para obtener tu visa Americana o Canadiense"/>
      
      <meta charSet="utf-8"/>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
        <Services/>
        <AboutUs/>
        {/* <FrequentQuestions/>  */}
    </div>
  )
}

export default Main