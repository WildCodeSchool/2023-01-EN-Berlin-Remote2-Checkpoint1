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
    let nodeContainer = upTo(nodeName, "DIV");
    nodeContainer.style.backgroundColor = "#750ff7";
}

/**
 * Function copied from Stackoverflow:
 * https://stackoverflow.com/questions/6856871/getting-the-parent-div-of-element
 *
 * @param {HTMLElement} el : DOM node of element
 * @param {string} tagName : tag name of ancestor
 * @returns first ancestor with tag or undefined if not found
 */
function upTo(el, tagName) {
    tagName = tagName.toLowerCase();

    while (el && el.parentNode) {
        el = el.parentNode;
        if (el.tagName && el.tagName.toLowerCase() == tagName) {
            return el;
        }
    }

    // Many DOM methods return null if they don't
    // find the element they are searching for
    // It would be OK to omit the following and just
    // return undefined
    return null;
}
