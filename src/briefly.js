export function formatISO(date) {
	// Handle "YYYY/MM/DD HH:mm:SS" Date formats for Safari
	// If they are in that format we'll return "YYYY/MM/DDTHH:mm:SS"
	if (date.toString().split(" ").length > 1)
		return new Date(date.replace(" ", "T")).toISOString();
	else return new Date(date).toISOString();
}
export function leadZeroes(str) {
	return str.length > 1 ? str : "0" + str;
}

// DD/MM/YYYY ISO - 04-08-2016
export function ddmmyyISO() {
	let d = new Date();

	let day = d.getDate().toString();
	let month = (d.getMonth() + 1).toString();
	let year = d.getFullYear().toString();

	return `${year}-${leadZeroes(month)}-${leadZeroes(day)}`;
}

// DD/MM/YYYY - 04/08/2016
export function ddmmyyyy(date) {
	let d = new Date(date);

	let day = d.getDate().toString();
	let month = (d.getMonth() + 1).toString();
	let year = d.getFullYear().toString();

	return `${leadZeroes(day)}/${leadZeroes(month)}/${year}`;
}

// DD/MM - 14/07
export function ddmm(date) {
	let d = new Date(date);

	let day = d.getDate().toString();
	let month = (d.getMonth() + 1).toString();

	return `${leadZeroes(day)}/${leadZeroes(month)}`;
}

// HH:MM - 16:08
export function hhmm(date) {
	let d = new Date(date);

	let hour = d.getHours().toString();
	let minutes = d.getMinutes().toString();

	return `${leadZeroes(hour)}:${leadZeroes(minutes)}`;
}

// HH:MM DD/MM - 16:08 14/07
export function hhmmddmm(date) {
	let d = new Date(date);

	let hour = d.getHours().toString();
	let minutes = d.getMinutes().toString();
	let day = d.getDate().toString();
	let month = (d.getMonth() + 1).toString();

	return `${leadZeroes(hour)}:${leadZeroes(minutes)} ${leadZeroes(
		day
	)}/${leadZeroes(month)}`;
}

// HH:MM:SS - 16:08:22
export function hhmmss(date) {
	let d = new Date(date);

	let hour = d.getHours().toString();
	let minutes = d.getMinutes().toString();
	let seconds = d.getSeconds().toString();

	return `${leadZeroes(hour)}:${leadZeroes(minutes)}:${leadZeroes(seconds)}`;
}

export function weekDayFull(date) {
	let weekDays = [
		"domingo",
		"segunda-feira",
		"terça-feira",
		"quarta-feira",
		"quinta-feira",
		"sexta-feira",
		"sábado"
	];

	return weekDays[new Date(date).getDay()];
}
