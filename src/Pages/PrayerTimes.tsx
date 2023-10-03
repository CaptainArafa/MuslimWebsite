import { useEffect,useState } from "react";
import { Navbar } from "../Components/Navbar"
import masjid from '../assets/Images/background/masjid.svg'
import { LiaExchangeAltSolid } from "react-icons/lia";
import axios from "axios";
import Countdown from 'react-countdown';

export const PrayerTimes = () => {
    // const [minutes,setMinutes] = useState(0)
    // const [hours,setHours] = useState(0)
    // const [seconds,setSeconds] = useState(0)
    const [data,setData] = useState({})
    const [prayerTiming,setPrayerTiming] = useState([] as string[])
    const [prayerNames,setPrayerNames] = useState([] as string[])
    const [nextPrayer,setNextPrayer] = useState(0)
    const [isloading,setIsloading] = useState(true)
    useEffect(()=>{
      
        axios.get('http://api.aladhan.com/v1/calendarByCity/2023/10?city=Cairo&country=Egypt&method=2')
        .then((response)=>{
            setData(response.data.data[0].timings)
            let PrayersNames = []
            let PrayersTimes = []
for (const key in response.data.data[0].timings){
    if(key==='Fajr' ||key==="Sunrise" || key==='Dhuhr' || key==='Asr' || key==="Maghrib" || key==="Isha"){
        PrayersTimes.push(response.data.data[0].timings[key].split(' ')[0])
        PrayersNames.push(key)
        setPrayerTiming(PrayersTimes)
        setPrayerNames(PrayersNames)
        
        console.log(prayerNames)
    }
   
};
setIsloading(false)
console.log(prayerNames)
NextPrayerFunc(prayerTiming)
        })
    },[])


    // const CountdownFunc = (time:number) =>{
    //     setMinutes(nextPrayer)
    //     let newMinutes=minutes
    // if(minutes>=60){
    
    //     for(let i=0; i<minutes; i+60){
    //             setHours(prev => prev+1)
    //             newMinutes= newMinutes-60
    //     }
    //     setMinutes(newMinutes)
    
    // }
    // if(minutes>=1){
    //     for(let i=0; i<minutes; i+1){
    //         setSeconds(prev => prev+60)
    //         newMinutes= newMinutes-1
    // }
    // setMinutes(newMinutes)
    // }
    // console.log(hours,minutes,seconds)
    
    //     // const countDown = setInterval(()=>{
    //     //     setTimer(prev=>prev-1)
    
    //     // },1000)
    
    
    // }


const NextPrayerFunc = (prayerTiming:any) =>{
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
      TimeRemaining = (TotalinMinutes-TotalinMinutesNow) *6000
      
    setNextPrayer(TimeRemaining)
    console.log(nextPrayer)
    console.log(now)
}



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
                <p><Countdown autoStart={true} date={ Date.now()+nextPrayer} /></p>

            </div>
            <img src={masjid} alt="Masjid Background" />
        </div>
        <section className="PrayerTimes-Times">
            <div className="PrayerTimes-Location">
                <p>Current Location: Cairo, Egypt</p>
                <LiaExchangeAltSolid />
            </div>
            {prayerTiming.map((time,index)=>{
                return <div key={time} className="PrayerTimes-Prayer">
                <p>{prayerNames[index]}</p><p>{time.startsWith('0')?`${time.substring(1)} AM`:time.substring(0,2)==='12'? `${time} PM`:`${Number(time.slice(0,2))-12}${time.substring(2)} PM`}</p>
                </div>
            })}
        
        </section>
    </main>
    
    </div>
    
    </>
  
  )
}

