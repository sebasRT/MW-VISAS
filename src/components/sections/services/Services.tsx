import usa from "@/assets/USA.jpg"
import ca from "@/assets/R.jpg"
import passport from "@/assets/passport.png"
import ServiceSectionC from "./ServiceSection"
import { ServicesContainer, ServicesPage } from "@/pagesStyles/main/ServicesStyled"

const Services = () => {
  return (
    
    <ServicesPage>
       <h1>Nuestros Servicios</h1>
<ServicesContainer>
  <ServiceSectionC title="Visa Americana"  description="Cumple tus sueños y proyectos viajando a Estados Unidos." 
    image={usa} apiParameters={{phone: 573196578007, message: "Hola, me gustaría saber sobre sus servicios para Visa Americana."}} key="usVisaBtn"/>
  
  <ServiceSectionC title="Visa Canadiense" description="Quieres vivir nuevas experiencias y conocer Canada." 
    image={ca} apiParameters={{phone: 573196578007, message: "Hola, me gustaría saber sobre sus servicios para Visa Canadiense."}} key="caVisaBtn"/>
  
  <ServiceSectionC title="Pasaporte" description="Obtén tu cita y adquiere tu documento de viaje." 
    image={passport} apiParameters={{phone: 573196578007, message: "Hola, me gustaría saber sobre sus servicios para Pasaporte."}} key="passportBtn"/>

</ServicesContainer>
    </ServicesPage>
  
    )
}

export default Services