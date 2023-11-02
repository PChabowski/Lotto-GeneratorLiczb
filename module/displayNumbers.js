export function displayNumbers(tab) {
	let view = document.getElementsByClassName("num");
	for (let i = 0; i < view.length; i++) {
		view[i].innerHTML = tab[i];
	}
}