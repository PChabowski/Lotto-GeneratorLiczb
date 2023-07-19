function geneTab() {
  const numbers = [];
  while(numbers.length < 6) {
	var num = random();
	if (checkTab(num, numbers)) {
		numbers.push(num);
	  }
  }
  numbers.sort(function(a, b) {return a-b});
  return numbers;
}

function checkTab(num, tab) {
	for (var i = 0; i < tab.length; i++) {	
		if (num == tab[i]){
			return false;
		}
	}
	return true;
}

function random() {
  var numRand = Math.floor(Math.random() * 49) + 1;
  return numRand;
}

function displayNumber(tab) {
  var view = document.getElementsByClassName("num");
  for (var i = 0; i < view.length; i++) {
    view[i].innerHTML = tab[i];
  }
}

window.onload = function() {
  var tab = geneTab();
  displayNumber(tab);
}