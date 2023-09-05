import React from 'react'
import { ReactComponent as IconReact } from '../../assets/images/react.svg'
import { ReactComponent as IconHtml } from '../../assets/images/html.svg'
import { ReactComponent as IconCss } from '../../assets/images/css.svg'
import { ReactComponent as IconJavascript } from '../../assets/images/javascript.svg'
import { ReactComponent as IconBootstrap } from '../../assets/images/bootstrap.svg'
import { ReactComponent as IconTailwind } from '../../assets/images/tailwind.svg'
import './skills.css'

const Skills = () => {
    return (
        <section className='skills__section'>
            <IconHtml />
            <IconCss />
            <IconJavascript />
            <IconReact />
            <IconBootstrap />
            <IconTailwind />
        </section>
    )
}

export default Skills