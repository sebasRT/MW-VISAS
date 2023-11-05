// import AboutUs from './about-us/AboutUs'
// import FrequentQuestions from './FQ/FQ'
import AboutUs from '@/components/sections/about-us/AboutUs'
import Services from '@/components/sections/services/Services'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Main = () => {
  return (
    <div style={{width: "100%"}}>
        <Services/>
        <AboutUs/>
        {/* <FrequentQuestions/>  */}
    </div>
  )
}

export default Main