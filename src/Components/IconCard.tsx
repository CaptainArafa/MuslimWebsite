import { IconCardType } from "../Types"
import { FaPersonPraying, FaBookQuran, FaCalendar } from "react-icons/fa6";

const IconCard = ({id,heading}:IconCardType) => {
  return (
    <div className="IconCard-Container">
        <div>{id===1? <FaPersonPraying/>:id===2?<FaBookQuran size={150}/>:<FaCalendar />}</div>
        <h3>{heading}</h3>
    </div>
  )
}

export default IconCard