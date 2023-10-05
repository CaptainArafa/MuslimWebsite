import { useEffect,useState, useMemo } from "react";
import { Navbar } from "../Components/Navbar"
import masjid from '../assets/Images/background/masjid.svg'
import { LiaExchangeAltSolid } from "react-icons/lia";
import axios from "axios";
import Countdown from 'react-countdown';
import countryList from 'react-select-country-list'
import Select from 'react-select'

export const PrayerTimes = () => {
    
    const [prayerTiming,setPrayerTiming] = useState([] as string[])
    const [prayerNames,setPrayerNames] = useState([] as string[])
    const [nextPrayer,setNextPrayer] = useState(0)
    const [input,setInput] = useState(false)
    const [currentPrayer,setCurrentPrayer] = useState('')
    const [isloading,setIsloading] = useState(true)
    const [value, setValue] = useState('' as string)


    const options = useMemo(() => countryList().getData(), [])

    useEffect(()=>{
      const PrayerDataFunc = async () => {  
        const response = await axios.get(`http://api.aladhan.com/v1/calendarByCity/2023/10?city=Cairo&country=${value}&method=2`)

        let PrayersNames = []
        let PrayersTimes = []
for (const key in response.data.data[0].timings){
if(key==='Fajr' ||key==="Sunrise" || key==='Dhuhr' || key==='Asr' || key==="Maghrib" || key==="Isha"){
    PrayersTimes.push(response.data.data[0].timings[key].split(' ')[0])
    PrayersNames.push(key)
    setPrayerTiming(PrayersTimes)
    setPrayerNames(PrayersNames)
    
   
}

};

NextPrayerFunc(PrayersTimes)
console.log(nextPrayer)
setIsloading(false)
      }
      PrayerDataFunc()
      console.log(value)
    },[value])

const changeHandler = (e:any) => {
        setValue(e.label)
        setInput(false)
      }

const NextPrayerFunc =(prayerTiming:any) =>{
    //Function that determines when is the next closest Prayer
    let TimeRemaining= 0
    let now = new Date()
    let Hours = 0
    let Minutes = 0
    let TotalinMinutes = 0
    let TotalinMinutesNow = 0
    let ComparisonArray:string[] = []
    //Loops over the prayer times in a string format ex: 16:47
    //Then turns the first two characters into numbers and stores them as Hours
    // and does the same thing with minutes
  prayerTiming.map((time:string)=>{
      Hours = Number(time.slice(0,2))
      Minutes = Number(time.slice(3,4))
        TotalinMinutes = (Hours * 60) + Minutes
        TotalinMinutesNow = (now.getHours()*60)+now.getMinutes()
//subtracts the total minutes of the Prayer time to the total minutes of the current time
// if it is positive it means the prayer time still hasn't come then pushes it into the array
        if(TotalinMinutes-TotalinMinutesNow > 0){
            ComparisonArray.push(time)
            
        }


        

    })
    //automatically the first index of the array will be the closest prayer time to the current time
    //so we subtract the prayer time to the current time to get the remaining minutes for the prayer
    //then we store that value to the NextPrayer state
    Hours = Number(ComparisonArray[0].slice(0,2))
    Minutes = Number(ComparisonArray[0].slice(3,5))
      TotalinMinutes = (Hours * 60) + Minutes
      //converting Time remaining to Milliseconds
      TimeRemaining = (TotalinMinutes-TotalinMinutesNow) *60000
      
    setNextPrayer(TimeRemaining)
    setCurrentPrayer(ComparisonArray[0])
    console.log(now)
}


    if(!isloading){
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
                <p><Countdown zeroPadTime={0} autoStart={true} date={ Date.now()+nextPrayer }/></p>

            </div>
            <img src={masjid} alt="Masjid Background" />
        </div>
        <section className="PrayerTimes-Times">
            <div className="PrayerTimes-Location">
                <div>
                <p>Current Location: {value===""?'Egypt':value}</p>
                <div onClick={()=>setInput(prev=>!prev)}><LiaExchangeAltSolid /></div>
                </div>
                {input && <Select className="select-Countries" options={options} onChange={(e)=>changeHandler(e)} />}
            </div>
            {prayerTiming.map((time,index)=>{
                return <div key={time} className={currentPrayer==time?"PrayerTimes-Prayer active":"PrayerTimes-Prayer"}>
                <p>{prayerNames[index]}</p><p>{time.startsWith('0')?`${time.substring(1)} AM`:time.substring(0,2)==='12'? `${time} PM`:`${Number(time.slice(0,2))-12}${time.substring(2)} PM`}</p>
                </div>
            })}
        
        </section>
    </main>
    
    </div>
    
    </>
  
  )
        }
}

