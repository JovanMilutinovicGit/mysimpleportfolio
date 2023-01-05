const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".right");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
window.onscroll = () => {
  let cardList = document.querySelector(".list-cards");
  let aboutSection = document.querySelector(".about-me-section");
  let content = document.querySelector(".a");

  let positionCardList = cardList.getBoundingClientRect().top;
  let positionAboutSec = aboutSection.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (positionCardList < screenPosition) {
    cardList.classList.add("animate");
  } else if (positionAboutSec < 900) {
    content.classList.add("animate");
  }
};
