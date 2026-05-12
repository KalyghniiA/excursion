import styles from "./Calendar.module.css";
import { useState} from "react";
import {getMonthNameToCalendar} from "../../../helpers/translations.ts";
import {ButtonCalendarUI} from "../../../components/ButtonCalendarUI/ButtonCalendarUI.tsx";
import {CalendarBlock} from "./CalendarBlock/CalendarBlock.tsx";

export function Calendar () {
	const [month, setMonth] = useState(new Date().getMonth());
	const [year, setYear] = useState(new Date().getFullYear());
	const [monthName, setMonthName] = useState(getMonthNameToCalendar(month));

	const handleMonthChange = (event: "prev" | "next") => {

		switch (event) {
		case "prev":
			if (month === 0) {
				setMonth(11);
				setYear(year - 1);
				setMonthName(getMonthNameToCalendar(11));
			} else {
				setMonth(month - 1);
				setMonthName(getMonthNameToCalendar(month - 1));
			}
			break;
		case "next":
			if (month === 11) {
				setMonth(0);
				setYear(year + 1);
				setMonthName(getMonthNameToCalendar(0));
			}  else {
				setMonth(month + 1);
				setMonthName(getMonthNameToCalendar(month + 1));
			}
			break;
		default:
			throw new Error("Unhandled event");
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.poster}>
				<h2 className={styles.title}>
					Обзорные экскурсии
				</h2>
			</div>
			<section className={styles.calendar}>
				<div className={styles["calendar__container-month"]}>
					<p className={styles["calendar__month"]}>{monthName}</p>
					<div className={styles["calendar__button-container"]}>
						<ButtonCalendarUI isNavigation={true} onClick={() => handleMonthChange("prev") }>
							<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.75 0.75L0.75 5.75L5.75 10.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</ButtonCalendarUI>
						<ButtonCalendarUI isNavigation={true} onClick={() => handleMonthChange("next")}>
							<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.75 0.75L0.75 5.75L5.75 10.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</ButtonCalendarUI>
					</div>
				</div>
				<CalendarBlock month={month} year={year} />
			</section>
		</section>
	);
}

