
const nodeAvatar = document.querySelector(".introduction > img");

// Use addEventListener is the most flexible and modern way of doing things
nodeAvatar.addEventListener(
    'click',
    function() { nodeAvatar.src = "./image/avatar.svg"; }
);