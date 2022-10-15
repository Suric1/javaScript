'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: () => {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		
		while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: () => {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов', '').trim(),
				b = prompt('На сколько оцените его?', '');
			
			if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('all done');
			} else {
				console.log('error');ss
				i--;
			}
		}
	},
	detectPersonalLevel: () => {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы Киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: (hidden) => {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: () => {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false
		} else {
			personalMovieDB.privat = true
		}
	},
	writeYourGenres: () => {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`)
			
			if (genre === '' || genre === null) {
				console.log('Вы ввели некорректные данные')
				i--
			} else {
				personalMovieDB.genres[i - 1] = genre
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`)
		})
	}
}


//
// //  КАЛЬКУЛЯТОР СЛОЖЕНИЯ
//
// let numberOne = document.querySelector('.number-one');
// let numberTwo = document.querySelector('.number-two');
//
// let plusButton = document.querySelector('.plus');
// let minusButton = document.querySelector('.minus');
// let divideButton = document.querySelector('.divide');
// let multiplyButton = document.querySelector('.multiply');
//
// let clearButton = document.querySelector('.clear');
//
// let resultText = document.querySelector('.result');
//
// clearButton.addEventListener('click', function () {
//   resultText.innerText = '';
//   numberOne.value = '';
//   numberTwo.value = '';
// });
// plusButton.addEventListener('click', function () {
//   let numOne = parseInt(numberOne.value);
//   let numTwo = parseInt(numberTwo.value);
//
//   let sum = numOne + numTwo;
//   resultText.innerText = sum;
// });
//
// //  КАЛЬКУЛЯТОР ВЫЧИТАНИЯ
// minusButton.addEventListener('click', function () {
//   let numOne = parseInt(numberOne.value);
//   let numTwo = parseInt(numberTwo.value);
//
//   let minus = numOne - numTwo;
//   resultText.innerText = minus;
// });
//
// divideButton.addEventListener('click', function () {
//   let numOne = parseInt(numberOne.value);
//   let numTwo = parseInt(numberTwo.value);
//
//   let divide = numOne / numTwo;
//   resultText.innerText = divide;
// });
//
// multiplyButton.addEventListener('click', function () {
//   let numOne = parseInt(numberOne.value);
//   let numTwo = parseInt(numberTwo.value);
//
//   let multiply = numOne * numTwo;
//   resultText.innerText = multiply;
// });


