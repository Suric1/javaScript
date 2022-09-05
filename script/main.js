'use strict';
// УРОК -- ФУНКЦИИ -- function

// ФУНКЦИЯ ЭТО БЛОК ПРОГРАММНОГО КОДА НА ЯЗЫКЕ JS КОТОРАЯ КОТОРАЯ ОПРЕДЕЛЯЕТСЯ 1 РАЗ И МОЖЕТ ВЫЗЫВАТЬСЯ МНОГОКРАТНО

// function declaration

function testFuntcion() {
  const x = 5;
  const y = 10;
  console.log(x + y);
}
// ДЛЯ ТОГО ЧТОБЫ ЗАПУСТИТЬ ФУНКЦИЮ НЕОБХОДИМО УКАЗАТЬ ИМЯ ФУНКЦИИ И ПОСТАВИТЬ () Скобки
// testFuntcion();

function hello() {
  testFuntcion();
  console.log('HELLO');
}

function testFunction2() {
  function t3() {
    console.log('t 3 function');
  }
  t3();
  console.log('test function 2');
}
hello();
testFunction2();

function unixTime() {
  let time = Math.floor(new Date().getTime());
  console.log(time);
}

unixTime();

function randomInt() {
  const min = 1;
  const max = 1000000000000000000;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}
randomInt();

function randomInt() {
  console.log('random int 555');
}
randomInt();
randomInt();
// console.log(randomInt);

let min = 1;
let max = 1000000000000000000;

function rand() {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}
rand();

min = 15;
max = 20;
rand();

let c = 9;
function count() {
  c++;
  console.log(c);
}
count();
count();

document.querySelector('.out-1').addEventListener('mousemove', blockWidth);
// document.querySelector('.out-1').onclick = count;

let w = 100;

function blockWidth() {
  w++;
  document.querySelector('.out-1').style.width = w + 'px';
}

//  АРГУМЕНТЫ ФУНКЦИИ

function f1(a, b, c) {
  console.log(a + b + c);
}

f1(44, 55, 11);
f1(2, 3, 4, 5, 6);
f1(5, 1);

function showSum(elem, x, y) {
  document.querySelector(elem).textContent = x + y;
}
function showSum2(elem, x, y) {
  elem.textContent = x + y;
}

showSum('.out-2', 5, 6);
const out1 = document.querySelector('.out-1');
showSum2(out1, 5, 6);

function showSum3(x, y, elem = '.out-1') {
  console.log(arguments);
  document.querySelector(elem).textContent = x + y;
}

showSum3(10, 52, '.out-2');

function showSumAll() {
  console.log(arguments);
  // let sum = 0;
  // for (let i = 0; i < arguments.length; i++) {
  //   sum += arguments[i];
  // }
  let sum = Array.from(arguments).reduce((accum, item) => (accum += item));
  console.log(sum);
}

showSumAll(4, 5, 6, 1000);

function showSumAll2(...args) {
  console.log(args);
  // let sum = 0;
  // for (let i = 0; i < arguments.length; i++) {
  //   sum += arguments[i];
  // }
  let sum = args.reduce((accum, item) => (accum += item));
  console.log(sum);
}

showSumAll(4, 5, 6, 1000);

//  функция как аргумент

function showAll(result) {
  document.querySelector('.out-1').innerHTML = `<b>${result}</b>`;
}

function showSumAll3(num, drawFunction) {
  drawFunction(num);
}

showSumAll3(100000000000, showAll);
