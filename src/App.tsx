import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/App.css'
import { HomePage } from './Pages/HomePage'
import { PrayerTimes } from './Pages/PrayerTimes'
import { HolyQuranPage } from './Pages/HolyQuranPage'
import { IslamicCalendar } from './Pages/IslamicCalendar'
import { About } from './Pages/About'
import { SurahPlayPage } from './Pages/SurahPlayPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/timing' element={<PrayerTimes/>} />
      <Route path='quran' element={<HolyQuranPage/>}/>
      <Route path='/quran/:id' element={<SurahPlayPage />} />
      <Route path='/calendar' element={<IslamicCalendar/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
