import './hero.css'
import React from 'react'
import { heroData } from '../../data'
import { FaPaperPlane, FaArrowCircleDown } from 'react-icons/fa'
import { FaCodeCommit } from 'react-icons/fa6'

const Hero = () => {
    return (
        <section className='container'>
            <div className='hero'>
                <div className='hero__content'>
                    <div className='hero__data'>
                        <div>{heroData.header}</div>
                        <h1>{heroData.title}</h1>
                        <h3><FaCodeCommit />{heroData.subTitle}</h3>
                        <div>
                            {heroData.buttons.map((button, index) =>
                                <div key={index} className='button'>
                                    <a href={button.url}>{button.label}<FaPaperPlane /> </a>
                                </div>
                            )}
                        </div>
                        <div className='hero__socials'>
                            {heroData.socials.map((social, index) =>
                                <div key={index}><a href={social.url} target='_blank' rel="noreferrer">{social.icon}</a></div>
                            )}
                        </div>
                    </div>
                    <div className='hero__img'> </div>
                </div>
                <div className='hero__scroll'>
                    <a href='#about'><FaArrowCircleDown /></a>
                </div>
            </div>
        </section>
    )
}

export default Hero