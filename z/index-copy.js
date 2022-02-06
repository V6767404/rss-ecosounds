// const audio = document.querySelector("audio");
// function playAudio() {
//   audio.currentTime = 0;
//   audio.play();
// }
// function pauseAudio() {
//   audio.pause();
// }

// const audio = document.querySelector("audio");
// const playBtn = document.querySelector(".play-btn");
// const pauseBtn = document.querySelector(".pause-btn");

// function playAudio() {
//   audio.currentTime = 0;
//   audio.play();
// }

// function pauseAudio() {
//   audio.pause();
// }

// playBtn.addEventListener("click", playAudio);
// pauseBtn.addEventListener("click", pauseAudio);

// const playBtn = document.querySelector(".play");
// const pauseBtn = document.querySelector(".pause");

let isPlay = false;
const button = document.querySelector("button");
const logo = document.querySelector("logo");

const audio = new Audio();

function playAudio() {
  audio.src = "./assets/audio/forest.mp3";
  audio.currentTime = 0;
  audio.play();
  button.classList.toggle("pause");
}

function pauseAudio() {
  audio.pause();
  button.classList.toggle("pause");
}

function chooseBtn() {
  if (isPlay) {
    isPlay = false;
    pauseAudio();
    // console.log("pause");
  } else {
    isPlay = true;
    playAudio();
    // console.log("play");
  }
}

button.addEventListener("click", chooseBtn);
//  MAIN BTN END

const navLinks = document.querySelectorAll(".nav-item");
const main = document.querySelector("main");
const dataItem = document.querySelector("data-item");

const changeMenu = (event) => {
  console.log("Change-menu");
  console.log(event);
  //   console.log(navLinks.classList);
  if (event.target.classlist.contains("nav-item")) {
    // images.src = "assets/img/${event.target.dataset.image}.jpg"
    console.log("drozd");
    main.classList.add("drozd");
  }
  //   console.log("drozd");
  //   main.classList.add("drozd");
};

navLinks.forEach((el) => el.addEventListener("click", changeMenu));

// function changeImage(event) {
//   if (event.target.classlist.contains("nav-link")) {
//     images.src = "assets/img/${event.target.dataset.image}.jpg";
//   }
// }
// links.forEach((link) => link.addEventListener("click", changeImage));
