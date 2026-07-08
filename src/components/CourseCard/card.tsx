import "./card.css";

export interface ICardProps {
    name: string;
    institution: string;
    grade: "Curso"|"Gradução"|"Técnico";
    start_date: Date;
    conclusion_date?: Date;
    number_of_hours?: number;
}

export function EmblaCourseCard({
    name,
    institution,
    grade,
    start_date,
    conclusion_date,
    number_of_hours
    }:ICardProps ){
    
    
    return(
        <>
            <div className="embla__slide">
                <div className="card" >
                    <h3>{name}</h3>
                    <p><b>Instituição:</b> {institution}</p>
                    <p><b>Nível:</b> {grade}</p>
                    {number_of_hours?(
                        <p><b>Carga horária:</b> {number_of_hours}h</p>):<></>
                    }
                    <p><b>Início em:</b> {start_date.toLocaleDateString("pt-BR",{dateStyle:"short"})}</p>
                    {conclusion_date?(<>
                    <p><b>Concluído em:</b> {conclusion_date.toLocaleDateString("pt-BR",{dateStyle:"short"})}</p>
                    </>):<><b>Em andamento...</b></>}
                </div>
            </div>
        </>
    )
}
export function CourseCard({
    name,
    institution,
    grade,
    start_date,
    conclusion_date,
    number_of_hours
    }:ICardProps ){
    
    
    return(
        <>
            <div className="card" >
                <h3>{name}</h3>
                <p><b>Instituição:</b> {institution}</p>
                <p><b>Nível:</b> {grade}</p>
                {number_of_hours&&
                    <p><b>Carga horária:</b> {number_of_hours}h</p>
                }
                <p><b>Início em:</b>&nbsp;{start_date.toLocaleDateString("pt-BR",{dateStyle:"short"})}</p>
                {conclusion_date?(<>
                <p><b>Concluído em:</b> {conclusion_date.toLocaleDateString("pt-BR",{dateStyle:"short"})}</p>
                </>):<><b>Em andamento...</b></>}
            </div>
        </>
    )
}