import { makeNumberTable } from "./makeNumberTable.js";
import { displayNumbers } from "./displayNumbers.js";
import { sortNumbers } from "./sortNumbers.js";

export function start() {
	const btnStart = document.querySelector('.menu-button > .btn');
	btnStart.onclick = start;
	const tab = makeNumberTable();
	sortNumbers(tab);
	displayNumbers(tab);
}