"use strict";

const navbar = document.getElementsByClassName('header___nav');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar[0].classList.add('navbar___bg');
  } else {
    navbar[0].classList.remove('navbar___bg');
  }
});

