import Education from './Education'
import './about.css'
import React from 'react'

const About = () => {
    return (
        <section id='about'>
            <div className='container'>
                <div className='about__container'>
                    <h2>A Propos</h2>
                    <div className='about__content'>
                        <div>aaa</div>
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