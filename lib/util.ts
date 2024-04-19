import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const scheduleDate = (dateString: string) => {
	const date = new Date(dateString);
	const dayOfWeek = date.getDay();
	const weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const month = date.toLocaleString('default', { month: 'long' });
	const dayOfMonth = date.getDate();
	const suffix = getOrdinalSuffix(dayOfMonth);
	return [
		weekdays[dayOfWeek],
		`${month} ${dayOfMonth}${suffix}, ${date.getFullYear()}`,
	];
};

const getOrdinalSuffix = (day: number) => {
	const ones = day % 10;
	const tens = Math.floor(day / 10) % 10;
	if (tens !== 1) {
		switch (ones) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
		}
	}
	return 'th';
};

export const conferencesDate = (dateString: string) => {
	const date = new Date(dateString);
	const dayOfMonth = date.getDate();
	const month = date.toLocaleString('default', { month: 'long' });
	return `${dayOfMonth} ${month}, ${date.getFullYear()}`;
};
