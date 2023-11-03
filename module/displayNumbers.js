import { createElement, clearCounter } from "./createElement.js";

const content = document.querySelector('.generation-number');
const number = document.querySelectorAll('.num-box');

export function displayNumbers(tab) {
	resetDisplay();
	for (let i = 0; i < 6; i++) {
		createElement(tab[i]);
	}
}

function resetDisplay() {
	if (number.length < 6) {
		content.innerHTML = '';
		clearCounter();
	}
}