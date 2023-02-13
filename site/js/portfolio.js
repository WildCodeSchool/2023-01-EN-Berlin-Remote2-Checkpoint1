
const nodeAvatar = document.querySelector(".introduction > img");

function toggleAvatar() {
    nodeAvatar.src = "./image/avatar.svg";
}

nodeAvatar.onclick = toggleAvatar;