"use strict";

const hamburgerButton = document.querySelector('.header___nav___mobile___hamburger');
const hamburgerMenu = document.querySelector('.header___nav___mobile-menu');
const hamburgerMenuLines = document.querySelectorAll('.header___nav___mobile___hamburger___line');

hamburgerButton.addEventListener('click', () => {
  if(hamburgerMenu.classList.contains('animate-in')) {
    hamburgerMenu.classList.add('animate-out');
    hamburgerMenu.classList.remove('animate-in');

    hamburgerButton.classList.remove('opened-hamburger');
    hamburgerMenuLines[0].classList.remove('line-1');
    hamburgerMenuLines[1].classList.remove('line-2');
    hamburgerMenuLines[2].classList.remove('line-3');
    return;
  }

  if(hamburgerMenu.classList.contains('animate-out')) {
    hamburgerMenu.classList.add('animate-in');
    hamburgerMenu.classList.remove('animate-out');

    hamburgerButton.classList.add('opened-hamburger');
    hamburgerMenuLines[0].classList.add('line-1');
    hamburgerMenuLines[1].classList.add('line-2');
    hamburgerMenuLines[2].classList.add('line-3');
  }
});