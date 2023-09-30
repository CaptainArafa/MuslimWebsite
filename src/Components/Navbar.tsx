import logo from '../assets/Images/mosque-logo.webp'
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <nav className="Nav-Container">
        <section className='Nav-Logo'>
            <img src={logo} alt="Website Logo" />
        </section>
        <section className='Nav-Links'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/'}>Prayer Times</NavLink>
            <NavLink to={'/'}>Holy Quran</NavLink>
            <NavLink to={'/'}>Islamic Calendar</NavLink>
            <NavLink to={'/'}>About</NavLink>
        </section>
        <section className='Nav-Buttons'>
            <NavLink to={'/'}>Login</NavLink>
        </section>

    </nav>
    </>
  )
}
