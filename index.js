module.exports = class Briefly {
	formatISO(date) {
		// Handle "YYYY/MM/DD HH:mm:SS" Date formats for Safari
		// If they are in that format we'll return "YYYY/MM/DDTHH:mm:SS"
		if (date.split(" ").length > 1) return new Date(date.replace(" ", "T")).toISOString();
		else return new Date(date).toISOString();
	}
	leadZeroes(str) {
		return str.length > 1 ? str : "0" + str;
	}

	// DD/MM/YYYY ISO - 04-08-2016
	ddmmyyISO() {
		let d = new Date();

		let day = d.getDate().toString();
		let month = (d.getMonth() + 1).toString();
		let year = d.getFullYear().toString();

		return `${year}-${this.leadZeroes(month)}-${this.leadZeroes(day)}`;
	}

	// DD/MM/YYYY - 04/08/2016 
	ddmmyyyy(date) {
		let d = new Date(date);

		let day = d.getDate().toString();
		let month = (d.getMonth() + 1).toString();
		let year = d.getFullYear().toString();

		return `${this.leadZeroes(day)}/${this.leadZeroes(month)}/${year}`;
	}

	// DD/MM - 14/07
	ddmm(date) {
		let d = new Date(date);

		let day = d.getDate().toString();
		let month = (d.getMonth() + 1).toString();

		return `${this.leadZeroes(day)}/${this.leadZeroes(month)}`;
	}

	// HH:MM - 16:08
	hhmm(date) {
		let d = new Date(date);

		let hour = d.getHours().toString();
		let minutes = d.getMinutes().toString();

		return `${this.leadZeroes(hour)}:${this.leadZeroes(minutes)}`;
	}

	weekDayFull(date) {
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