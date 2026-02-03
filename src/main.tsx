import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Sobre from "@/pages/Sobre/Sobre.tsx";
import Cursos from "@/pages/Cursos/Cursos.tsx";
import Home from "@/pages/Home/Home.tsx";
import Projetos from "@/pages/Projetos/projetos.tsx";
import NotFoundPage from "@/pages/NotFound/NotFoundPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "@/layout.tsx";
import "./index.css";
import Contatos from "./pages/Contatos/contatos";

const router = createBrowserRouter([
	{ path: "/", element: <AppLayout/>, children:[
		{ index:true , element: <Home/> },
		{ path: "sobre", element: <Sobre/> },
		{ path: "cursos-e-formacoes", element: <Cursos/> },
		{ path: "projetos", element: <Projetos/> },
		{ path: "contatos", element: <Contatos/> }
	],},
	{ path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>,
);
