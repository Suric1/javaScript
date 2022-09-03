'use strict';

// УРОК -- УСЛОВИЯ   if // else//  else if

if (4 == 9) {
  console.log('Ok');
} else {
  console.log('ERROR');
}

const num = 50;

if (num < 49) {
  console.log('ERROR');
} else if (num > 100) {
  console.log('МНОГО');
} else {
  console.log('ОК!');
}

//  ТЕРНАРНЫЙ ОПЕРАТОР
// В ЕГО РАБОТЕ УЧАСТВУЮТ 3 АРГУМЕНТА (1 АРГУМЕНТ : num === 50)(2 АРГУМЕНТ console.log('ОК!') (3 АРГУМЕНТ console.log('ERROR')

num === 50 ? console.log('ОК!') : console.log('ERROR');

const number = 40;
// switch ВСЕГДА ИДЕТ НА СТРОГОЕ СООТВЕТСВИЕ

switch (number) {
  case 41:
    console.log('НЕВЕРНО');
    break;
  case 100:
    console.log('НЕВЕРНО');
    break;
  case 40:
    console.log('ВЕРНО');
    break;
  default:
    console.log('НЕ в этот раз');
    break;
}
// ЕСЛИ ВСЕ НЕВЕРНО и ДЛЯ ТОГО ЧТОБЫ ВЫПОЛНИТЬ КАКОЕ ТО ДЕЙСТВИЕ ПО УМОЛЧАНИЮ default
