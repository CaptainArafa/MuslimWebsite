import logo from '../assets/Images/Logo/Website-Logo-White.png'
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <nav className={location.pathname.includes('/quran')?"Nav-Container Quran":"Nav-Container"}>
        <section className='Nav-Logo'>
            <img src={logo} alt="Website Logo" />
        </section>
        <section className='Nav-Links'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/timing'}>Prayer Times</NavLink>
            <NavLink to={'/quran'}>Holy Quran</NavLink>
            <NavLink to={'/calendar'}>Islamic Calendar</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </section>
        <section className='Nav-Buttons'>
            <NavLink to={'/login'}>Login</NavLink>
        </section>

    </nav>
    </>
  )
}
