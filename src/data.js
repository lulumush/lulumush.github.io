import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaCodeCommit } from 'react-icons/fa6'

export const heroData = {
    header: "Hello, I'm",
    title: "Lucie Sundermeijer",
    subTitle: "Front-End Developer",
    buttons: [
        { label: "Contact", url: "#contact" }
    ],
    socials: [
        { icon: <FaGithub />, url: 'https://github.com/lulumush' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/lucie-sundermeijer/' }
    ]
}


export const aboutData = {
    title: "_ About",
    description: [
        {
            content: "Hello, I'm Lucie Sundermeijer, a Junior Front-End Developer from Nouvelle-Aquitaine, FR."
        },
        {
            content: "After working in a completely different field for the past ten years, I decided to return to my original profession and pursue a career change."
        },
        {
            content: "I am a motivated individual eager to enhance my knowledge and skills as a Front-End developer."
        },
    ]
}

export const interestData = {
    title: "I also like:",
    interest: [
        {
            icon: <FaCodeCommit />,
            content: "Analog photography"
        },
        {
            icon: <FaCodeCommit />,
            content: "Hiking"
        },
        {
            icon: <FaCodeCommit />,
            content: "video games"
        },
    ]
}

export const educationData =
    [
        {
            id: 1,
            date: "Mai 2022 - Nov. 2022",
            title: "Formation Développeur web",
            location: "Openclassrooms"
        },
        {
            id: 2,
            date: "2005-2007",
            title: "BTS Informatique de Gestion",
            location: "Lycée de la Venise Verte, Niort"
        },
        {
            id: 3,
            date: "2005",
            title: "BAC Informatique de Gestion",
            location: "Lycée de la Venise Verte, Niort"
        },
    ]

export const skillData = {
    title: "_ Skills",
    skills: ["Html", "CSS", "Sass", "Javascript", "React", "Tailwind CSS", "Bootstrap", "Git"]
}
