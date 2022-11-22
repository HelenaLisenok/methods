function checkResult1() {
	
	let arr = ["sd", "we", "er", "rr", "ww"];

	console.log(arr.map((elem) => elem + '!'));
	
	console.log('gfdjghbdfjh');
//console.log(result); // выведет ! после каждой строки
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

function checkResult6() {
let arr = [1, -22, 3, 4, 5];
console.log( arr.filter(elem => elem > 0) );
}

function checkResult7() {
let arr = [1, -22, 30, 4, 5];
console.log( arr.filter((elem, index) => elem * index < 30) );
}

function checkResult8() {
let arr = [1, 2, [3, 4], 5, [6, 7]];
console.log( arr.filter(elem => typeof(elem) !== 'object') );
}
function checkResult9() {
let arr = [1, 2, -3, -55];
console.log( arr.filter(elem => elem < 0).length );
}

function checkResult10() {
let arr = [2, 4, 2, 1];

let result = arr.every((elem, index) => elem * index < 30);
console.log(result);
}

function checkResult11() {
	let arr = [2, 4, 1, 0.1];

let result = arr.some((elem, index) => elem* index >30);
console.log(result);
}

function checkResult12() {
let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));
}

function checkResult13() {
let arr = [1, 2, 3, 4, 5]
let min = Math.min(...arr);
console.log(min);
}
function checkResult14() {
function average(...nums) {
	let sum = 0;
  let count = 0;
	
	for (let num of nums) {
		sum += num;
    count = count+1;
	}
	let av = sum/count;
	return av;
}

let result = average(3, 3, 3);
console.log(result); // выведет 3
}

function checkResult15() {
	let arr = ['John', 'Smit', 'development', 'programmer', 2000];
	let [name, surname, department, position, salary] = arr;

	console.log(arr);
}
function checkResult16() {
function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}
let [name, surname, department, position, salary] = func();
console.log(func());

}
// не верно работает, хотя в codepen ok
function checkResult17() {
	let arr = ['John', 'Smit', 'development', 'programmer', 2000];
	let [, , department, position] = arr;
	//console.log(arr);
	//console.log(department);
	console.log(position);
}
function checkResult17() {
	let arr = ['John', 'Smit', 'development', 'programmer', 2000];
	let [name, surname, ...info] = arr;
	//console.log(info);
	console.log(surname);
}
function checkResult18(); {
	let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department] = arr;
let position;  //не совсем поняла этот кусочек
if (arr[3] !== undefined) {
	position = 'programmer';
} else {
	position = 'trainee';
}
console.log(name, surname, position);

}
function checkResult19(); { 
// не работает
	let arr = [2025, 12, ];
function func() {
	return (new Date).getDate();
}

let [year, month, day = func()] = arr;
console.log(arr);
}

function checkResult20(); {
let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color, width, height} = options; 
console.log(color);
 }
function checkResult21(); {
let options = {
    color: 'red',
    width: 400,
    height: 500,
};
let {color: c, width: w, height: h} = options;          
console.log(c);
}