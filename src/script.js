"use strict";

/**
 *
 * UTILS
 *
 */

const addEventOnElements = (elements, eventType, callback) =>
  elements.forEach((element) => element.addEventListener(eventType, callback));

/**
 * LOADING
 *
 * close loading screen after page load
 */

const loading = document.querySelector("[data-loading]");

window.addEventListener("load", () => {
  loading.classList.add("loaded");
  document.body.classList.add("loaded");
});

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

/*
 * NAVBAR
 */

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER & BACK TO TOP
 **/

const header = document.querySelector("[data-header]");
const backToTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = () => {
  lastScrollPos < window.scrollY
    ? header.classList.add("active")
    : header.classList.remove("active");
  lastScrollPos = window.scrollY;
};

const shouldBackToTopActive = () => {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backToTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backToTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", shouldBackToTopActive);

/*
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderProps = () => {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = () => {
  currentSlidePos >= heroSliderItems.length - 1
    ? (currentSlidePos = 0)
    : currentSlidePos++;
  updateSliderProps();
};

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = () => {
  currentSlidePos <= 0
    ? (currentSlidePos = heroSliderItems.length - 1)
    : currentSlidePos--;
  updateSliderProps();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);
