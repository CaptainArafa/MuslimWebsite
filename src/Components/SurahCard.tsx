import {FaPlay} from "react-icons/fa6"

export const SurahCard = ({nameAr,nameEn}:any) => {
  return (
    <div className="SurahCard-Container">
        <h3>{nameAr}</h3>
        <p>{nameEn}</p>
        <FaPlay />

    </div>
  )
}
