// import AboutUs from './about-us/AboutUs'
// import FrequentQuestions from './FQ/FQ'
import AboutUs from '@/components/about-us/AboutUs'
import Services from '@/components/services/Services'


const Main = () => {
  return (
    <div className='w-full min-h-screen'>
        <Services/>
        <AboutUs/>
        {/* <FrequentQuestions/>  */}
    </div>
  )
}

export default Main