import React from 'react'
import { aboutData, interestData, skillData } from '../../data'

const About = () => {
    return (
        <section id='about' className='container'>
            <h2>{aboutData.title}</h2>
            {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph.content}</p>
            ))}
        </section>
    )
}

export default About