import './about.css'
import React from 'react'
import { aboutData, interestData, skillData } from '../../data'

const About = () => {
    return (
        <section id='about' className='container'>
            <div className='section__content'>
                <h2>{aboutData.title}</h2>
                <div className='about__content'>
                    <div>
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
                    <div className='skills__content'>
                        <div>{skillData.description}</div>
                        <div className='skills__items'>
                            {skillData.skills.map((item, index) => (
                                <div key={index} >{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About