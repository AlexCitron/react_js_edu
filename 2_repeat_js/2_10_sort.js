const arr = [1, 2, 5, 7, 11, 3, 4, 100, 99, 50];
arr.sort((a, b) => a - b);
console.log(arr);

const arr_2 = ["a", "c", "D", "z", "H", "C"];
const newArr_2 = [...arr_2].sort((a, b) => a.localeCompare(b));
console.log(arr_2);
console.log(newArr_2);
