import NavBar from "@/components/NavBar/navbar.tsx";
import Footer from "@/components/Footer/footer.tsx";
import ParticleComponent from "@/components/Particles/particles.tsx";
import { Outlet,useLocation } from "react-router-dom";

export default function AppLayout({children}:React.PropsWithChildren){
    const location = useLocation();

    function getPageClass(){
        return location.pathname.split("/")[1] || "home"
    }
    return(<>
        <ParticleComponent/>
        <NavBar/>
        <main className={`pagina-${getPageClass()}`} >
            {children}
            <Outlet/>
        </main>
        <Footer/>
    </>)
}