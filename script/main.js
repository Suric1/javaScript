'use strict';

//  function Оператор return


// ПЕРВЫЙ ПРИМЕР function return

// let sum = 0
function f1(x, y) {
	// let sum = x+y
	return x + y
}

f1(4, 5)
f1(4, 45)


function f2() {
	console.log(2)
	return 5
}

f2(2)
console.log(5 + f2())
console.log(f1(6, 7) + f1(4, 5))


// ВТОРОЙ ПРИМЕР function return


function randInt(min, max) {
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}

let r = randInt(222, 333)
console.log(r)
console.log(randInt(222, 333) + 100)

// ВЫВОДИТЬ КУДА УГОДНО

console.log(f1(100, 200))
document.querySelector('.out1').textConcent = f1(300, 400)
document.querySelector('.out1').style.background = 'rgb(23,156,201)'
document.querySelector('.out1').style.background = `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)}`


//ИСПОЛЬЗОВАТЬ В ВЫРАЖЕНИЯХ

console.log(100 * f1(3, 4))


// ВЫВОД ДАННЫХ ВВЕДЕНЫХ ПОЛЬЗОВАТЕЛЕМ

document.querySelector('.b-3').addEventListener('click', function () {
	const s = document.querySelector('.i-3').value
	document.querySelector('.out-3').innerHTML = 'HELLO SURICA ' + clearText(s)
	console.log('HELLO SURICA ' + clearText(s))
})

function clearText(data) {
	return data.trim().toLowerCase()
}

// return ПРЕРЫВАЕТ ВЫПОЛЕНИЕ function

function t4() {
	console.log(1)
	return
	console.log(2)
	console.log(3)
}

t4()

// ПРЕРЫВАНИЕ ФУНКЦИИ
// эмулируем indexOf

function indexOfEmul(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) return i
	}
	
	return -1
}

let result = indexOfEmul([22, 33, 44, 55], 22)
console.log(result)

// ПОЛЬЗОВАТЕЛЬ ВВОДИТ СВОЙ ВОЗРОСТ

document.querySelector('.b-4').addEventListener('click', function () {
	let year = +document.querySelector('.i-4').value
	if (isNaN(year)) return
	if (year <= 0 || year > 140) return;
	document.querySelector('.out-4').innerHTML = 2021 - year
})


// ex 5 СУММА

console.group('example 5')
const arr5 = [[3, 4, 5], [6, 7, 8]]

function t5() {
	let s = 0
	for (let i = 0; i < arr5.length; i++) {
		s += sum(arr5[i])
	}
	return s
}

function sum(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		// console.log(arr[i])
		sum += arr[i]
	}
	return sum
}

console.log(t5())
console.groupEnd()


// ex 6 ПЕРЕНОС СТРОКИ ОШИБКА return ПРИМЕНЯТЬ () ДЛЯ ПЕРЕСОНА

console.group('example 6')

function t6() {
	let a = 88
	return a
}

console.groupEnd()

// ex 7 return
console.group('example 7')
const arr7 = [[3, 4, 5], [6, 7, 9], [7, 7, 1], [2, 2]]

const evenArr7 = arr7.filter(function (item) {
	return (sum(item) % 2 === 0)
})
console.log(evenArr7)
console.groupEnd()

// ex8 return function

function t8() {
	return sum
}

let s = t8()
console.log(s([10, 20, 30]))