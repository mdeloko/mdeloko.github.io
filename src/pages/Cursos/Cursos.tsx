import "./Cursos.css";
import ProficiencyBar from "@/components/ProficiencyBar/profBar";
import {EmblaCourseCard,CourseCard} from "@/components/CourseCard/card";
import Carousel, {type ICarouselProps} from "@/components/Carousel/carousel";
import { backendList, frontendList, devopsList } from "./proficiencyData";
import { coursesList, graduationsList } from "./courseData";

const formacoesProps :ICarouselProps = {
    carouselAriaLabel:"Carrossel de Cartões sobre Formações de Erik",
    carouselAriaRoleDescription:"Carrossel",
    nextButtonAriaLabel:"Ir para formação a frente",
    previousButtonAriaLabel:"Voltar a formação anterior",
    delay: 10000,
    active:true
}
const cursosProps :ICarouselProps = {
    carouselAriaLabel:"Carrossel de Cartões sobre cursos de Erik",
    carouselAriaRoleDescription:"Carrossel",
    nextButtonAriaLabel:"Ir para curso a frente",
    previousButtonAriaLabel:"Voltar ao curso anterior",
    delay: 6000,
    active:true
}

export default function Cursos(){
    return(<>
        <h1>Formações</h1>
        <hr />
        <div id="mobile">
            <Carousel
                carouselAriaLabel={formacoesProps.carouselAriaLabel}
                carouselAriaRoleDescription={formacoesProps.carouselAriaRoleDescription}
                nextButtonAriaLabel={formacoesProps.nextButtonAriaLabel}
                previousButtonAriaLabel={formacoesProps.previousButtonAriaLabel}
                delay={formacoesProps.delay}
                active={formacoesProps.active}
            >
                {
                    graduationsList.map((item,idx)=>{
                        return <EmblaCourseCard
                            key={idx}
                            name={item.name} 
                            grade={item.grade}
                            institution={item.institution}
                            start_date={item.start_date}
                            conclusion_date={item.conclusion_date}
                        />
                    })
                }            
            </Carousel>
        </div>
        <div id="desktop">
            {
                graduationsList.map((item,idx)=>{
                    return <CourseCard
                        key={idx}
                        name={item.name} 
                        grade={item.grade}
                        institution={item.institution}
                        start_date={item.start_date}
                        conclusion_date={item.conclusion_date}
                    />
                })
            }
        </div>
        <h1>Cursos e Bootcamps</h1>
        <hr />
        <div id="mobile">
            <Carousel
                carouselAriaLabel={cursosProps.carouselAriaLabel}
                carouselAriaRoleDescription={cursosProps.carouselAriaRoleDescription}
                nextButtonAriaLabel={cursosProps.nextButtonAriaLabel}
                previousButtonAriaLabel={cursosProps.previousButtonAriaLabel}
                delay={cursosProps.delay}
                active={cursosProps.active}
                playOnInit
            >
                {
                    coursesList.map((item,idx)=>{
                        return <EmblaCourseCard
                                    key={idx}
                                    name={item.name}
                                    grade={item.grade}
                                    institution={item.institution}
                                    start_date={item.start_date}
                                    conclusion_date={item.conclusion_date}
                                />
                    })
                }
            </Carousel>
        </div>
        <div id="desktop">
            {
                coursesList.map((item,idx)=>{
                    return <CourseCard
                        key={idx}
                        name={item.name} 
                        grade={item.grade}
                        institution={item.institution}
                        start_date={item.start_date}
                        conclusion_date={item.conclusion_date}
                    />
                })
            }
        </div>
        <h1>Tecnologias</h1>
        <hr />
        <h2>Backend</h2>
        <hr />
        <section className="proficiency-section">
            {backendList.map((item,idx)=>{
                return <ProficiencyBar key={idx} label={item.label} progressValue={item.progressValue}/>
            })}
        </section>
        <small className="proficiency-section-legend">
            * 0&nbsp;&mdash;&nbsp;3&nbsp;&#10132;&nbsp;Iniciante;&emsp;
            4&nbsp;&mdash;&nbsp;7&nbsp;&#10132;&nbsp;Intermediário;&emsp;
            8&nbsp;&mdash;&nbsp;10&nbsp;&#10132;&nbsp;Avançado.
        </small>
        <h2>Frontend</h2>
        <hr />
        <section className="proficiency-section">
            {frontendList.map((item,idx)=>{
                return <ProficiencyBar key={idx} label={item.label} progressValue={item.progressValue}/>
            })}
        </section>
        <small className="proficiency-section-legend">
            * 0&nbsp;&mdash;&nbsp;3&nbsp;&#10132;&nbsp;Iniciante;&emsp;
            4&nbsp;&mdash;&nbsp;7&nbsp;&#10132;&nbsp;Intermediário;&emsp;
            8&nbsp;&mdash;&nbsp;10&nbsp;&#10132;&nbsp;Avançado.
        </small>
        <h2>DevOps / Clouds</h2>
        <hr />
        <section className="proficiency-section">
            {devopsList.map((item,idx)=>{
                return <ProficiencyBar key={idx} label={item.label} progressValue={item.progressValue}/>
            })}
        </section>
        <small className="proficiency-section-legend">
            * 0&nbsp;&mdash;&nbsp;3&nbsp;&#10132;&nbsp;Iniciante;&emsp;
            4&nbsp;&mdash;&nbsp;7&nbsp;&#10132;&nbsp;Intermediário;&emsp;
            8&nbsp;&mdash;&nbsp;10&nbsp;&#10132;&nbsp;Avançado.
        </small>
    </>)
}