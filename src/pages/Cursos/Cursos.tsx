import NavBar from "../../components/NavBar/navbar";
import CourseCard from "../../components/CourseCard/card";
import Footer from "../../components/Footer/footer";


export default function Cursos(){
    return(<>
        <NavBar/>
        <main>
            <CourseCard name="Técnico em Informática" grade="Técnico" institution="IFPR" start_date={new Date(2017,1,18)} conclusion_date={new Date("01-03-2022")}/>
            <CourseCard name="Engenharia de Computação" grade="Gradução" institution="UTFPR" start_date={new Date(2022,2,1)}/>
            <CourseCard name="Go Developer" grade="Curso" institution="Digital Innovation One (DIO)" start_date={new Date(2025,10,1)} conclusion_date={new Date(2026,11,28)}/>
        </main>
        <Footer/>
    </>)
}