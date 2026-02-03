import { FaLinkedin,FaSquareGithub,FaSquareInstagram, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./contatos.css";

export default function Contatos(){

    return(<>
        <h2 id="contacts-title">Contatos</h2>
        <hr />
        <section id="contacts-section">
            <Link
                to="https://linkedin.com/in/erik-gc"
                rel="noopener noreferrer"
                target="_blank"
                id="linkedin"
            ><span className="color-change">&lt;</span><FaLinkedin className="color-change"/>/in/erik-gc<span className="color-change">&gt;</span></Link>
            <Link
                to="https://github.com/mdeloko"
                rel="noopener noreferrer"
                target="_blank"
                id="github"
            ><span className="color-change">&lt;</span><FaSquareGithub className="color-change"/>/mdeloko<span className="color-change">&gt;</span></Link>
            <Link
                to="https://instagram.com/erik.coutinho03"
                rel="noopener noreferrer"
                target="_blank"
                id="instagram"
            ><span className="color-change">&lt;</span><FaSquareInstagram className="color-change"/>/erik.coutinho03<span className="color-change">&gt;</span></Link>
            <Link
                to="mailto:erikgcoutinho03@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                id="email"
            ><span className="color-change">&lt;</span><FaEnvelope className="color-change"/>@gmail.com<span className="color-change">&gt;</span></Link><br />
        </section>
        <svg width="0" height="0" style={{ position: "absolute" }}>
            <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#6228d7" offset="0%" />
                <stop stopColor="#ee2a7b" offset="50%" />
                <stop stopColor="#f9ce34" offset="100%" />
            </linearGradient>
        </svg>
    </>)
}