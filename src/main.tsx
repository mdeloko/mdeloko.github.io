import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import Cursos from "./pages/Cursos/Cursos.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFound/NotFoundPage.tsx";
import "./index.css";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "*", element: <NotFoundPage /> },
	{ path: "/cursos-e-formacoes", element: <Cursos /> },
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
