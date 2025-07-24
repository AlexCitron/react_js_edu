async function getFilmData(title) {
  title = title.toLocaleLowerCase();
  const responce = await fetch(
    `http://www.omdbapi.com/?apikey=43517994&t=${title}`
  );
  const data = await responce.json();
  console.log(data);
}

getFilmData("HoBBit");
