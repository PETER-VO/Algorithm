function mapSubArraySum_On(arr, num) {
	if (num > arr.length) {
		return null;
	}
	let maxSum = 0;
	let temptSum = 0;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	temptSum = maxSum;
	for (let j = num; j < arr.length; j++) {
		temptSum = temptSum - arr[j - num] + arr[j];
		maxSum = Math.max(maxSum, temptSum);
	}
	return maxSum;
}

function mapSubArraySum_On2(arr, num) {
	if (num > arr.length) {
		return null;
	}
	var max = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {
		var temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}
