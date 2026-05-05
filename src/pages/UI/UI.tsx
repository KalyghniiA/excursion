import styles from "./UI.module.css";
import type {IAffiche} from "../../interfaces/IAffiche.interface.ts";
import {Event} from "../../components/Event/Event.tsx";
import {LinkUI} from "../../components/LinkUI/LinkUI.tsx";
import {ButtonUI} from "../../components/ButtonUI/ButtonUI.tsx";


const mockEvents: IAffiche =
	{
		id: "1",
		name: "Антонио Вивальди. Времена года",
		promo: "Посвящение Фрэнку Синатре.",
		date: "2026-06-06",
		genre: "Джаз",
		posterUrl: "/public/poster1.png",
		posterMainUrl: "/public/poster1-main.png",
		start: "19:00",
		rating: "6+"
	};

export function UI() {
	return (
		<main className={styles.main}>
			<LinkUI to={"/"}>Link</LinkUI>
			<ButtonUI type={"button"}>Button</ButtonUI>
			<Event eventData={mockEvents} />
		</main>
	);
}