"use strict";

const main = document.querySelector(".main");
const submit = document.querySelector(".button");
const messagePage = document.querySelector(".message-page");
const message = document.querySelector(".message");

let buttons = document.querySelectorAll(".buttons");

for (let i = 0; i < buttons.length; i++) {
  message.textContent = `Selected ${buttons[i].textContent} out of ${buttons[4].textContent}`;
}

submit.addEventListener("click", function () {
  messagePage.classList.remove("hidden");
  main.classList.add("hidden");
});
