import "./card.css";

interface CardProps {
    name: string;
    institution: string;
    grade: "Curso"|"Gradução"|"Técnico";
    start_date: Date;
    conclusion_date?: Date;
}

export default function CourseCard({
    name,
    institution,
    grade,
    start_date,
    conclusion_date
    }:CardProps ){
    
    
    return(
        <>
            <div className="card">
                <h5>{name}</h5>
                <b>Instituição:</b> {institution} <br />
                <b>Nível:</b> {grade} <br />
                <b>Início em:</b> {start_date.toLocaleDateString("pt-BR",{dateStyle:"short"})} <br />
                {conclusion_date?(<>
                <b>Concluído em:</b> {conclusion_date.toLocaleDateString("pt-BR",{dateStyle:"short"})}
                </>):<><b>Em andamento...</b></>}
            </div>
        </>
    )
}