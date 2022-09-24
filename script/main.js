// Обычная функция this = window, но если стоит use strict - будет undefined


function showThis(a, b) {
	console.log(this)
	
	function sum() {
		console.log(this)
		return a + b
	}
	
	console.log(sum())
}

showThis(4, 5)

// Контекст у методов обьекта - сам обьект
const obj = {
	a: 20,
	b: 15,
	sum: function () {
		function shouth() {
			console.log(this)
		}
		
		shouth()
	}
}
obj.sum()

function User(name, id) {
	this.name = name
	this.id = id
	this.human = true
}

let ihor = new User('ihor', 32)

// this в конструкторах и классах - это новый экземпляр обьекта

function sayName(surname) {
	console.log(this)
	console.log(this.name + surname)
}

const user = {
	name: 'John'
}

sayName.call(user, 'Smith')
sayName.apply(user, ['Smith'])

function count(num) {
	return this * num
}

const double = count.bind(2)
console.log(double(3))
console.log(double(5252525252))

// Ручная привязка this: call, apply, bind


const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
	e.target.style.backgroundColor = 'red'
})


const object = {
	num: 5,
	sayNumber: function () {
		const say = () => {
			console.log(this)
		}
		say()
	}
}

object.sayNumber()

const doubleSe = a => a * 2

