"use strict";

const main = document.querySelector(".main");
const submit = document.querySelector(".button");
const messagePage = document.querySelector(".message-page");
const message = document.querySelector(".message");

let buttons = document.querySelectorAll(".buttons");

function submitBtn() {
  messagePage.classList.remove("hidden");
  main.classList.add("hidden");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    message.textContent = `You selected ${buttons[i].textContent} out of ${buttons.length} `;
  });
}

submit.addEventListener("click", submitBtn);
