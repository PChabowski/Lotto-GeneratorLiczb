function makeTabNumb() {
	const numbers = [];
	let i = 0;
	while (numbers.length < 6) {
		let num = random();
		if (checkTab(num, numbers)) {
				numbers[i] = num;
				i++;
			}
		}
	return numbers;
}

function checkTab(num, tab) {
	for (let i = 0; i < tab.length; i++) {	
		if (tab[i] == num){
			return false;
		}
	}
	return true;
}

function random() {
  let numRand = Math.floor(Math.random() * 49) + 1;
  return numRand;
}

function displayNumbers(tab) {
	let view = document.getElementsByClassName("num");
	for (let i = 0; i < view.length; i++) {
		view[i].innerHTML = tab[i];
	}
}

function sortNumbers(tab) {
	tab.sort(function(a, b) {return a-b});
	return tab;
}

function start() {
	const tab = makeTabNumb();
	sortNumbers(tab);
	displayNumbers(tab);
}

window.onload = start;