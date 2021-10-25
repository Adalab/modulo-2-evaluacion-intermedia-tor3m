"use strict";

const button = document.querySelector(".js-button");
const inputValue = document.querySelector(".js-writeNumber");
const resultElement = document.querySelector(".js-result");
const tryElement = document.querySelector(".js-try");

//randon number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randonNumber = getRandomNumber(100);
console.log(randonNumber);

let counter = 0;
function counterNumber() {
  tryElement.innerHTML = `Número de intentos:` + (++counter);
}

function handlerconditionalsbutton() {
  const putNumber = parseInt(inputValue.value);
  if (putNumber <= 0 || putNumber >= 100) {
    resultElement.innerHTML = `El número debe estar entre 1 y 100 🤕`;
  } else if (putNumber > randonNumber) {
    resultElement.innerHTML = "Demasiado alto 🤪⬇";
  } else if (putNumber < randonNumber) {
    resultElement.innerHTML = "Demasiado bajo 🙄⬆";
  } else if (putNumber === randonNumber) {
    resultElement.innerHTML = `😃Has ganado campeona👏👏👏🥳`;
  }
}

function handlerclickbutton(ev) {
  ev.preventDefault();
  handlerconditionalsbutton();
  counterNumber();
}

button.addEventListener("click", handlerclickbutton);
