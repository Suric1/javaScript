// ЗАМАКАНИЕ

// ЗАМЫКАНИЕ ЭТО ПРИЕМ ПРОГРАММИРОВАНИЯ КОГДА СОЗДАЕТСЯ ФУНКЦИЯ ВНУТРИ КОТОРОЙ ПОМЕЩАЮТСЯ НУЖНЫЕ ДАННЫЕ И СПОСОБЫ МАНИПУЛИРОВАНИИ

//===============================================
//== КАК ФУНКЦИИ ОБРАЩАЮТСЯ К ПЕРЕМЕННЫМ ПРИМЕР 1
//===============================================

let a = 10

function f1() {
	console.log('(global)a = ' + a)
}

f1()

//===============================================
//== КАК ФУНКЦИИ ОБРАЩАЮТСЯ К ПЕРЕМЕННЫМ ПРИМЕР 1
//===============================================


function f2() {
	let a = 33
	console.log('(local)a = ' + a)
}

f2()


//===============================================
//== ИНОГДА ПЕРЕМЕННЫЕ НУЖНЫ СНАРУЖИ
//===============================================

function createStep(n = 0) {
	let count = 0
	
	return function () {
		count++
		console.log(count)
	}
}

let step1 = createStep()
let step2 = createStep(200)

step1()
step1()
step2()
step1()
step1()


//===============================================
//== C РЕКУРСИЕЙ
//===============================================


function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1)
	return Math.round(rand)
}

function createBeggar() {
	let s = 0
	
	return function beggar() {
		s += randomInteger(0, 100)
		console.log(s)
		if (s >= 250) return
		beggar()
	}
}

let begg1 = createBeggar()
begg1()


let p

