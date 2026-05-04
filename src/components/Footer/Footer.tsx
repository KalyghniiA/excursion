import styles from "./Footer.module.css";
import {Logo} from "../Logo/Logo.tsx";
import {Link} from "react-router-dom";
import cn from "classnames";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Logo to={"/"} />
				<section className={styles["nav-section"]}>
					<h3 className={styles.title}>Мероприятия</h3>
					<ul className={cn(styles.list, styles["nav-list"])}>
						<li className={cn(styles["list__item"], styles["nav-list__item"])}>
							<Link to={"/"} className={styles["nav-list__link"]}>Экскурсии</Link>
						</li>
						<li className={cn(styles["list__item"], styles["nav-list__item"])}>
							<Link to={"/"} className={styles["nav-list__link"]}>Концерты</Link>
						</li>
						<li className={cn(styles["list__item"], styles["nav-list__item"])}>
							<Link to={"/"} className={styles["nav-list__link"]}>Афиша</Link>
						</li>
					</ul>
				</section>
				<section className={styles.contacts}>
					<h3 className={styles.title}>Контакты</h3>
					<ul className={cn(styles.list, styles["contact-list"])}>
						<li className={cn(styles["list__item"], styles["contact-list__item"])}><p className={styles.contact}>г. Санкт-Петербург, Невский пр., д. 1</p></li>
						<li className={cn(styles["list__item"], styles["contact-list__item"])}><a href={"mailto:text@mail. ru"} className={styles.contact}>text@mail. ru</a></li>
						<li className={cn(styles["list__item"], styles["contact-list__item"])}><a href={"tel:8121234567"} className={styles.contact}>(812) 123-45-67</a></li>
					</ul>
				</section>
			</div>
		</footer>
	);
}