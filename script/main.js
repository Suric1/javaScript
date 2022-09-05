'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов', ''),
//     b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('all done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//   console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы Киноман');
// } else {
//   console.log('Произошла ошибка');
// }
// console.log(personalMovieDB);

//  КАЛЬКУЛЯТОР СЛОЖЕНИЯ

let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');

let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let divideButton = document.querySelector('.divide');
let multiplyButton = document.querySelector('.multiply');

let clearButton = document.querySelector('.clear');

let resultText = document.querySelector('.result');

clearButton.addEventListener('click', function () {
  resultText.innerText = '';
  numberOne.value = '';
  numberTwo.value = '';
});
plusButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);

  let sum = numOne + numTwo;
  resultText.innerText = sum;
});

//  КАЛЬКУЛЯТОР ВЫЧИТАНИЯ
minusButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);

  let minus = numOne - numTwo;
  resultText.innerText = minus;
});

divideButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);

  let divide = numOne / numTwo;
  resultText.innerText = divide;
});

multiplyButton.addEventListener('click', function () {
  let numOne = parseInt(numberOne.value);
  let numTwo = parseInt(numberTwo.value);

  let multiply = numOne * numTwo;
  resultText.innerText = multiply;
});
