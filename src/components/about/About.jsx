import './about.css'
import React from 'react'
import { aboutData, interestData } from '../../data'
import Skill from '../skill/Skill'

const About = () => {
    return (
        <section id='about' className='container'>
            <div className='section__content'>
                <h2>{aboutData.title}</h2>
                <div className='about__content'>
                    <div className='about__content__description'>
                        {aboutData.description.map((description, index) =>
                            <div key={index}>
                                {description.content}
                            </div>
                        )}
                    </div>
                    <div className='about__content__interest'>
                        <div>{interestData.title}</div>
                        <div className='interest__item'>
                            {interestData.interest.map((interest, index) => (
                                <div key={index}>
                                    {interest.icon}
                                    {interest.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Skill />
            </div>
        </section>
    )
}

export default About