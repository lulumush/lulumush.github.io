import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const navData = [
    { nav: "Accueil", url: process.env.PUBLIC_URL },
    { nav: "À propos", url: "#about" },
    { nav: "Projets", url: "#projets" },
    { nav: "Contact", url: "#contact" },
    { nav: "C.V.", url: "assets/CV.pdf" },
]

export const heroData = {
    title: "Lucie Sundermeijer",
    subTitle: "Développeuse Front-End junior",
    buttons: [
        { label: "Contact", url: "#contact" }
    ],
    socials: [
        { icon: <FaGithub />, url: 'https://github.com/lulumush' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/lucie-sundermeijer/' }
    ]
}


export const aboutData = {
    title: "A Propos :",
    description: [
        {
            content: "Je m'appelle Lucie et je suis une développeuse Front-End junior, basée en Nouvelle-Aquitaine."
        },
        {
            content: "Après avoir exercé un tout autre métier ces dix dernières années, j'ai décidé de retourner vers mon métier d'origine et donc de faire une reconversion professionnelle."
        },
        {
            content: "Je suis une personne motivée, désireuse d'enrichir mes connaissances et mes compétences en tant que développeuse Front-End."
        },
    ]
}

export const interestData = {
    title: "J'aime aussi:",
    interest: [
        {
            content: "La photo argentique"
        },
        {
            content: "La randonnée"
        },
        {
            content: "Les jeux-vidéos"
        },
    ]
}