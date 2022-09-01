'use strict';

function add(a, b, c) {
  return a + b + c;
}

function greeting(name) {
  return `He ${name}`;
}

let headerOne = document.querySelector('.header');
headerOne.innerText = add(5, 1, 15);

let headerTwo = document.querySelector('.header-two');
headerTwo.innerText = add();

let headerThree = document.querySelector('.header-three');
headerThree.innerText = add();

let headerFour = document.querySelector('.header-four');
headerFour.innerText = add();

let headerFive = document.querySelector('.header-five');
headerFive.innerText = add();

let headerSix = document.querySelector('.header-six');
headerSix.innerText = add();

function testFunction() {
  const x = 5;
  const y = 10;
  console.log(x + y);
}

function hello() {
  testFunction();
  console.log('Hello SurBi');
}

// testFunction();

function testFunction2() {
  function t3() {
    console.log('t 3 function');
  }
  t3();
  console.log('text funcion 2');
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
  const max = 200;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}

function randomInt() {
  console.log('random int 555');
}

randomInt();
randomInt();
randomInt();
randomInt();
randomInt();
randomInt();

let min = 1;
let max = 1000000;

function rand() {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}

rand();

min = 5;
max = 15;
rand();

let c = 9;
function count() {
  c++;
  console.log(c);
}

count();
count();
count();
count();

document.querySelector('.out-1').addEventListener('mousemove', blockWidth);

document.querySelector('.out-1').onclick = count;

let w = 100;
function blockWidth() {
  w++;
  document.querySelector('.out-1').style.width = w + 'px';
}

let a = 9;

function f1(b) {
  document.querySelector('.out-1').textContent = a;
}

document.querySelector('button').onclick = () => {
  f1(12);
};


