import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { educationData } from '../../data'

const Education = () => {
    return (
        <>
            <h3><FaGraduationCap /> Education</h3>
            <div className="education__container">
                {educationData.map((item) => {
                    const { date, title, } = item
                    // const position = id % 2 === 0 ? 'right' : 'left'
                    return (
                        // <div className={`${position} education__item`}>
                        <div className={` right education__item`}>
                            <div className="education__data">
                                <div>{date}</div>
                                <p>{title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Education