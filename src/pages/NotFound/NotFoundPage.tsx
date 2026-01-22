import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import { MdKeyboardReturn } from "react-icons/md";
import "./NotFound.css"

export default function NotFoundPage() {
	return (
		<>
			<NavBar />
			<main>
				<h1 id="not-found-title">❌ Página não encontrada!</h1>
                <Link id="home" to={"/"} aria-label="Voltar página inicial"><MdKeyboardReturn/></Link>
			</main>
			<Footer />
		</>
	);
}
