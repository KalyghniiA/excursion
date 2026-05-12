import type {ButtonCalendarUIProps} from "./ButtonCalendarUI.props.ts";
import styles from "./ButtonCalendarUI.module.css";
import cn from "classnames";

export function ButtonCalendarUI({children, isActive = false, isNavigation = false, ...props}: ButtonCalendarUIProps) {
	return (
		<button className={cn(
			styles.btn,
			{
				[styles["btn-active"]]: isActive,
				[styles["btn-navigation"]]: isNavigation
			}
		)}
		        {...props}>
			{children}
		</button>
	);
}