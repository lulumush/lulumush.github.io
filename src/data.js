import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaCodeCommit } from 'react-icons/fa6'
import booki from './assets/images/booki.png'
import ohmyfood from './assets/images/ohmyfood.png'
import kasa from './assets/images/kasa.png'
import portfoliocg from './assets/images/portfoliocg.png'
import bootstrap from './assets/images/bootstrap.png'
import sunnyside from './assets/images/sunnyside.png'
import esetup from './assets/images/esetup.png'
import lushemail from './assets/images/lushemail.png'

export const heroData = {
    header: "Hello, I'm",
    title: "Lucie Sundermeijer",
    subTitle: "Front-End Developer",
    buttons: [
        { label: "Contact", url: "mailto:lucie.sunder@gmail.com" }
    ],
    socials: [
        { icon: <FaGithub />, url: 'https://github.com/lulumush' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/lucie-sundermeijer/' }
    ]
}


export const aboutData = {
    title: "_About",
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
    description: "Here are some technologies I’ve been working with :",
    skills: ["Html", "CSS", "Sass", "Javascript", "React", "Tailwind CSS", "Bootstrap", "Git", "Wordpress", "Elementor"]
}

export const projectData = {
    title: "_Projects",
    projects: [
        {
            id: 1,
            title: "Booki",
            description: "Project done during my online training with OpenClassrooms",
            tags: ["HTML ", "CSS"],
            demo: "https://lulumush.github.io/Booki/",
            repo: "https://github.com/lulumush/Booki",
            image: booki
        },
        {
            id: 2,
            title: "Ohmyfood",
            description: "Project done during my online training with OpenClassrooms",
            tags: ["HTML ", "Sass"],
            demo: "https://lulumush.github.io/Ohmyfood/",
            repo: "https://github.com/lulumush/Ohmyfood",
            image: ohmyfood
        },
        {
            id: 3,
            title: "Kasa",
            description: "Project done during my online training with OpenClassrooms",
            tags: ["React ", "Sass"],
            demo: "https://lulumush.github.io/Kasa/",
            repo: "https://github.com/lulumush/Kasa",
            image: kasa
        },
        {
            id: 4,
            title: "Photograph portfolio",
            description: "Project done to practice my skills with React and Tailwind CSS",
            tags: ["React ", "Tailwind CSS"],
            demo: "https://lulumush.github.io/portfolio-cg/",
            repo: "https://github.com/lulumush/portfolio-cg",
            image: portfoliocg
        },
        {
            id: 5,
            title: "Landing page Bootstrap",
            description: "Project done to practice Bootstrap",
            tags: ["HTML ", "Bootstrap"],
            demo: "https://lulumush.github.io/Bootstrap-Landing-Page/",
            repo: "https://github.com/lulumush/Bootstrap-Landing-Page",
            image: bootstrap
        },
        {
            id: 6,
            title: "Sunnyside agency landing page",
            description: "Project done during a frontendmentor.io challenge",
            tags: ["React ", "Tailwind CSS"],
            demo: "https://lulumush.github.io/sunnyside-agency-landing-page/",
            repo: "https://github.com/lulumush/sunnyside-agency-landing-page",
            image: sunnyside
        },
        {
            id: 7,
            title: "Eset Up",
            description: "Project done to practice Wordpress and Elementor",
            tags: ["Wordpress ", "Elementor"],
            demo: "https://esetup.netlify.app/",
            image: esetup
        },
        {
            id: 8,
            title: "Html Email",
            description: "",
            tags: [],
            demo: "https://lushemail.netlify.app/",
            repo: "https://github.com/lulumush/htmlEmail",
            image: lushemail
        },
    ]
}
