'use sctrict';

let number = 4.5;

console.log(-4 / 0);
console.log('string' * 9);

const persone = 'Ihor';

const bool = true;

// console.log(something);

let und;
console.log(und);

const obj = {
  name: 'Ihor',
  age: 32,
  isMarried: false,
};

// console.log(obj.name);

console.log(obj['name']);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);

let addText = document.querySelector('.add-text');
// let firstName = 'Ihore';
// let lastName = 'Suric';
// let age = 32;

let person = {
  firstName: 'Ihore',
  lastName: 'Suric',
  age: 32,
};

let fullName = `${person.firstName} ${person.lastName} ${person.age}`;
addText.innerText = fullName;

// let fullName = firstName + ' ' + lastName + ' ' + age + ' ' + 'years old';

// let fullName = `${firstName} ${lastName} ${age} years old`;
// addText.innerText = fullName;

let car = document.querySelector('.car');

let myCar = {
  model: 'audi',
  year: 2020,
  color: 'black',
};

car.innerText = `Model is ${myCar.model} color ${myCar.color} and year is ${myCar.year}`;

// let carOne = 'BMW';
// let carTwo = 'Audi';
// let carThree = 'Tesla';

let cars = ['BMW', 'AUDI', 'TESLA'];

// cars.push('MERS);
// cars.pop();
cars.shift();
cars.unshift('MERS');

let myCars = document.querySelector('.cars');

myCars.innerText = cars;
