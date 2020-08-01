const imgBackground = document.querySelector(".img-background");
const natureContainer = document.querySelector(".nature-container");
const galleryContainer = document.querySelector(".gallery-container");
const header = document.querySelector(".header");
const pages = document.querySelectorAll(".page");
const scrollDown = document.querySelector(".scroll-down");
const menuItems = document.querySelectorAll(".menu-name");
const slides = document.querySelectorAll(".slide");
const contentDesc = document.querySelectorAll(".content-description");
const imgGallery = document.querySelectorAll(".img-gallery");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const navbarActive = document.querySelector("navbar-active");
const menuHref = document.querySelectorAll(".menu-name");

let currentPage = 0;
let currentMenu = 0;

menuHref.forEach((m, i) => {
  m.addEventListener("click", () => {
    if (menuHref[i].getAttribute("href") === "#home") {
      natureContainer.classList.remove("nature-disable");
    } else {
      natureContainer.classList.add("nature-disable");
    }
  });
});

// Change menu active
menuItems.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    menuActive(index);
  });
});

// Change Slides
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    nextPage(index);
  });
});

// Functions
const menuActive = (menuNumber) => {
  const current = menuItems[currentMenu];
  const menuActive = menuItems[menuNumber];
  if (current.classList.contains("menu-active")) {
    current.classList.remove("menu-active");
    menuActive.classList.add("menu-active");
  }

  currentMenu = menuNumber;
};

const scrollChange = () => {
  const y = this.scrollY;
  if (y > this.innerHeight / 4) {
    scrollDown.style.opacity = "0";
    header.classList.add("mheader-active");
    galleryContainer.classList.add("gallery-active");
  } else {
    header.classList.remove("mheader-active");
    scrollDown.style.opacity = "1";
    galleryContainer.classList.remove("gallery-active");
  }
};

const nextPage = (pageNumber) => {
  const currentContent = contentDesc[currentPage];
  const nextContent = contentDesc[pageNumber];
  if (currentContent.classList.contains("content-active")) {
    currentContent.classList.remove("content-active");
    imgGallery[currentPage].classList.remove("img-active");
    nextContent.classList.add("content-active");
    imgGallery[pageNumber].classList.add("img-active");
    slides[currentPage].classList.remove("active");
    slides[pageNumber].classList.add("active");
    currentPage = pageNumber;
  }
};

// Event Listener
document.addEventListener("scroll", scrollChange);
navbar.addEventListener("click", () => {
  menu.classList.toggle("navbar-active");
  header.classList.toggle("header-active");
});

menu.addEventListener("click", (e) => {
  if (e.target !== navbarActive) {
    menu.classList.remove("navbar-active");
  }
});
