
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

    // As part of point 3 we are also asked to
    // change the background color of the ping-bg
    // class container
    const nodeContainer = document.querySelector(".pink-bg");
    nodeContainer.style.backgroundColor = "#750ff7"
}