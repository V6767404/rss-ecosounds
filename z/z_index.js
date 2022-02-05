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

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtn.addEventListener('click', () => {
    portfolioImage.src = "./assets/img/winter/1.jpg"
 });

portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
// img.src = "./assets/img/winter/" + (index + 1) + ".jpg"

function changeImage(event) {
    if(event.target.classList.contains('portfolio-btn')) {
      // здесь код функции, меняющей src изображений
    }
  }