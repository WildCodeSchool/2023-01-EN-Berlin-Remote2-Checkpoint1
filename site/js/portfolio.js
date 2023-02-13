"use strict";

const avatarImg = document.querySelector(".avatarImg");

avatarImg.addEventListener("click", function () {
  avatarImg.src = "./image/avatar.svg";
});

const modifyBtn = document.querySelector(".description--btn ");
const defaultName = document.querySelector("#name");
const defaultBackground = document.querySelectorAll(".pink-bg");
const frontBackEnd = document.querySelector(".skills");
const pinkText = document.querySelectorAll(".pink-text");
const linkElement = document.querySelectorAll("a");

modifyBtn.addEventListener("click", function () {
  const color = prompt(
    "please add color (example: Red,Green,Yellow ...#hex,rgb"
  );
  defaultBackground.forEach((elem) => {
    elem.style.background = color;
  });

  linkElement.forEach((elem) => {
    elem.style.color = color;
  });

  modifyBtn.style.background = color;

  pinkText.forEach((elem) => {
    elem.style.color = color;
  });

  const user = prompt("please add your name");
  defaultName.textContent = user;
});
const task3 = function () {
  const listBtn = document.querySelector(".listModify ");
  const list = document.querySelector("#front-dev-tools");

  listBtn.addEventListener("click", function () {
    document.querySelector(".one").textContent = "VSCode";
    document.querySelector(".two").textContent = "Github";
    document.querySelector(".three").textContent = "Terminal";
  });
};
task3();

const inputText = document.querySelector(".inputText");
const inputBtn = document.querySelector(".inputBtn");
const inputList = document.querySelector(".inputList");

inputBtn.addEventListener("click", function () {
  const text = inputText.value;

  const list = document.createElement("li");

  list.textContent = text;
  inputList.appendChild(list);
  inputText.value = "";
});
