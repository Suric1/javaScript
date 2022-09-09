'use strict';

// Контекст в function
// Контекст = область видимости + переменная this
// this - ссылка на обьект который вызывает код в данный момент

let count = 0

function f1() {
	console.log(count)
	console.log(this)
	this.textContent = count
	count++
}

// document.querySelector('.b-4').addEventListener('click', f1)


// СТРЕЛОЧНАЯ ФУНКЦИЯ НЕ ИМЕЮТ this

// const f2 = () => {
// 	console.log(count)
// 	console.log(this)
// 	this.textContent = count
// 	count++
// }

// document.querySelector('.b-5').addEventListener('click', f2)

// call
// f1.call(document.querySelector('.b-4'))
// f1.call(document.querySelector('.b-5'))


document.querySelector('.b-4').addEventListener('click', () => {
	f1.call(document.querySelector('.b-5'))
})

function f3(count) {
	console.log(count)
	console.log(this)
	this.textContent = count
}

document.querySelector('.b-6').addEventListener('click', () => {
	count++
	f3.call(document.querySelector('.b-5'), count)
})

function sum1(a, b) {
	this.innerHTML = a + b
}

document.querySelector('.b-5').addEventListener('click', () => {
	sum1.call(document.querySelector('.out-3'), 13, 4)
	sum1.apply(document.querySelector('.out-4'), [13, 4])
})

// метод bind

const f4 = f1.bind(document.querySelector('.out-4'))
f4()
f4()
f4()
document.querySelector('.b-7').addEventListener('click', f4)

const sum2 = sum1.bind(document.querySelector('.out-6'))
sum2(4, 5)
sum2(4, 15)

// Частичные функции, с переопределенным аргументом (частичные вычисления)

function sum3(a, b, c) {
	console.log(arguments)
	this.innerHTML = a + b + c
}

const sum4 = sum3.bind(document.querySelector('.b-8'), 100)

document.querySelector('.b-8').addEventListener('click', () => {
	sum4(6, 7,)
})


function sum7(a, b, c) {
	return a + b + c
}


const sum8 = sum7.bind(undefined, 100, 300)

document.querySelector('.b-7').addEventListener('click', () => {
	document.querySelector('.out7').textContent = sum8(15)
})


// Вытягивания методов

const validate = {
	password: 'suridd',
	email: 'suri@sirm',
	isValid: false,
	sayHi() {
		console.log(this)
		return (this.password.length > 6) ? true : false
	}
}

console.log(validate.sayHi())


const obj = {password: 'hello5555'}
const validatePassword = validate.sayHi.bind(obj)

console.log(validatePassword())
obj.password = '123'
console.log(validatePassword())