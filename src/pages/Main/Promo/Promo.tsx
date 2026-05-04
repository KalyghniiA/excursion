import styles from "./Promo.module.css";
import {Link} from "react-router-dom";
import type {PromoProps} from "./Promo.props.ts";
import imgEmpty from "../../../assets/empty-img.png";

export function Promo({events}: PromoProps) {

	const posterUrl = events.length === 0 ? imgEmpty : events[0].posterUrl;

	return (
		<section className={styles.promo}>
			<div className={styles["promo__poster"]}>
				<img src={posterUrl} alt={"poster"} className={styles["promo__poster-img"]} />
			</div>
			<ul className={styles["promo__list"]}>
				{events.map(event => {
					return (
						<li className={styles["promo__list-item"]}>
							<Link to={"/"} className={styles.item}>
								<img src={event.posterUrl} alt={event.name} className={styles["item__poster"]} />
								<p className={styles["item__title"]}>event.name</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}


