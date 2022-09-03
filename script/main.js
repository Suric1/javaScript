'use strict';

//  УРОК --ЦИКЛЫ-- while // do // for
//  ИТЕРАЦИЯ ПОВТОРЕНИЯ ЦИКЛА
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

// for (let k = 1; k < 16; k++) {
//   if (k === 6) {
//     // break;
//     continue;
//   }
//   console.log(k);
// }

// break прерывает цикл
// continue позволяет нам пропустить шаг который нам не нужен  но при этом не прирывает полностью цикл

//  ЦИКЛ В ЦИКЛЕ И МЕТКИ

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
  console.log(`First lvl ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second lvl ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) break first;
      console.log(`Third lvl ${k}`);
    }
  }
}
