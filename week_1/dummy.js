// Functional Programming in Javascript
// map, filter, reduce, forEach
const array1 = [1, 4, 9, 16];

function map(array, func) {
	var result = []
	for (let i = 0; i < array.length; i++) {
		result.push(func(array[i])) 
	}
	return result
}

function filter(array, func) {
	var result = []
	for (let i =0; i < array.length; i++) {
		if (func(array[i])) {
			result.push(array[i])
		}
	}
	return result
}

const filter1 = array1.filter(x => x%2==0)
console.log("filter1: ", filter1)