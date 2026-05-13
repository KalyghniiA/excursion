import styles from "./Affiche.module.css";
import type {IAffiche} from "../../interfaces/IAffiche.interface.ts";
import {Event} from "../../components/Event/Event.tsx";

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
	},
	{
		id: "3",
		name: "Опера VS Оперетта",
		promo: "Санкт-Петербургский камерный оркестр Olympic Orchestra",
		date: "2026-06-30",
		genre: "Классика",
		posterUrl: "/public/poster2.png",
		posterMainUrl: "/public/poster2.png",
		start: "19:00"
	}
	,
	{
		id: "4",
		name: "Опера VS Оперетта",
		promo: "Санкт-Петербургский камерный оркестр Olympic Orchestra",
		date: "2026-06-30",
		genre: "Классика",
		posterUrl: "/public/poster2.png",
		posterMainUrl: "/public/poster2.png",
		start: "19:00"
	},
	{
		id: "5",
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
		id: "6",
		name: "Антонио Вивальди. Времена года",
		promo: "Посвящение Фрэнку Синатре.",
		date: "2026-06-06",
		genre: "Джаз",
		posterUrl: "/public/poster1.png",
		posterMainUrl: "/public/poster1-main.png",
		start: "19:00",
		rating: "6+"
	}
];


export function Affiche() {
	return (
		<main className={styles.container}>
			<h1 className={styles.header}>Афиша</h1>
			<ul className={styles.list}>
				{mockEvents.map((item: IAffiche) => (<li key={item.id}><Event eventData={item} /></li>))}
			</ul>
		</main>
	);
}