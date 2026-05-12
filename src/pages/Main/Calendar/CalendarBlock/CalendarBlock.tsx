import type {ICalendarBlockProps} from "./CalendarBlock.props.ts";
import styles from "./CalendarBlock.module.css";
import {ButtonCalendarUI} from "../../../../components/ButtonCalendarUI/ButtonCalendarUI.tsx";

export function CalendarBlock({month, year}: ICalendarBlockProps) {
	const sizeDays = 42;
	const days = generateDays(month, year, sizeDays);



	return (
		<section className={styles.container}>
			{days.map((day, index) => (<ButtonCalendarUI key={index}>{day}</ButtonCalendarUI>))}
		</section>
	);
}

const generateDays = (month: number, year: number, size: number): number[] => {
	const days = [];
	const firstDayForMonth = new Date(year, month, 1);
	const firstDayWeekForMonth = firstDayForMonth.getDay() === 0 ? 6 : firstDayForMonth.getDay() - 1;
	const lastDayForMonth = new Date(year, month + 1, 0);
	const lastDayPrevMonth = new Date(year, month, 0);

	console.log(firstDayWeekForMonth);

	for (let i = 0; i < firstDayWeekForMonth; i++) {
		days[i] = lastDayPrevMonth.getDate() - (firstDayWeekForMonth - 1) + i;
	}

	let iterator = 1;

	for (let i = firstDayWeekForMonth; i < lastDayForMonth.getDate() + firstDayWeekForMonth; i++) {
		days[i] = iterator++;
	}

	if (days.length !== size) {
		for (let i = 1; days.length < size; i++) {
			days.push(i);
		}

	}

	return days;
};