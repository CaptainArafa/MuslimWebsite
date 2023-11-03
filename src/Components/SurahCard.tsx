import {FaPlay} from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

export const SurahCard = ({nameAr,nameEn,id}:any) => {
  const navigate = useNavigate()
  return (
    <div className="SurahCard-Container" onClick={()=>navigate(`/quran/${id}`)}>
        <div className="Upper">
        <h3>{nameAr}</h3>
        <p>{nameEn}</p>
        </div>
       <div className="Lower"><FaPlay size={30} /></div>

    </div>
  )
}
