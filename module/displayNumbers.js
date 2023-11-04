import { createElement, counterElement } from "./createElement.js";

export function displayNumbers(tab) {
	resetDisplay();
	for (let i = 0; i < 6; i++) {
		createElement(tab[i]);
	}
}

function resetDisplay() {
	const numbers = document.querySelectorAll('.num-box');
	const content = document.querySelector('.generation-number');
	if (numbers.length > 5) {
		content.innerHTML = '';
		counterElement.reset();
	}
}