let i = 1;

function counter() {
	return i++;
}

export function clearCounter() {
	i = 1;
}

export function createElement(tab) {
	const conteiner = document.querySelector('.generation-number');
	const numBox = document.createElement("div");
	numBox.classList.add('num-box');
	numBox.innerHTML = `
		<div class="lp">${counter()}</div>
		<div class="num">${tab}</div>
	`;
	conteiner.appendChild(numBox);
}

