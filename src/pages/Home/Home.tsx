import "./Home.css"

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin,FaSquareGithub,FaSquareInstagram, FaEnvelope, FaClipboardCheck } from "react-icons/fa6";

const frases = ["desenvolvedor","guitarrista","apaixonado por tecnologia","streamer"];
const intervalo = 3000;

export default function Home(){
    const [frase,setFrase] = useState<string>(frases[0])
    const i = useRef<number>(0)
    const modalTimeRef = useRef<number>(0)

    
    useEffect(()=>{
        const intervalId = setInterval(function(){
            i.current++
            if( i.current == frases.length ) i.current=0;
            setFrase(frases[i.current])
        },intervalo)
        return ()=>clearInterval(intervalId);
    },[])

    function handleMailClick(e:React.MouseEvent<HTMLAnchorElement,MouseEvent>){
        e.preventDefault();
        const email = "erikgcoutinho03@gmail.com";
        navigator.clipboard.writeText(email);
        window.location.href = `mailto:${email}`
        const dialog = document.getElementById('email-notification') as HTMLDialogElement | null

        if(modalTimeRef.current) clearTimeout(modalTimeRef.current);

        dialog?.showModal()
        modalTimeRef.current = setTimeout(function(){
            dialog?.close();
        },intervalo)
    }

    return(<>
            <h1 className="title">Erik G. Coutinho</h1>
            <h3 id="desc-title">Sou <b key={frase} id="frase" className="text-animate">{frase}</b></h3>

            <hr id="home-division-bar"/>
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#6228d7" offset="0%" />
                    <stop stopColor="#ee2a7b" offset="50%" />
                    <stop stopColor="#f9ce34" offset="100%" />
                </linearGradient>
            </svg>

            <div id="home-social-container">
                <Link id="linkedin" to="https://linkedin.com/in/erik-gc" target="_blank" aria-label="Linkedin"><FaLinkedin/></Link>
                <Link id="github" to="https://github.com/mdeloko" target="_blank" aria-label="Github"><FaSquareGithub/></Link>
                <Link id="instagram" to="https://instagram.com/erik.coutinho03" target="_blank" aria-label="Instagram"><FaSquareInstagram /></Link>
                <Link id="email" to="#" onClick={handleMailClick} rel="noopener noreferrer" aria-label="Enviar email"><FaEnvelope/></Link>
            </div>
            <dialog id="email-notification">
                <FaClipboardCheck/>
                <p>E-mail copiado para área de transferência!</p>
            </dialog>
    </>)
}