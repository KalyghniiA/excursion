import styles from "./Affiche.module.css";
import {Link} from "react-router-dom";
import CalendarImg from "../../../assets/calendar.png";
import type {AfficheProps} from "./Affiche.props.ts";
import {Event} from "../../../components/Event/Event.tsx";

export function Affiche ({events}:AfficheProps) {


	return (
		<section className={styles.affiche}>
			<h2 className={styles.header}>Афиша</h2>
			<Link to={"/"} className={styles.calendar}>
				<img src={CalendarImg} width="40px" height="40px" alt="calendar" />
				<span>Все мероприятия</span>
			</Link>
			<ul className={styles.list}>
				{events.map(event => {
					return (
						<li key={event.id}>
							<Event eventData={event} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}