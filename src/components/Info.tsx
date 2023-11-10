interface Props {
  color: "text-grey" | "text-blue-dark"
  size: "text-xs" | "text-base"
}

const Info:React.FC<Props>= ({color, size}) => {
  return (
   <div className={`${color} ${size} text-center `}>
   <h3>MW VISAS</h3>
    <p>INFO@MWVISAS.CO</p>
    <p>Bogotá, Colombia </p>
    <p>6019157539</p>
   </div>
  )
}

export default Info
