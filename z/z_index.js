// function changeImage(event) {
//     if (event.target.classlist.contains("nav-link")) {
//       images.src = "assets/img/${event.target.dataset.image}.jpg";
//     }
//   }
//   links.forEach((link) => link.addEventListener("click", changeImage));

// function pauseAudio() {
//     const _0x469ae8 = _0x11a1b3;
//     (play[_0x469ae8(0x1f2)]["backgroundImage"] = "url(\x22./assets/svg/play.svg\x22)"), audio[_0x469ae8(0x1f5)](), (isPlay = ![]);
// }

// https://github.com/rolling-scopes-school/tasks/blob/master/tasks/portfolio/portfolio-part3-hints.md

const portfolioBtn = document.querySelector(".portfolio-btn");
const portfolioImages = document.querySelectorAll(".portfolio-image");

portfolioBtn.addEventListener("click", () => {
  portfolioImage.src = "./assets/img/winter/1.jpg";
});

portfolioImages.forEach(
  (img, index) => (img.src = `./assets/img/winter/${index + 1}.jpg`)
);
// img.src = "./assets/img/winter/" + (index + 1) + ".jpg"

function changeImage(event) {
  if (event.target.classList.contains("portfolio-btn")) {
    // здесь код функции, меняющей src изображений
  }
}

// Советы по выполнению задания Portfolio#3-Добавление функционала
// https://github.com/rolling-scopes-school/tasks/blob/master/tasks/portfolio/portfolio-part3-hints.md
const portfolioBtn = document.querySelector(".portfolio-btn");
const portfolioImage = document.querySelector(".portfolio-image");

portfolioBtn.addEventListener("click", () => {
  portfolioImage.src = "./assets/img/winter/1.jpg";
});

portfolioImages.forEach(
  (img, index) => (img.src = `./assets/img/winter/${index + 1}.jpg`)
);

function changeImage(event) {
  if (event.target.classList.contains("portfolio-btn")) {
    // здесь код функции, меняющей src изображений
  }
}

// data-атрибуты
<div class="portfolio-btns">
  <button class="portfolio-btn" data-season="winter">
    Winter
  </button>
  <button class="portfolio-btn" data-season="spring">
    Spring
  </button>
  <button class="portfolio-btn" data-season="summer">
    Summer
  </button>
  <button class="portfolio-btn" data-season="autumn">
    Autumn
  </button>
</div>;
// Кеширование изображений
function preloadSummerImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/summer/${i}.jpg`;
  }
}
preloadSummerImages();

const seasons = ["winter", "spring", "summer", "autumn"];
// Подсветка активной кнопки
const portfolioBtn = document.querySelector(".portfolio-btn");

portfolioBtn.style.backgroundColor = "#bdae82";
portfolioBtn.style.color = "#000";
portfolioBtn.classList.add("active");
