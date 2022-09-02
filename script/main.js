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
