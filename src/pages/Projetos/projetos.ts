import {type ICardProps} from "@/components/ProjectCard/projectCard";
import portfolioPrint from "@/assets/projects-pictures/portfolio_home_print.webp";
import ninhoPrint from "@/assets/projects-pictures/ninho-academy_print.webp";

const Stacks = {
    React : 'React',
    Vite : 'Vite',
    TS : 'TypeScript',
    JS : 'JavaScript',
    HTML : 'HTML5',
    CSS : 'CSS3',
    AWS : 'AWS',
    OCI : 'OCI',
    GCP : 'GCP',
    Java : 'Java',
    GH_P : 'GitHub Pages',
    Go : 'GoLang',
    Python : 'Python',
    Node : 'Node.js',
    SQLite : 'SQLite',
    PG_SQL : 'PostgreSQL',
    Express : 'Express',
    JWT : 'JWT',
    Bcrypt : 'Bcrypt',
    Tailwind : 'Tailwind CSS',
    Axios : 'Axios',
    Vercel : 'Vercel'
} as const;

type Stacks = (typeof Stacks)[keyof typeof Stacks]

const projetos:ICardProps[] = [
    {
        projectName:"Meu Portfólio (Este\xa0site)",
        description:"Meu site pessoal de exposição de projetos e qualidades, bem como acesso ao meu currículo e locais para entrar em contato comigo.",
        imgPath:portfolioPrint,
        repoUrl:"https://github.com/mdeloko/mdeloko.github.io",
        techStack:[Stacks.React, Stacks.Vite, Stacks.TS, Stacks.GH_P, Stacks.HTML, Stacks.CSS]
    },
    {
        projectName:"Ninho Academy",
        description:"Site criado como atividade de disciplina em parceria com projeto de robótica da faculdade, que visa transformar o aprendizado de ESP32 em uma experiência \"jogável\".",
        imgPath:ninhoPrint,
        repoUrl:"https://github.com/mdeloko/ninho-academy",
        techStack:[
            Stacks.Node,Stacks.Express,Stacks.SQLite,
            Stacks.JWT,Stacks.Bcrypt,Stacks.Axios,
            Stacks.React, Stacks.Vite, Stacks.Tailwind,
            Stacks.Vercel
        ]
    },
]

export default projetos;