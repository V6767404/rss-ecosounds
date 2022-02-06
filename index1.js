let isPlay = false;
const button = document.querySelector("button");
const logo = document.querySelector("logo");
const spec = ["drozd", "forest", "javoronok", "slavka", "solovey", "zarynka"];

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

/////////  MAIN BTN /////////
button.addEventListener("click", chooseBtn);

const navLinks = document.querySelectorAll(".nav-item");
const main = document.querySelector("main");
const dataItem = document.querySelector("data-item");

// console.log(navLinks[1].dataset.item);

///////// NAV MENU /////////

// console.log(spec[0]);
// console.log('url("./assets/img/' + spec[0] + '.jpg")');
// console.log(`url("./assets/img/${spec[0]}.jpg")`);

const changeMenu = (element) => {
  switch (element.dataset.item) {
    case "drozd":
      // console.log("drozd");
      audio.src = "./assets/audio/drozd.mp3";
      main.className = "main drozd";
      element.classList.add("active");
      // main.setAttribute("class", "main drozd");
      //   main.style.backgroundImage = 'url("./assets/img/drozd.jpg")';
      //   main.style.backgroundImage = 'url("./assets/img/' + spec[0] + '.jpg")';
      //   main.style.backgroundImage = `url("./assets/img/${spec[0]}.jpg")`;
      playAudio();
      isPlay = true;
      break;
    case "javoronok":
      console.log("javoronok");
      audio.src = "./assets/audio/javoronok.mp3";
      main.className = "main javoronok";
      
      playAudio();
      isPlay = true;
      break;
    case "slavka":
      audio.src = "./assets/audio/slavka.mp3";
      main.className = "main slavka";
      playAudio();
      isPlay = true;
      break;
    case "solovey":
      audio.src = "./assets/audio/solovey.mp3";
      main.className = "main solovey";
      playAudio();
      isPlay = true;
      break;
    case "zarynka":
      audio.src = "./assets/audio/zarynka.mp3";
      main.className = "main zarynka";
      playAudio();
      isPlay = true;
      break;
    case "forest":
      audio.src = "./assets/audio/forest.mp3";
      main.className = "main";
      playAudio();
      isPlay = true;
      break;
  }
};

navLinks.forEach((el) =>
  el.addEventListener("click", function () {
    delActiveClass(); 
    el.classList.add("active");
    changeMenu(el);
  })
);

function delActiveClass() {
  navLinks.forEach((el) => 
    el.classList.remove("active"))

  }



// function changeImage(event) {
//   if (event.target.classList.contains("portfolio-btn")) {
//     // здесь код функции, меняющей src изображений
//   }
// }



  // Кеширование изображений
function preloadImages() {
  for (let i = 0; i <= 5; i++) {
    const img = new Image();
    // img.src = "./assets/img/" + spec[i] + ".jpg";
    img.src = `./assets/img/${spec[i]}.jpg`;
  }
}
preloadImages();




