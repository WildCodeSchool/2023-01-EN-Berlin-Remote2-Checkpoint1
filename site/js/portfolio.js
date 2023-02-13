const avatarChange = document.querySelector(".avatar");
avatarChange.addEventListener("click", function () {
  avatarChange.src = "image/avatar.svg";
});

const modify = document.querySelector("#modify__button");
const newName = document.querySelector("#name");
const colorBackground = document.querySelectorAll(".pink-bg");
const colorText = document.querySelectorAll(".pink-text");
const colorLinks = document.querySelectorAll("a");

modify.addEventListener("click", function () {
  newName.innerHTML = prompt("Enter your name");
  newName.style.color = "white";

  const newColor = prompt("Enter background color");
  colorBackground.forEach((element) => {
    element.style.backgroundColor = newColor;
  });
  colorText.forEach((element) => {
    element.style.color = newColor;
  });
  colorLinks.forEach((element) => {
    element.style.color = newColor;
  });
});

const modifyDevTools = document.querySelector("#modify__dev-tools");
const devTools = document.querySelectorAll('#front-dev-tools li');

modifyDevTools.addEventListener("click", function(){
    console.log(devTools);

    devTools.forEach ((element, index) => {
        element.innerHTML = ['VSCode', 'Terminal', 'Github'][index % 3];
    });

});