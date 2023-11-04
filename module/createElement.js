export function createElement(tab) {
	const conteiner = document.querySelector('.generation-number');
	const numBox = document.createElement("div");
	numBox.classList.add('num-box');
	numBox.innerHTML = `
	<div class="lp">${counterElement.start()}</div>
		<div class="num">${tab}</div>
		`;
		conteiner.appendChild(numBox);
}

export const counterElement = {
	num: 1,
	start: function() {
		return this.num++;
	},
	reset: function() {
		this.num = 1;
	}
};