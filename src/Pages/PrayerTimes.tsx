import { Navbar } from "../Components/Navbar"
import masjid from '../assets/Images/background/masjid.svg'
import { LiaExchangeAltSolid } from "react-icons/lia";

export const PrayerTimes = () => {
  return (
    <>
    <div className="BackgroundImg">
    <header>
        <Navbar />
    </header>
    <main>
    <div className="PrayerTimesBackground">
            <div className="PrayerTimesBackground-Timing">
                <h2>Next Prayer Maghrib</h2>
                <p>02:46:25</p>

            </div>
            <img src={masjid} alt="Masjid Background" />
        </div>
        <section className="PrayerTimes-Times">
            <div className="PrayerTimes-Location">
                <p>Current Location: Cairo, Egypt</p>
                <LiaExchangeAltSolid />
            </div>
        <div className="PrayerTimes-Prayer">
            <p>Fajr</p><p>04:09</p>
        </div>
        <div className="PrayerTimes-Prayer">
        <p>Sunrise</p><p>06:02</p>
        </div>
        <div className="PrayerTimes-Prayer">
        <p>Duhr</p><p>13:47</p>
        </div>
        <div className="PrayerTimes-Prayer">
        <p>Asr</p><p>17:56</p>
        </div>
        <div className="PrayerTimes-Prayer">
        <p>Maghrib</p><p>21:30</p>
        </div>
        <div className="PrayerTimes-Prayer">
        <p>Isha</p><p>22:50</p>
        </div>
        </section>
    </main>
    
    </div>
    
    </>
  )
}
