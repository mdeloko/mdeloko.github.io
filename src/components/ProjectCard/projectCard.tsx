import { FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./projectCard.css"

interface ICardProps{
    imgPath:string;
    projectName:string;
    techStack: string[];
    description:string;
    repoUrl:string;
}

export function EmblaProjectCard({imgPath,projectName,techStack,description,repoUrl}:ICardProps){

    return(<>
        <div className="embla__slide">
            <div className="card">
                <img className="project-card-thumb" src={imgPath} alt={"Miniatura do projeto "+projectName} />
                <h2 className="project-card-title">{projectName}</h2>
                <p className="project-card-description">{description}</p>
                <div className="stacks">
                    <h3 className="project-card-subtitle">Stack:</h3>{techStack.map((stack,idx)=> <p key={idx}>{stack}</p>)}
                </div>
                <Link to={repoUrl} className="repo-button" aria-roledescription="Botão" aria-label={`Ir para repositório de projeto ${projectName}`}><FaScrewdriverWrench/>Repositório</Link>
            </div>
        </div>
    </>)
}

export function ProjectCard({imgPath,projectName,techStack,description,repoUrl}:ICardProps){

    return(<>
        <div className="card">
            <img className="project-card-thumb" src={imgPath} alt={"Miniatura do projeto "+projectName} />
            <h2 className="project-card-title">{projectName}</h2>
            <p className="project-card-description">{description}</p>
            <div className="stacks">
                <h3 className="project-card-subtitle">Stack:</h3>{techStack.map((stack,idx)=> <p key={idx}>{stack}</p>)}
            </div>
            <Link to={repoUrl} className="repo-button" aria-roledescription="Botão" aria-label={`Ir para repositório de projeto ${projectName}`}rel="noopener noreferrer" target="_blank"><FaScrewdriverWrench/>Repositório</Link>
        </div>
    </>)
}