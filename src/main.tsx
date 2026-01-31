import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Sobre from "./pages/Sobre/Sobre.tsx";
import Cursos from "./pages/Cursos/Cursos.tsx";
import Home from "./pages/Home/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFound/NotFoundPage.tsx";
import "./index.css";
import AppLayout from "./layout.tsx";

const router = createBrowserRouter([
	{ path: "/", element: <AppLayout />, children:[
		{ index:true , element: <Home /> },
		{ path: "*", element: <NotFoundPage /> },
		{ path:"sobre", element: <Sobre/> },
		{ path: "cursos-e-formacoes", element: <Cursos /> },
	] },
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>,
);
