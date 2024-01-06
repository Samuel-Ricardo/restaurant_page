"use strict";

/**
 *
 * UTILS
 *
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

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

const navbar = document.querySelector("[daata-navbar]");
const navTogglers = document.querySelector("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOn;
