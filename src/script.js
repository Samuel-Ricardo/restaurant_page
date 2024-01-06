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
