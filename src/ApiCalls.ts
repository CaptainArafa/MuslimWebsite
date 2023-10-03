import axios from "axios";

export const PrayerTimesApi = (setData:any) =>{
    axios.get('http://api.aladhan.com/v1/calendarByCity/2023/10?city=Cairo&country=Egypt&method=2')
    .then((response)=>{
        setData(response.data.data[1].timings)
    })
}