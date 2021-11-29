function isValidAnagrams(str1, str2) {
	if (str1.length !== str2.length) return false;

	let lookup = {};
	for (let letter of str1) {
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}

	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];

		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}
	return true;
}
