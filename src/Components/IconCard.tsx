import { IconCardType } from "../Types"

const IconCard = ({name, img,heading}:IconCardType) => {
  return (
    <div className="IconCard-Container">
        <img src={img} alt={name} />
        <h3>{heading}</h3>
    </div>
  )
}

export default IconCard