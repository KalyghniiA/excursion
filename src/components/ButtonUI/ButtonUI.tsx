import type {ButtonUIProps} from "./ButtonUI.props.ts";
import styles from "./ButtonUI.module.css";


export function ButtonUI({children, ...props}: ButtonUIProps) {
	return (
		<button className={styles.btn} {...props}>{children}</button>
	);
}