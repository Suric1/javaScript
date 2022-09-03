'use strict';

// Переменые  let const

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

// Прямых constant в JS Не бывает
const obj = {
  a: 50,
};

obj.a = 10;
console.log(obj);

// Переменая var

// До того пока переменная обьявлена называется ХОЙСТИНГ
console.log(name);
var name = 'Ihor';

// let и const видны только в блоке кода ограниченые {}

{
  let resul = 50;
}

// console.log(resul);

// к var можно обращаться за {}

{
  var result = 50;
}

console.log(result);

//  Обращение к селекторам через JS

let myTitle = document.querySelector('.title');
myTitle.innerText = 'SURIC';

let mySubTitle = document.querySelector('.subtitle');
mySubTitle.innerText = 'Bembi';

let descr = document.querySelector('.descr');
descr.innerText = 5 + 6;



let numberOne = 10;
let numberTwo = 15;

let mySum = numberOne + numberTwo;
let sumElement = document.querySelector('.sum');

sumElement.innerText = mySum;
