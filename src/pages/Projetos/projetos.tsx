import {ProjectCard,EmblaProjectCard} from "@/components/ProjectCard/projectCard.tsx";
import projetos from "./projetos";
import Carousel from "@/components/Carousel/carousel";
import "./projetos.css";
export default function Projetos(){

    return(<>
        <h2 id="project-page-title">Projetos</h2>
        <hr />
        <div id="desktop" className="project-grid">
            {projetos.map((projeto,idx)=>{
                return <ProjectCard
                    projectName={projeto.projectName}
                    description={projeto.description}
                    repoUrl={projeto.repoUrl}
                    imgPath={projeto.imgPath}
                    techStack={projeto.techStack}
                    key={idx}/>
            })}

        </div>
        <div id="mobile" className="project-grid">
            <Carousel
                active
                carouselAriaLabel="Carrossel com Cards sobre projetos de Erik"
                carouselAriaRoleDescription="Carrossel"
                nextButtonAriaLabel="Próximo projeto"
                previousButtonAriaLabel="Projeto anterior"
                delay={4500}
            >
                {projetos.map((projeto,idx)=>{
                return <EmblaProjectCard
                    projectName={projeto.projectName}
                    description={projeto.description}
                    repoUrl={projeto.repoUrl}
                    imgPath={projeto.imgPath}
                    techStack={projeto.techStack}
                    key={idx}/>
                })}
            </Carousel>
        </div>
    </>)
}