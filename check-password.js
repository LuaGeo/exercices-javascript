const password = "qwerty1234";

allowedLength = 8;

if (password.length < allowedLength) {
  console.log("The password is not OK");
} else {
  console.log("The password is OK");
}

// const password = "qwerty";
// const passwordLength = password.length;
// console.log(passwordLength); // 6
// if (passwordLength < 8) {
//   console.log("The password is not OK");
// } else {
//   console.log("The password is OK");
// }

// using else if:
// const password = "qwerty1234";
// const passwordLength = password.length;
// console.log(passwordLength); // 10
// if (passwordLength < 8) {
//   console.log("The password is not OK");
// } else if (passwordLength >= 8) {
//   console.log("The password is OK");
// }
