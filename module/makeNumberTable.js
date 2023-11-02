import { randomNumber } from "./randomNumber.js";
import { checkTable } from "./checkTable.js";

export function makeNumberTable() {
	const numbers = [];
	let i = 0;
	while (numbers.length < 6) {
		let num = randomNumber();
		if (checkTable(num, numbers)) {
				numbers[i] = num;
				i++;
			}
		}
	return numbers;
}