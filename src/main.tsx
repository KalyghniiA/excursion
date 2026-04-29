import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout.tsx";
import {Main} from "./pages/Main/Main.tsx";
import {Affiche} from "./pages/Affiche/Affiche.tsx";
import {Tickets} from "./pages/Tickets/Tickets.tsx";
import {Contacts} from "./pages/Contacts/Contacts.tsx";
import {History} from "./pages/History/History.tsx";
import {Gallery} from "./pages/Gallery/Gallery.tsx";
import {Plans} from "./pages/Plans/Plans.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Main />
			},
			{
				path: "/affiche",
				element: <Affiche />
			},
			{
				path: "/tickets",
				element: <Tickets />
			},
			{
				path: "/contacts",
				element: <Contacts />
			},
			{
				path: "/history",
				element: <History />
			},
			{
				path: "/gallery",
				element: <Gallery />
			},
			{
				path: "/plans",
				element: <Plans />
			}
		]
	}
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
