import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import type {ActiveItem} from "./Header.iterface.ts";
import cn from "classnames";

export function Header() {
	const [activeItem, setActiveItem] = useState<ActiveItem>("none");

	const handleClick = (item: ActiveItem) => {
		setActiveItem(item);
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to={"/"} onClick={() => handleClick("none")} className={styles.logo}>Сайт концертно - экскурсионных программ</Link>
				<nav className={styles.nav}>
					<ul className={styles["nav__list"]}>
						<li className={cn(styles["nav__list-item"],{[styles["nav__list-item--active"]]: activeItem === "affiche"})} onClick={() => handleClick("affiche")}>
							<Link className={styles["nav__link"]} to="/affiche">
								Афиша
							</Link>
						</li>
						<li className={cn(styles["nav__list-item"],{[styles["nav__list-item--active"]]: activeItem === "tickets"})} onClick={() => handleClick("tickets")}>
							<Link className={styles["nav__link"]} to="/tickets">
								Заказ билетов
							</Link>
						</li>
						<li className={cn(styles["nav__list-item"],{[styles["nav__list-item--active"]]: activeItem === "contacts"})} onClick={() => handleClick("contacts")}>
							<Link className={styles["nav__link"]} to="/contacts">
								Контакты
							</Link>
						</li>
						<li className={cn(styles["nav__list-item"],{[styles["nav__list-item--active"]]: activeItem === "history"})} onClick={() => handleClick("history")}>
							<Link className={styles["nav__link"]} to="/history">
								История дворца
							</Link>
						</li>
						<li className={cn(styles["nav__list-item"],{[styles["nav__list-item--active"]]: activeItem === "gallery"})} onClick={() => handleClick("gallery")}>
							<Link className={styles["nav__link"]} to="/gallery">
								Галерея
							</Link>
						</li>
						<li className={cn(styles["nav__list-item"],{[styles["nav__list-item--active"]]: activeItem === "plans"})} onClick={() => handleClick("plans")}>
							<Link className={styles["nav__link"]} to="/plans">
								Планы залов
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}