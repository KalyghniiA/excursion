import styles from "./Event.module.css";
import type {EventProps} from "./Event.props.ts";
import GenreImg from "../../assets/genre.png";
import StartTimeImg from "../../assets/start-time.png";
import AgeImg from "../../assets/age.png";
import {LinkUI} from "../LinkUI/LinkUI.tsx";
import {getMonthNameToEvent} from "../../helpers/translations.ts";

export function Event({eventData}:EventProps) {
	const dateEvent: Date = new Date(eventData.date);
	const month = getMonthNameToEvent(dateEvent.getMonth());

	return (
		<article className={styles.container}>
			<p className={styles["start"]}>
				<span className={styles["start__day"]}>{dateEvent.getDate()}</span>
				{month}
			</p>
			<img srcSet={eventData.posterMainUrl} alt={eventData.name} className={styles.poster} />
			<div className={styles["info__container"]}>
				<h3 className={styles.name}>{eventData.name}</h3>
				<p className={styles.promo}>{eventData.promo}</p>
				<ul className={styles["params__list"]}>
					<li className={styles["params__item"]}>
						<img src={GenreImg} alt={"genre"} className={styles["param__img"]} />
						<span className={styles["param__text"]}>{eventData.genre}</span>
					</li>
					{
						eventData.start &&
							<li className={styles["params__item"]}>
								<img src={StartTimeImg} alt={"start"} className={styles["param__img"]} />
								<span className={styles["param__text"]}>{eventData.start}</span>
							</li>
					}
					{
						eventData.rating &&
							<li className={styles["params__item"]}>
								<img src={AgeImg} alt={"age"} className={styles["param__img"]} />
								<span className={styles["param__text"]}>{eventData.rating}</span>
							</li>
					}
				</ul>
			</div>
			<LinkUI to={"/"}>Заказать билет</LinkUI>
		</article>
	);
}

