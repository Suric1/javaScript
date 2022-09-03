'use strict';

//  УРОК --ЦИКЛЫ-- while // do // for

let num = 50;

//  ЦИКЛ while

while (num <= 55) {
  console.log(num);
  num++;
}

//  Цикл do

do {
  console.log(num);
  num++;
} while (num < 55);

//  Цикл for

for (let i = 1; i < 16; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);
}
