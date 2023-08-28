import './navbar.css'
import React, { useState, useEffect } from 'react'
import { FaHome, FaUser, FaCode, FaPaperPlane, FaTimes, FaBars } from 'react-icons/fa'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [isScrolled, setIsScrolled] = useState(false)

    //Scroll event to make the header shrink
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
        })
    })

    return (
        <nav className={`${isScrolled ? 'container navbar scrolled' : 'container navbar'}`}>
            <a href="/" className="navbar__logo">Sunny.</a>
            <div className="navbar__hamburger" onClick={handleClick}>
                {click ? <FaTimes size={20} className='navbar__close' /> : <FaBars size={20} />}
            </div>
            <ul className={click ? "navbar__menu active" : "navbar__menu"}>
                <li className="navbar__item">
                    <a href="/" onClick={handleClick}>
                        <FaHome /> Home
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#about" onClick={handleClick}>
                        <FaUser /> A propos</a>
                </li>
                <li className="navbar__item">
                    <a href="#projects" onClick={handleClick}>
                        <FaCode /> Projets</a>
                </li>
                <li className="navbar__item">
                    <a href="#contact" onClick={handleClick}>
                        <FaPaperPlane />Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar