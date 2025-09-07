// && - Logical "and"
/*
console.log(true && true); // true;
console.log(true && false); // false;
console.log(false && true); // false;
console.log(false && false); // false;

При нескольких подряд операторах И
Оператор && выполняет следующие действия:

Вычисляет операнды слева направо.
Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.
Если все операнды были истинными, возвращается последний.
Другими словами, И возвращает первое ложное значение. Или последнее, если ничего не найдено.

Вышеуказанные правила схожи с поведением ИЛИ. Разница в том, что И возвращает первое ложное значение, а ИЛИ –  первое истинное.

result = value1 && value2 && value3;

console.log(1 && "abc" && [1, 2, 3] && NaN); // NaN
console.log(1 && 2 && 3); // 3

a = 1;
console.log((a &&= "Пройдет"));
b = 0;
console.log((b &&= "Не пройдет"));
*/

// ***********************************************************************************************************************************
// || - Logical "or"
/* 
console.log(true || true) // true;
console.log(true || false) // true;
console.log(false || true) // true;
console.log(false || false) // false;

if (1 || 0) { // работает как if( true || false )
  console.log( 'истинно!' );
}

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'Офис закрыт.' ); // это выходной
}

result = value1 || value2 || value3;

Вычисляет операнды слева направо.
Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
Если все операнды являются ложными (false), возвращает последний из них.

console.log( 1 || 0 ); // 1 
console.log( true || 'какая-то строка' ); // true

console.log( null || 1 ); // 1 
console.log( null || 0 || 1 ); // 1 
console.log( undefined || null || 0 ); // 0 


a = 1;
b = 0;
console.log((a ||= "Не сработает"));
console.log((b ||= "Cработает"));
*/

// ***************************************************************************************************************

// let userAge = 0;
// const defaultAge = 18;

// let age = userAge ?? defaultAge;
// console.log(age);

// userAge = 123;
// age = userAge ?? defaultAge;
// console.log(age);
