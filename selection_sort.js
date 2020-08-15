function selectionSort(array) {
	let len = array.length;
	for(let i = 0; i < len; i++) {
		let min = i;
		for(let j = i + 1; j < len; j++) {
			if(array[j] < array[min]) {
				min = j;
			}
		}
		if(min != i) {
			let tmp = array[i];
			array[i] = array[min];
			array[min] = tmp;
		}
	}
	return array;
}

let array = [20, 45, 93, 67, 10, 97, 52, 88, 33, 92];
let sortedArray = selectionSort(array);
console.log(sortedArray);