// Уроки по Циклам и Условиям

'use strict';

// УСЛОВИЯ

// if (4 == 9) {
//   console.log('Ok');
// } else {
//   console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('МНОГО');
// } else {
//   console.log('ОК');
// }

// ДРУГОЙ СПОСОБ ЗАПИСИ УСЛОВИЯ (ТЕРНАРНОЕ)

// const num = 50;

//1 аргумент  2 аргумент            3 аргумент
// num === 50 ? console.log('OK~') : console.log('EROR');

//  МОДИФИКАЦИЯ IF  / ELSE  / IF ELSE

//  switch всегда строгое сравнение
const num = 50;

switch (num) {
  case 49:
    console.log('Неверно');
    break;
  case 100:
    console.log('Неверно');
    break;
  case 50:
    console.log('Верно');
    break;
  default:
    console.log('Не в этот раз');
    break;
}
