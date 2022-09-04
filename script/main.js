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
