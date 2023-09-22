import './header.css'
import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import patternHero1 from '../../assets/images/pattern1.png'
import patternHero2 from '../../assets/images/pattern2.png'

const Header = () => {
    return (
        <header>
            <Navbar />
            <Hero />
            <div className='header__element'>
                <img className='element-1' src={patternHero1} alt="pattern" />
                <img className='element-2' src={patternHero2} alt="pattern" />
                <img className='element-4' src={patternHero1} alt="pattern" />
            </div>
        </header>
    )
}

export default Header