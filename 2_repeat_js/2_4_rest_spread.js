const genres = ["sci-fi", "thriller", "action"];

/* Rest 
используется при детруктуризации массивов
*/
// const [genre, ...rest] = genres;

// console.log(genre); //sci-fi
// console.log(rest); // ['thriller', 'action']

/* Spread 
    Берет все итерируемые объекты из разбивает их на отдельные объекты
*/

// const updatedGenres_1 = [genres, "humor"];
// const updatedGenres = [...genres, "humor"];
// console.log(updatedGenres_1); // [Array(3), 'humor']
// console.log(updatedGenres); // ['sci-fi', 'thriller', 'action', 'humor']
// console.log("humor", ...genres, "misc");

// const [a, b, c, ...rest] = "xyzother";
// console.log(a, b, c); // x y z
// console.log(rest.join("")); // other

// const test = { a: 1, b: 2 };
// const copyTest = test;

// copyTest.a = 10;

// console.log(test); // {a: 10, b: 2}
// console.log(copyTest); // {a: 10, b: 2}

// const test = { a: 1, b: 2 };
// const copyTest = { ...test };

// copyTest.a = 10;

// console.log(test); // {a: 1, b: 2}
// console.log(copyTest); // {a: 10, b: 2}

const movies = [
  {
    id: 1,
    title: "Inception",
    releaseDate: "2010-07-16",
    director: "Christopher Nolan",
    genres: ["sci-fi", "thriller", "action"],
    hasSequel: false,
    runtime: 148,
    boxOffice: {
      worldwide: "$829.9M",
      domestic: "$292.6M",
      international: "$536.3M",
    },
    ratings: {
      imdb: {
        rating: 8.8,
        votes: 2200000,
      },
      rottenTomatoes: {
        rating: 87,
        reviewsCount: 350,
      },
    },
  },
];

console.log({ ...movies[0], newKey: "hello", runtime: 100 });
