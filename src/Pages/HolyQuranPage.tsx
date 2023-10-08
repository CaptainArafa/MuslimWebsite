import { Navbar } from "../Components/Navbar"
import {AiOutlineSearch} from 'react-icons/ai'


export const HolyQuranPage = () => {
  return (
    <header>
        <Navbar/>
        <section className="Surahs-Search-Bar">
          <input type="text" placeholder="Search for surah" />
          <AiOutlineSearch />
        </section>
    </header>
  ) 
}
