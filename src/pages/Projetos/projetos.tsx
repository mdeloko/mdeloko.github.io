import {ProjectCard,EmblaProjectCard} from "@/components/ProjectCard/projectCard.tsx";
import portfolioThumb from "@/assets/projects-pictures/portfolio_home_print.webp"
import Carousel from "@/components/Carousel/carousel";
import "./projetos.css";
export default function Projetos(){

    return(<>
        <h2>Projetos</h2>
        <hr />
        <div id="desktop" className="project-grid">
            <ProjectCard projectName="Meu Portfólio (Este&nbsp;site)" imgPath={portfolioThumb} description="Meu site pessoal de exposição de projetos e qualidades, bem como acesso ao meu currículo." techStack={["React","Vite", "TypeScript", "GitHub Pages"]} repoUrl="https://github.com/mdeloko/mdeloko.github.io"/>

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
                <EmblaProjectCard projectName="Meu Portfólio (Este&nbsp;site)" imgPath={portfolioThumb} description="Meu site pessoal de exposição de projetos e qualidades, bem como acesso ao meu currículo." techStack={["React","Vite", "TypeScript", "GitHub Pages"]} repoUrl="https://github.com/mdeloko/mdeloko.github.io"/>
            </Carousel>
        </div>
    </>)
}