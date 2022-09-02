'use strict';

// ОПЕРАТОРЫ В JS

console.log('arr' + '-object');
console.log(4 + '-object');

// ИНКРИМЕНТ И ДЕКРИМЕНТ
let incr = 10,
  decr = 10;

// Оператор ИНКРИМЕНТА УВЕЛИЧЕНИЕ НА 1
incr++;
//  Оператор ДЕКРИМЕНТ УМЕНШЕНИЕ НА 1
decr--;
console.log(incr);
console.log(decr);

// ++ПРЕФИКСНЫЕ  ПОСТФИКСНЫЕ++

//  Оператор % возвращает отстаток от деления 2х чисел
console.log(5 % 2);

// Оператор равенства ==
// Строгое сравнение(равенство) ===
console.log(2 * 4 == 8);

// Логические операторы И (&&) ИЛИ (||)

const isChecked = true,
  isClose = true;

// Если оба правдивые true
console.log(isChecked && isClose);

// Хотя бы один true
console.log(isChecked || isChecked);

//  Оператор отрицания !
console.log(isChecked || !isClose);
console.log(2 + 2 * 2 != 8);
console.log(2 + 2 * 2 !== 8);

//  ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   console.log('Я сыт');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null & 5);
// console.log(0 && 'fsafaa');

// Оператор И (&&) Всегда возвращает первое ложное значение и дальше код не идет
// Если все аргументы верны код дошел до конца то возвращается значение последнего аргумента

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('Все сыты!');
// } else {
//   console.log('Мы уходим!');
// }

// const hamburger = 0;
// const fries = 0;
// const cola = 0;

// console.log(hamburger || cola || fries);

// if (hamburger || cola || fries) {
//   console.log('Все довольны!');
// } else {
//   console.log('Мы уходим!');
// }

// Оператор ИЛИ ( || ) запинается на правдивом выражении. Когда правда найдена то значение будет возвращено
// Если все не правда, возвращается последнее ложное значение

let johnReport,
  alexReport,
  samReport,
  mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

const hamburger = 3;
const fries = 0;
const cola = 2;
const nuggets = 2;

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

if (hamburger || cola || fries) {
  console.log('Все довольны!');
} else {
  console.log('Мы уходим!');
}

//  ОПЕРАТОР НЕ !
console.log(!0);

// ЗАДАЧИ 
// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')


