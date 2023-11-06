import { InfoContainer } from "../componentsStyles/Info"

const Info = ({color}:{color:string}) => {
  return (
   <InfoContainer color={color}>
   <h3>MW VISAS</h3>
    <p>INFO@MWVISAS.CO</p>
    <p>Bogotá, Colombia </p>
    <p>6019157539</p>
   </InfoContainer>
  )
}

export default Info
