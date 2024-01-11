'use strict';

const modal = document.querySelector('.modal-dialog');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.btn-close');
const signup = document.querySelectorAll('.sign-up');


signup.forEach(button => {
  button.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});


closebtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});