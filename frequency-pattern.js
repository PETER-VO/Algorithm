// naive solution
function same_On2(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true;
}

function same_On(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	let frequencyCounter_1 = {};
	let frequencyCounter_2 = {};
	for (let val of arr1) {
		frequencyCounter_1[val] = (frequencyCounter_1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter_2[val] = (frequencyCounter_2[val] || 0) + 1;
	}
	for (let key in frequencyCounter_1) {
		if (!(key ** 2 in frequencyCounter_2)) return false;
		if (frequencyCounter_2[key] !== frequencyCounter_1[key ** 2]) return false;
	}
	return true;
}
