import { useEffect, useState } from "react"
import { Navbar } from "../Components/Navbar"
import {AiOutlineSearch} from 'react-icons/ai'
import axios from "axios"
import { SurahCard } from "../Components/SurahCard"


export const HolyQuranPage = () => {
  const [surahs,setSurahs] = useState([] as any)
  useEffect(()=>{

    const getSurahs = async () =>{
      const data = await axios.get('https://api.quran.gading.dev/surah')

      setSurahs(data.data.data)
      console.log(data.data.data)
    }
    getSurahs()
  },[])
  return (
    <div className="QuranPage-Container">
    <header>
        <Navbar/>
        <section className="Surahs-Search-Bar">
          <input type="text" placeholder="Search for surah" />
          <AiOutlineSearch />
        </section>
    </header>
    <body>
      <section className="Quran-Surahs-Container">
        {surahs.map((surah)=>{
          return <SurahCard key={surah.number} id={surah.number} nameEn={surah.name.transliteration.en} nameAr={surah.name.short} />
        })}
      </section>
    </body>
    </div>
  ) 
}
