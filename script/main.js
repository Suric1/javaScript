//  first lesson let const var

'use strict';

let number = 5;
const leftBorderWidth = 1;

number = 2;

console.log(number);

const obj = {
  a: 50,
};

obj.a = 10;

console.log(obj);

{
  let result = 50;
  console.log(result);
}

// alert(5);

let myHeader = document.querySelector('.title');
myHeader.innerText = 'SURICAT HI';

let subTitle = document.querySelector('.subtitle');
subTitle.innerText = 'Surbi';

let descr = document.querySelector('.descr');
descr.innerText = 52 + 63;

let numberOne = 10;
let numberTwo = 15;
let mySum = numberOne + numberTwo;
let sumElement = document.querySelector('.sum');
sumElement.innerText = mySum;

let multElement = document.querySelector('.multiply');
multElement.innerText = 5 * 10;

let minusElement = document.querySelector('.minus');
minusElement.innerText = 65 - 15;
