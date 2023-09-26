import React from 'react'
import './skill.css'
import { skillData } from '../../data'

const Skill = () => {
    return (
        <div className='skills__content'>
            <div>{skillData.description}</div>
            <div className='skills__items'>
                {skillData.skills.map((item, index) => (
                    <div key={index} >- {item}</div>
                ))}
            </div>
        </div>
    )
}

export default Skill