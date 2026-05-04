import styles from "./Logo.module.css";
import {Link, type LinkProps} from "react-router-dom";

export function Logo ({to, onClick}:LinkProps ) {
	return (
		<Link to={to} onClick={onClick} className={styles.logo}>Сайт концертно - экскурсионных программ</Link>
	);
}