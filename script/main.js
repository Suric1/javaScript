// Рекурсия в Js
// Рекурсия это вызов функции самой себя

let t = 0

function f1() {
	t++
	console.log(t)
	if (t === 100) return
	f1()
}

// Цикл

function f2() {
	let out = ""
	for (let i = 1; i <= 25; i++) {
		out += i + ' '
	}
	console.log(out)
}

f2()

// Тот же пример через рекурсию

let i = 0
let out = ''

function f3() {
	i++
	out += i + ' '
	if (i >= 25) return
	f3()
}

f3()
console.log(out)


// Задача

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}

let s1 = 0

function moneyRecursion() {
	let m = randomInteger(0, 100)
	console.log('add ' + m)
	s1 += m
	console.log('sum: ' + s1)
	if (s1 >= 400) return
	moneyRecursion()
}

moneyRecursion()

// Через цикл

function moneyCycle() {
	let s2 = 0
	for (let i = 0; true; i++) {
		let m = randomInteger(0, 100)
		console.log('add ' + m)
		s2 += m
		console.log('sum: ' + s2)
		if (s2 >= 400) return
	}
}

moneyCycle()



