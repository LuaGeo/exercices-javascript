const actors = [
  {
    name: "Jennifer Lawrence",
    yearOfBirth: 1990,
    nationality: "american",
    character: "Aurora Lane",
    movies: ["Dark Phoenix", "Red Sparrow", "Mother!", "X-men : Apocalypse"],
  },
  {
    name: "Chris Pratt",
    yearOfBirth: 1979,
    nationality: "american",
    character: "Jim Preston",
    movies: [
      "Guardian of the Galaxy Vol.2",
      "Jurassic World : Fallen Kingdom",
      "Avengers : Endgame",
    ],
  },
  {
    name: "Laurence Fishburne",
    yearOfBirth: 1961,
    nationality: "american",
    character: "Gus Mancuso",
    movies: [
      "John Wick: Chapter 3 – Parabellum",
      "Batman vs Superman: Dawn of Justice",
    ],
  },
];

console.log(actors[0].name);
// or console.log(actors[0]["name"]);
console.log(actors[1].character);
console.log(actors[1].movies[2]);
console.log(actors[2].yearOfBirth);

// in line:

// console.log(
//   actors[0].name,
//   actors[1].character,
//   actors[1].movies[2],
//   actors[2].yearOfBirth
// );

// Jennifer Lawrence
// Jim Preston
// Avengers : Endgame
// 1961
