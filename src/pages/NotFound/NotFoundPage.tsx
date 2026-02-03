import { Link } from "react-router-dom";
import { MdKeyboardReturn } from "react-icons/md";
import NavBar from "@/components/NavBar/navbar.tsx";
import Footer from "@/components/Footer/footer.tsx";
import ParticleComponent from "@/components/Particles/particles.tsx";
import "./NotFound.css"

export default function NotFoundPage() {
	return (<>
		<ParticleComponent/>
		<NavBar/>
		<main className="pagina-not-found">
			<h1 id="not-found-title">❌ Página não encontrada!</h1>
			<Link id="home" to={"/"} aria-label="Voltar página inicial"><MdKeyboardReturn/></Link>
		</main>
		<Footer/>
	</>);
}
