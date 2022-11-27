"use strict";

const submit = document.querySelector(".button");
const message = document.querySelector(".message-page");
const main = document.querySelector(".main");

submit.addEventListener("click", function () {
  message.classList.remove("hidden");
  main.classList.add("hidden");
});
