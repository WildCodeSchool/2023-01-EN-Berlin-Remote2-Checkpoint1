const nodeAvatar = document.querySelector(".introduction > img");

// Use addEventListener is the most flexible and modern way of doing things
nodeAvatar.addEventListener("click", function () {
    nodeAvatar.src = "./image/avatar.svg";
});

function changeName() {
    const nodeName = document.querySelector("#name");
    nodeName.innerText = prompt("enter your name");
    nodeName.style.color = "white";

    // As part of point 3 we are also asked to
    // change the background color of the ping-bg
    // class container
    const nodeContainers = document.querySelectorAll(".pink-bg");
    
    for (let index = 0; index < nodeContainers.length; index++) {
        const element = nodeContainers[index];
        element.style.backgroundColor = "#750ff7"
    }

    const nodeTexts = document.querySelectorAll(".pink-text");

    for (let index = 0; index < nodeTexts.length; index++) {
        const element = nodeTexts[index];
        element.style.color = "#750ff7"
    }
}