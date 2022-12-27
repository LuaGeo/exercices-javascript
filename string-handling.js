const name = "reacteur";

newNamePart1 = name[0].toUpperCase();
newNamePart2 = name.slice(1);

newName = newNamePart1 + newNamePart2;

console.log(newName);

// or:
// const name = "reacteur";

// // étape 1 : extraire la 1ère lettre de name

// const firstLetter = name[0];
// console.log(firstLetter); // r

// // étape 2 : transformer la 1ère lettre en majuscule

// const firstLetterToUpperCase = firstLetter.toUpperCase();
// console.log(firstLetterToUpperCase); // R

// // étape 3 : extraire le reste de la chaine de caractères

// const otherLetters = name.slice(1);
// console.log(otherLetters); // eacteur

// // étape 4 : assembler

// const newName = firstLetterToUpperCase + otherLetters;
// console.log(newName); // Reacteur
