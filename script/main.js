'use strict';

// УРОК СТРЕЛОЧНАЯ ФУНКЦИЯ =>

function sum(a, b) {
	return a + b
}


function multi(a, b) {
	return a * b
	
}

// СТРЕЛОЧНЫЕ ФУНКЦИИ ЭТО БОЛЕЕ СОКРАЩЕНЫЙ СПОСОБ ЗАПИСИ АНОНИМНОЙ ФУНКЦИИ


// ПРИМЕР №1
document.querySelector('.b-1').addEventListener('click', function () {
	let res = sum(23, 45)
	console.log(res)
})


document.querySelector('.b-1').addEventListener('click', () => {
	let res = sum(23, 45)
	console.log(res)
})

// Запуск двух функций

document.querySelector('.b-2').addEventListener('click', function () {
	let res = sum(23, 45)
	console.log(res)
	let res2 = multi(23, 45)
	console.log(res2)
})
// СТРЕЛОЧНАЯ ФУНКЦИЯ

document.querySelector('.b-2').addEventListener('click', () => {
	let res = sum(23, 45)
	console.log(res)
	let res2 = multi(23, 45)
	console.log(res2)
})

// СТРЕЛОЧНАЯ ФУНКЦИЯ В callback

const ar1 = [4, 5, 6, 7, 8]

function pow2(a) {
	return a ** 2
}

const res2 = ar1.map(pow2)
console.log(res2)


const res3 = ar1.map(function (a) {
	return a ** 2
})
console.log(res3)

//Применяю стрелочную функцию

const res4 = ar1.map((a) => {
	return a ** 2
})
console.log(res4)

// Сокращенный синтаксис стрелочной функции

const res5 = ar1.map((a) => {
	return a ** 2
})
console.log(res5)

// в Одну строку убрать {} return

const res6 = ar1.map((a) => a ** 2)
console.log(res6)

// Если один аргумент можно убрать ()

const res7 = ar1.map(a => a ** 2)
console.log(res7)


// МЕТОД filter
//ЗАПИСЬ ЧЕРЕЗ function
const res8 = ar1.filter(function (item, index) {
	if (index % 2 === 0) {
		return true
	}
})
console.log(res8)

//ЗАПИСЬ ЧЕРЕЗ СТРЕЛОЧНУЮ ФУНКЦИЮ =>

const res9 = ar1.filter((item, index) => index % 2 === 0)
console.log(res9)


// arrow & this

document.querySelector('.b-3').addEventListener('click', function () {
	console.log(this)
})

document.querySelector('.b-3').addEventListener('click', () => console.log(this))

// arrow аргументы

const f1 = (...arg) => {
	console.log(arg)
	console.log('work')
}
f1(99, 100)