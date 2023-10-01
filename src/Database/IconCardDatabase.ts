import Praying from '../assets/Images/Icons/Praying-Icon.jpg'
import Quran from '../assets/Images/Icons/Quran-Icon (2).jpg'
import Calendar from '../assets/Images/Icons/Calendar.svg'
import { IconCardType } from '../Types'

export const Card:IconCardType[] = [
    {
        id:1,
        name:'Praying Icon',
        heading:'Prayer Timings based on your location',
        img: Praying
        

    },
    {
        id:2,
        name:'Holy Quran Icon',
        heading:'Every chapter of the Holy Quran',
        img: Quran,
        
    },
    {
        id:3,
        name:'Islamic Calendar Icon',
        heading: 'Full view of the Islamic Calendar',
        img: Calendar,
        
    },

]