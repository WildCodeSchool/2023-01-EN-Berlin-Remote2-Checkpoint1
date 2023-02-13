const avatarList = document.querySelectorAll(".avatar");
avatarList.forEach(picture => {
    picture.addEventListener('click', () => {
        avatarList.forEach(avatar => {
            if (avatar.classList.contains('hidden')) {
                avatar.classList.remove('hidden');
            } else {
                avatar.classList.add('hidden');
            }
        })
    })
})

const modibutton = document.querySelector(".modibutton");
const userName = document.querySelector("#name");
const backGround = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");
modibutton.addEventListener('click', () => {
    const promptColor = prompt('Enter a color:');
    const promptName = prompt('Enter your name:');
    userName.innerText = promptName;
    userName.style.color = 'white';
    backGround.forEach(element => {
        element.style.backgroundColor = promptColor;
    })
    pinkText.forEach(element => {
        element.style.color = promptColor;
    })
})