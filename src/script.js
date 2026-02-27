const btnHamburger = document.querySelector(".navbar__hamburger-btn");
const navList = document.querySelector(".navbar__list");
const listItems = document.querySelectorAll(".navbar__item");
const btnLoadMore = document.querySelector(".load-more-btn");
const reviewsContainer = document.querySelector(".reviews"); // Define the container

btnHamburger.addEventListener("click", function () {
  btnHamburger.classList.toggle("navbar__hamburger-bar--active");
  navList.classList.toggle("navbar__list--active");
});

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    btnHamburger.classList.remove("navbar__hamburger-bar--active");
    navList.classList.remove("navbar__list--active");
  });
});


btnLoadMore.addEventListener("click", function () {
  reviewsContainer.classList.toggle("load-more-btn--active");
});