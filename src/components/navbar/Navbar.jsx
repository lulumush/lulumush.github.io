import './navbar.css'
import React, { useState } from 'react'
import { FaHome, FaUser, FaCode, FaPaperPlane, FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <nav className='container navbar'>
            <a href="/" className='navbar__logo'>Sunny.</a>
            <div onClick={handleClick} className='navbar__hamburger'>
                {click ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
            <ul className={click ? "navbar__content active" : "navbar__content"}>
                <li className='navbar__item'>
                    <a href="/" onClick={handleClick}>
                        <FaHome />Home
                    </a>
                </li>
                <li className='navbar__item'>
                    <a href="#about" onClick={handleClick}>
                        <FaUser />About</a>
                </li>
                <li className='navbar__item'>
                    <a href="#projects" onClick={handleClick}>
                        <FaCode />Projects</a>
                </li>
                <li className='navbar__item'>
                    <a href="#contact" onClick={handleClick}>
                        <FaPaperPlane />Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar