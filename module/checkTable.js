export function checkTable(num, tab) {
	for (let i = 0; i < tab.length; i++) {	
		if (tab[i] == num){
			return false;
		}
	}
	return true;
}