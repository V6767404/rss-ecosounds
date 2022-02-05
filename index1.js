let isPlay = false;
const button = document.querySelector("button");
const logo = document.querySelector("logo");

const audio = new Audio();
audio.src = "./assets/audio/forest.mp3";

function playAudio() {
    audio.currentTime = 0;
    audio.play();
    button.classList.add("pause");
}

function pauseAudio() {
    audio.pause();
    button.classList.remove("pause");
}

function chooseBtn() {
    if (isPlay) {
        isPlay = false;
        pauseAudio();
    } else {
        isPlay = true;
        playAudio();
    }
}

//  MAIN BTN 
button.addEventListener("click", chooseBtn);


const navLinks = document.querySelectorAll(".nav-item");
const main = document.querySelector("main");
const dataItem = document.querySelector("data-item");

// console.log(navLinks[1].dataset.item);

// NAV MENU 
const changeMenu = (element) => {

    switch (element.dataset.item) {
        case ("drozd"):
            // console.log("drozd");
            audio.src = "./assets/audio/drozd.mp3";
            // main.classList.add("drozd");
            // main.style.backgroundImage="url(\"./assets/img/slavka.jpg\")";
            main.className = "main drozd";
            // main.setAttribute("class", "main drozd");
            playAudio();
            isPlay = true;
            break;
        case ("javoronok"):
            console.log("javoronok");
            audio.src = "./assets/audio/javoronok.mp3";
            main.className = "main javoronok";
            playAudio();
            isPlay = true;
            break;
        case ("slavka"):
            audio.src = "./assets/audio/slavka.mp3";
            main.className = "main slavka";
            playAudio();
            isPlay = true;
            break;
        case ("solovey"):
            audio.src = "./assets/audio/solovey.mp3";
            main.className = "main solovey";
            playAudio();
            isPlay = true;
            break;
        case ("zarynka"):
            audio.src = "./assets/audio/zarynka.mp3";
            main.className = "main zarynka";
            playAudio();
            isPlay = true;
            break;
        case ("forest"):
            // console.log("zarynka");
            audio.src = "./assets/audio/forest.mp3";
            main.className = "main";
            playAudio();
            isPlay = true;
            break;
    }
};

navLinks.forEach((el) => el.addEventListener("click", function () { changeMenu(el) }));
