const colors = ["grey", "purple", "yellow", "orange", "red", "blue"];

colors.shift();
colors.pop(); // on supprime l'élément "purple" du tableau
colors.push("black");
colors.unshift("pink");

console.log(colors);
