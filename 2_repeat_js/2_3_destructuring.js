/* Деструктуризация массивов */

// const [a, , c, d, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a = 1
// c = 3
// d = 4
// rest = [5, 6, 7, 8, 9, 10]

// const [a, b = 2] = [1]
// a = 1
// b = 2

/* деструктуризация объектов */

// const { a, b: x, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// a = 1;
// x = 2;
// rest = { c: 3, d: 4 };

// const { a, b = 2 } = { a: 1 };
// a = 1
// b = 2

/* Деструктуризация в функциях */

// function sum([a, , c, ...rest]) {
//   console.log(rest);
//   return a + c;
// }

// console.log(sum([1, 10, 2, 5, 6, 7])); // выведет в консоль [5, 6, 7] потом  3

// function mult({ a, b = 5, ...rest }) {
//   console.log(rest);
//   return a * b;
// }

// console.log(mult({ a: 2, c: 4, d: 7 })); // выведет в консоль {c: 4, d: 7} потом  10

/* Значения по умолчанию в параметрах: */

// function greet({ name = "Guest" } = {}) {
//   return `Hello, ${name}!`;
// }

// console.log(greet()); // Hello, Guest!
// console.log(greet({ name: "Alex" })); // Hello, Alex!

/* Вложенные структуры */

// const data = {
//   id: 1,
//   name: "Ivan",
//   address: {
//     country: "Russia",
//     city: "Taganrog",
//     zip: 347900,
//   },
// };

// const {
//   name,
//   address: { city, zip },
// } = data;

// console.log(name);  // Ivan
// console.log(city);  // Taganrog
// console.log(zip);   // 347900

/* Вложенные структуры 2 */

// const data = [
//   {
//     id: 1,
//     name: "Ivan",
//     address: {
//       country: "Russia",
//       city: "Taganrog",
//       zip: 347900,
//     },
//   },
//   {
//     id: 2,
//     name: "Igor",
//     address: {
//       country: "Russia",
//     },
//   },
// ];

// const [
//   {
//     name: f_name,
//     address: { city: f_city = "Moscow", zip: f_zip = "000000" },
//   },
//   {
//     name: s_name,
//     address: { city: s_city = "Moscow", zip: s_zip = "000000" },
//   },
// ] = data;

// console.log(f_name); // Ivan
// console.log(f_city); // Taganrog
// console.log(f_zip); // 347900
// console.log(s_name); // Ivan
// console.log(s_city); // Moscow
// console.log(s_zip); // 000000

/* Массивы в объектах: */

// const obj = { a: [1, 2, 3, 4] };
// const {
//   a: [a, , c, ...rest],
// } = obj;
// console.log(a); // 1
// console.log(c); // 3
// console.log(rest); // [4]

/* Объекты в массивах: */

// const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const [{ a }, { b: c }, { c: b }] = arr;
// console.log(a); // 1
// console.log(b); // 3
// console.log(c); // 2
