
const nodeAvatar = document.querySelector(".introduction > img");

// Use addEventListener is the most flexible and modern way of doing things
nodeAvatar.addEventListener(
    'click',
    function() { nodeAvatar.src = "./image/avatar.svg"; }
);

function changeName() {
    const nodeName = document.querySelector("#name");
    nodeName.innerText = prompt("enter your name");
    nodeName.style.color = "white";
}