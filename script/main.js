'use strict';

//  Оператор return

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}
const res = convert(500, usdCurr);

promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log('DONE');
}
test();

function doNothing() {}
console.log(doNothing() === undefined);

// Вывод данных введенных пользователем

document.querySelector('.b-3').addEventListener('click', function () {
  const s = document.querySelector('.i-3').value;
  document.querySelector('.out-3').innerHTML = 'HELLO ' + clearText(s);
  console.log('HELLO ' + clearText(s));
});

function clearText(data) {
  return data.trim().toLowerCase();
}

function t4() {
  console.log(1);
  console.log(2);
  console.log(3);
}

t4();

//  Прерывание функции

function indexOfEmul(arr, num) {
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] === num) return i;
  }

  return -1;
}

let result = indexOfEmul([22, 33, 44, 55], 44);
console.log(result);

//  Пользователь вводит свой возрост

document.querySelector('.b-4').addEventListener('click', function () {
  let year = +document.querySelector('.i-4').value;
  if (isNaN(year)) return;
  if (year <= 0 || year > 140) return;
  document.querySelector('.out-4').innerHTML = 2021 - year;
});

//  ex 5 СУММА

console.group('example 5');
const arr5 = [
  [3, 4, 5],
  [6, 7, 8],
];
function t5() {
  let s = 0;
  for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
    s += sum(arr5[i]);
  }
  console.log(s);
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.lenght; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(t5());
console.groupEnd();

console.group('example 6');

function t6() {
  let a = 88;
  return a;
}
console.log(t6());

console.groupEnd();

console.group('example 7');
const arr = [
  [3, 4, 5],
  [6, 7, 9],
  [7, 7, 1],
  [2, 2],
];

const evenArr = arr.filter(function (item) {
  return sum(item) % 2 === 0;
});

console.log(evenArr);

//  return Функции

function t8() {
  return sum;
}

let s = t8();

console.log(s([10, 20, 30]));

function sum(a, b) {
  return a + b;
}

let a = sum(4, 5);
console.log(a);


