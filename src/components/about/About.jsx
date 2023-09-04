import Education from './Education'
import './about.css'
import React from 'react'
import { aboutData, interestData } from '../../data'

const About = () => {
    return (
        <section id='about'>
            <div className='container'>
                <div className='about__container'>
                    <h2>A Propos</h2>
                    <div className='about__content'>
                        <div className='about__section'>
                            <div className='about__section__text'>
                                {aboutData.description.map((item, index) => {
                                    return <p key={index}>{item.content}</p>
                                })}
                            </div>
                            <div className='about__section__interest'>
                                <h3>{interestData.title}</h3>
                                {interestData.interest.map((item, index) => {
                                    return <p key={index}>{item.icon}{item.content}</p>
                                })}
                            </div>
                        </div>
                        <div className='education__section'>
                            <Education />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About