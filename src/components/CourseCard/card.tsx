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
            <div className="embla__slide">
                <div className="card" >
                    <h3>{name}</h3>
                    <p><b>Instituição:</b> {institution}</p>
                    <p><b>Nível:</b> {grade}</p>
                    <p><b>Início em:</b> {start_date.toLocaleDateString("pt-BR",{dateStyle:"short"})}</p>
                    {conclusion_date?(<>
                    <p><b>Concluído em:</b> {conclusion_date.toLocaleDateString("pt-BR",{dateStyle:"short"})}</p>
                    </>):<><b>Em andamento...</b></>}
                </div>
            </div>
        </>
    )
}