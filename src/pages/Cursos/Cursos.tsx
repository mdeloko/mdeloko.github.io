import "./Cursos.css";
import CourseCard from "../../components/CourseCard/card";
import Carousel, {type ICarouselProps} from "../../components/Carousel/carousel";

const formacoesProps :ICarouselProps = {
    carouselAriaLabel:"Carrossel de Cartões sobre Formações de Erik",
    carouselAriaRoleDescription:"Carrossel",
    nextButtonAriaLabel:"Ir para formação a frente",
    previousButtonAriaLabel:"Voltar a formação anterior",
    delay: 5500,
    active:true
}
const cursosProps :ICarouselProps = {
    carouselAriaLabel:"Carrossel de Cartões sobre cursos de Erik",
    carouselAriaRoleDescription:"Carrossel",
    nextButtonAriaLabel:"Ir para curso a frente",
    previousButtonAriaLabel:"Voltar ao curso anterior",
    delay: 3000,
    active:true
}

export default function Cursos(){
    return(<>
        <h1>Formações</h1>
        <hr />
        <Carousel
            carouselAriaLabel={formacoesProps.carouselAriaLabel}
            carouselAriaRoleDescription={formacoesProps.carouselAriaRoleDescription}
            nextButtonAriaLabel={formacoesProps.nextButtonAriaLabel}
            previousButtonAriaLabel={formacoesProps.previousButtonAriaLabel}
            delay={formacoesProps.delay}
            active={formacoesProps.active}
        >
            <CourseCard name="Engenharia de Computação" grade="Gradução" institution="UTFPR" start_date={new Date(2022,2,1)}/>
            <CourseCard name="Técnico em Informática" grade="Técnico" institution="IFPR" start_date={new Date(2017,1,18)} conclusion_date={new Date("01-03-2022")}/>
            
        </Carousel>
        <h1>Cursos e Bootcamps</h1>
        <hr />
        <Carousel
            carouselAriaLabel={cursosProps.carouselAriaLabel}
            carouselAriaRoleDescription={cursosProps.carouselAriaRoleDescription}
            nextButtonAriaLabel={cursosProps.nextButtonAriaLabel}
            previousButtonAriaLabel={cursosProps.previousButtonAriaLabel}
            delay={cursosProps.delay}
            active={cursosProps.active}
            playOnInit
        >
            <CourseCard name="Go Developer" grade="Curso" institution="Digital Innovation One (DIO)" start_date={new Date(2025,10,1)} conclusion_date={new Date(2026,11,28)}/>
            <CourseCard name="Linux Fundamentals" grade="Curso" institution="Digital Innovation One (DIO)" start_date={new Date(2025,7,15)} conclusion_date={new Date(2025,8,19)}/>
            <CourseCard name="Docker Fundamentals" grade="Curso" institution="Digital Innovation One (DIO)" start_date={new Date(2025,5,10)} conclusion_date={new Date(2025,8,10)}/>
            <CourseCard name="React Developer" grade="Curso" institution="Digital Innovation One (DIO)" start_date={new Date(2024,11,1)} conclusion_date={new Date(2025,2,31)}/>
            <CourseCard name="DevOps Fundamentals" grade="Curso" institution="Digital Innovation One (DIO)" start_date={new Date(2024,11,20)} conclusion_date={new Date(2025,0,21)}/>
        </Carousel>
        <h1>Stacks</h1>
        <hr />

    </>)
}