import styles from "./Main.module.css";
import {Promo} from "./Promo/Promo.tsx";
import type {Affiche} from "../../interfaces/Affiche.interface.ts";

const mockEvents: Affiche[] = [
	{
		id: "1",
		name: "Антонио Вивальди. Времена года",
		promo: "Посвящение Фрэнку Синатре.",
		date: "2026-06-06",
		genre: "Джаз",
		posterUrl: "./assets/poster1.png",
		start: "19:00",
		rating: "6+"
	},
	{
		id: "2",
		name: "Опера VS Оперетта",
		promo: "Санкт-Петербургский камерный оркестр Olympic Orchestra",
		date: "2026-06-30",
		genre: "Классика",
		posterUrl: "./assets/poster2.png",
		start: "19:00"
	}
];

export function Main() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<Promo events={mockEvents} />
			</div>
		</main>
	);
}