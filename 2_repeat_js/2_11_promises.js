/*
fetch("https://meowfacts.herokuapp.com/?count=1")
  .then((responce) => {
    console.log(responce);
    return responce.json();
  })
  .then((data) => console.log(data));

*/

/*
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback();
  document.head.append(script);
}

loadScript("./2_4_rest_spread.js", () => console.log("here I am"));
*/

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(2 * 2), 1000);
// }).then((res) => console.log(res));

/*
function loadScript(src) {
  console.log("Start loading script...");
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
    document.head.append(script);
  });
}

let promise = loadScript("./2_4_rest_spread.js");
promise.finally(console.log("Loading completed")).then(
  (script) => console.log(`${script.src} loaded`),
  (error) => console.log(`Error: ${error.message}`)
);
*/

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// let promise = delay(3000).then((res) => {
//   console.log("done in 3 sec");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then((result) => {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result); // 2
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result); // 4
//     return result * 2;
//   });
