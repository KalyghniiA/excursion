import styles from "./Main.module.css";
import {Promo} from "./Promo/Promo.tsx";
import type {IAffiche} from "../../interfaces/IAffiche.interface.ts";
import {Affiche} from "./Affiche/Affiche.tsx";


const mockEvents: IAffiche[] = [
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
	},
	{
		id: "2",
		name: "Опера VS Оперетта",
		promo: "Санкт-Петербургский камерный оркестр Olympic Orchestra",
		date: "2026-06-30",
		genre: "Классика",
		posterUrl: "/public/poster2.png",
		posterMainUrl: "/public/poster2.png",
		start: "19:00"
	}
];

export function Main() {
	return (
		<main className={styles.main}>
			<Promo events={mockEvents} />
			<Affiche events={mockEvents} />
		</main>
	);
}