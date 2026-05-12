import styles from "./Main.module.css";
import {Promo} from "./Promo/Promo.tsx";
import type {IAffiche} from "../../interfaces/IAffiche.interface.ts";
import {Affiche} from "./Affiche/Affiche.tsx";
import type {INews} from "../../interfaces/INews.interface.ts";
import {News} from "./News/News.tsx";
import {Calendar} from "./Calendar/Calendar.tsx";


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

const newsMock: INews[] = [
	{
		id: "1",
		name: "Переносы / Отмена мероприятий",
		description: "11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.",
		imageUrl: "/public/news1.png"
	},
	{
		id: "2",
		name: "Переносы / Отмена мероприятий",
		description: "11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.",
		imageUrl: "/public/news2.png"
	}
];

export function Main() {
	return (
		<main className={styles.main}>
			<Promo events={mockEvents} />
			<Affiche events={mockEvents} />
			<div className={styles["info-container"]}>
				<News newsData={newsMock} />
				<Calendar />
			</div>
		</main>
	);
}