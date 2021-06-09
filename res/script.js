"use strict";

let rowContainer = document.querySelector(".row-container");
console.log(rowContainer);
let num = 100;

const insertHTML = (state, i) => {
  let html = `
        <tr class="row">
            <td>${i}</td>
            <td>${state}</td>
        </tr>
    `;
  rowContainer.insertAdjacentHTML("beforeend", html);
};

for (let i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    insertHTML("fizzBUZZ", i);
  } else if (i % 5 === 0) {
    insertHTML("Fizz", i);
  } else if (i % 3 === 0) {
    insertHTML("Buzz", i);
  } else {
    insertHTML(i, i);
  }
}
