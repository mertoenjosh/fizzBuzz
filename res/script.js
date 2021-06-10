"use strict";

let num = parseInt(prompt("Enter number: "));

if (!Number.isNaN(num)) {
  console.log(num);
} else {
  alert(`${num} is not a number\nWe have initialized 100 for you`);
  num = 100;
}

let rowContainer = document.querySelector(".row-container");
console.log(rowContainer);

// let num = 100;

const insertHTML = (state, i, bgClass = "") => {
  let html = `
        <tr class="row ${bgClass}">
            <td>${i}</td>
            <td>${state}</td>
        </tr>
    `;
  rowContainer.insertAdjacentHTML("beforeend", html);
};

for (let i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    insertHTML("fizzBUZZ", i, "fizzbuzz");
  } else if (i % 3 === 0) {
    insertHTML("Fizz", i, "fizz");
  } else if (i % 5 === 0) {
    insertHTML("Buzz", i, "buzz");
  } else {
    insertHTML(i, i);
  }
}
