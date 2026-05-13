import styles from "./Previews.module.css";
import {Link} from "react-router-dom";
import CalendarImg from "../../../assets/calendar.png";
import type {IPreviews} from "../../../interfaces/IPreviews.interface.ts";
import {getMonthNameToEvent} from "../../../helpers/translations.ts";


export function Previews({data}: {data: IPreviews[]}) {
	return (
		<section className={styles.container}>
			<h3 className={styles.header}>Краткие анонсы</h3>
			<Link to={"/"} className={styles.calendar}>
				<img src={CalendarImg} width="40px" height="40px" alt="calendar" />
				<span>Все мероприятия</span>
			</Link>
			<ul className={styles.list}>
				{data.map(item => (
					<li className={styles.item} key={item.id}>
						<p className={styles["item__date"]}>
							<span className={styles["item__date-number"]}>{new Date(item.date).getDate()}</span>
							{getMonthNameToEvent(new Date(item.date).getMonth())}
						</p>
						<Link to={`/event?id=${item.id}`} className={styles["item__link"]}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}