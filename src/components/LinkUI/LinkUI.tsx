import styles from "./LinkUI.module.css";
import {Link, type LinkProps} from "react-router-dom";

export function LinkUI({to, children}: LinkProps) {
	return (
		<Link to={to} className={styles.link}>{children}</Link>
	);
}