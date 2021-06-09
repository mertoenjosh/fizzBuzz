"use strict";

let rowContainer = document.querySelector(".row-container");
console.log(rowContainer);
let num = 100;

for (let i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Fizz");
  } else if (i % 3 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
