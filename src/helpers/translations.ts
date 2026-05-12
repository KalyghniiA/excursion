export const getMonthNameToEvent = (month: number) => {
	switch (month) {
	case 0:
		return "Января";
	case 1:
		return "Февраля";
	case 2:
		return "Марта";
	case 3:
		return "Апреля";
	case 4:
		return "Мая";
	case 5:
		return "Июня";
	case 6:
		return "Июля";
	case 7:
		return "Августа";
	case 8:
		return "Сентября";
	case 9:
		return "Октября";
	case 10:
		return "Ноября";
	case 11:
		return "Декабря";
	default:
		throw new Error("Данное число не является месяцем");
	}
};

export const getMonthNameToCalendar = (month: number) => {
	switch (month) {
	case 0:
		return "Январь";
	case 1:
		return "Февраль";
	case 2:
		return "Март";
	case 3:
		return "Апрель";
	case 4:
		return "Май";
	case 5:
		return "Июнь";
	case 6:
		return "Июль";
	case 7:
		return "Август";
	case 8:
		return "Сентябрь";
	case 9:
		return "Октябрь";
	case 10:
		return "Ноябрь";
	case 11:
		return "Декабрь";
	default:
		throw new Error("Данное число не является месяцем");
	}
};