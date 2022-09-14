// Функции высшего порядка
// Pure функции


function squad(n) {
	return n ** 2
}

console.log(squad(4))

function squad2(n) {
	document.querySelector('.out-1').textContent = n ** 2
}

let count = 0

function myCount() {
	return count++
}


function showAlert() {
	return 3
}


function randomIn(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

for (let i = 0; i < 20; i++) {
	console.log(randomIn(1, 10))
}


function year(d) {
	let today = new Date()
	let year = today.getFullYear()
	return (year - d)
}

console.log(year(1990))


function show(d) {
	console.log(d)
}

show(4444)

function hello() {
	console.log('hello')
}

hello.hi = 123


console.log(hello.hi)

function pOdd() {
	console.log('odd')
}

function pEven() {
	console.log('even')
}

function myNumber(n, odd, even) {
	if (n % 2 === 0) return even
	else
		return odd
}

let z = myNumber(5, pOdd, pEven)
console.log(z)
z()

const w = [
	{name: 'Ihor', age: 32},
	{name: 'Serg', age: 25},
	{name: 'Sasha', age: 27}
]

let w1 = []
for (let i = 0; i < w.length; i++) {
	if (w[i].age >= 26) w1.push(w[i])
}

console.log(w1)

w1 = w.filter(mySort)

function mySort(item) {
	if (item.age >= 26) return true
}

console.log(w1)

w1 = w.filter(item => item.age >= 26)


// Практические примеры функций высшего порядка

const user = {
	age: 32,
	password: 'sfaf11',
	agreeToTerms: true
}

function checkAge(user) {
	return user.age > 18
}

function checkPassword(user) {
	return user.password.length >= 6
}

function checkTerms(user) {
	return user.agreeToTerms === true
}

console.log(checkAge(user))


function validate(obj, ...tests) {
	for (let i = 0; i < tests.length; i++) {
		if (tests[i](obj) === false) return false
	}
	return true
}

console.log(validate(user, checkAge, checkPassword, checkTerms))


function createValidator(...tests) {
	return function (obj) {
		for (let i = 0; i < tests.length; i++) {
			if (tests[i](obj) === false) return false
		}
		return true
	}
}

const validator1 = createValidator(checkAge, checkPassword, checkTerms)
console.log(validator1(user))