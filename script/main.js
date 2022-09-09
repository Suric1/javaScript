// 'use strict';

// function declaration

//
// if (false) {
// 	function f1() {
// 		console.log('function 1 if')
// 	}
// } else {
// 	function f1() {
// 		console.log('function 1 else')
// 	}
// }
//
// f1()

// function expression


function f2() {
	console.log(f2.name)
	console.log('function f2')
}

// f2()

//  ВЫЗЫВАТЬ function expression НЕЛЬЗЯ РАНЬШЕ ЧЕМ ОБЬЯВЛЕНА ФУНКЦИЯ
const f3 = function (a) {
	return ('function f3' + a)
}

const f4 = function () {
	console.log(f4.name)
	console.log('function f3')
}


const f5 = function example() {
	console.log(f5.name)
	console.log(example.name)
	console.log('function example')
}
const f6 = f5
f5(44444)
f6()
f4()

