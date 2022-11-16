function checkResult1() {
	
	let arr = ["sd", "we", "er", "rr", "ww"];

let result = arr.map(function(elem) {
	return elem + '!';
});

console.log(result); // выведет ! после каждой строки
}

function checkResult2() {
	
	let arr = ["sd", "we", "er", "r1", "ww"];

let result = arr.map(function(elem) {
	return elem.split("").reverse().join("");
});

console.log(result); // выведет строки в обратном порядке
}

function checkResult3() {
	
	let arr = ['123', '456', '789'];

let result = arr.map(function(elem) {
	return elem.split("");
});

console.log(result); // 
}

function checkResult4() {
	
	let arr = [1,3,5,6];

let result = arr.map(function(elem, index) {
	return elem*index;
});

console.log(result); 
}

function checkResult5() {
	
	let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
	sum += elem*elem;
});

console.log(sum);
}


