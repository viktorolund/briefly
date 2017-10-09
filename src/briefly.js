module.exports = class Briefly {
	static formatISO(date) {
		// Handle "YYYY/MM/DD HH:mm:SS" Date formats for Safari
		// If they are in that format we'll return "YYYY/MM/DDTHH:mm:SS"
		if (date.split(" ").length > 1)
			return new Date(date.replace(" ", "T")).toISOString();
		else return new Date(date).toISOString();
	}
	static leadZeroes(str) {
		return str.length > 1 ? str : "0" + str;
	}

	// DD/MM/YYYY ISO - 04-08-2016
	static ddmmyyISO() {
		let d = new Date();

		let day = d.getDate().toString();
		let month = (d.getMonth() + 1).toString();
		let year = d.getFullYear().toString();

		return `${year}-${this.leadZeroes(month)}-${this.leadZeroes(day)}`;
	}

	// DD/MM/YYYY - 04/08/2016
	static ddmmyyyy(date) {
		let d = new Date(date);

		let day = d.getDate().toString();
		let month = (d.getMonth() + 1).toString();
		let year = d.getFullYear().toString();

		return `${this.leadZeroes(day)}/${this.leadZeroes(month)}/${year}`;
	}

	// DD/MM - 14/07
	static ddmm(date) {
		let d = new Date(date);

		let day = d.getDate().toString();
		let month = (d.getMonth() + 1).toString();

		return `${this.leadZeroes(day)}/${this.leadZeroes(month)}`;
	}

	// HH:MM - 16:08
	static hhmm(date) {
		let d = new Date(date);

		let hour = d.getHours().toString();
		let minutes = d.getMinutes().toString();

		return `${this.leadZeroes(hour)}:${this.leadZeroes(minutes)}`;
	}

	// HH:MM DD/MM - 16:08 14/07
	static hhmmddmm(date) {
		let d = new Date(date);

		let hour = d.getHours().toString();
		let minutes = d.getMinutes().toString();
		let day = d.getDate().toString();
		let month = (d.getMonth() + 1).toString();

		return `${this.leadZeroes(hour)}:${this.leadZeroes(
			minutes
		)} ${this.leadZeroes(day)}/${this.leadZeroes(month)}`;
	}

	static hhmmss(date) {
		let d = new Date(date);

		let hour = d.getHours().toString();
		let minutes = d.getMinutes().toString();
		let seconds = d.getSeconds().toString();

		return `${this.leadZeroes(hour)}:${this.leadZeroes(
			minutes
		)}:${this.leadZeroes(seconds)}`;
	}

	static weekDayFull(date) {
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
};
