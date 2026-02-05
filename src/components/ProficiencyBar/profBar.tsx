
import { useEffect, useRef, useState } from "react";
import "./profBar.css";

export interface IProfBarProps {
    label: string;
    /** Valores de 0 a 10 */
    progressValue:number;
}

export default function ProficiencyBar({label,progressValue}:IProfBarProps){
    const progBarRef = useRef<HTMLDivElement>(null);
    const [visible,setVisible] = useState(false);

    useEffect(
        function(){
            const observer = new IntersectionObserver(
                function([entry]){
                    if(entry.isIntersecting){
                        setVisible(true);
                        observer.disconnect()
                    }
                },
                {threshold:0.8}
            )
            if(progBarRef.current) observer.observe(progBarRef.current);
            return ()=>observer.disconnect()
        },
        []
    )
    function calculateSpanSpace(progressValue:number):number{
        if(progressValue<=1) return -1
        return .2
    }

    return(<>
        <div className="proficiency-bar-wrapper">
            <span className="proficiency-bar-label">{label}</span>
            <div
                className="progress-track"
                role="progressbar"
                aria-valuenow={progressValue}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label={`Barra de nível de progresso com relação a ${label}`}
                ref={progBarRef}
            >
            <div className={`progress-value ${visible?"progress-appear":""}`} style={{width:`${progressValue * 10}%`}}>
                <span style={
                    //@ts-expect-error Ele espera que hajam apenas atributos inerentes a React.CSSProperties, mas é possível passar variáveis por aqui e o TS tá reclamando.
                    {"--space":`${calculateSpanSpace(progressValue)}rem`}}
                >
                    {`${progressValue} / 10`}
                </span>
            </div>
            </div>
        </div>
    </>)
}
