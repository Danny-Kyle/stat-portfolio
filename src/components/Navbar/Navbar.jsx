import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <p className='logo'>Caspian</p>
      <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
          <Link className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuBtn">Contact Me</button>
    </nav>
  )
}

export default Navbar