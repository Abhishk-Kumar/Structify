// document.querySelector('.menu-icon').addEventListener('click', function () {
//     document.querySelectorAll('.menu-item').forEach(function (item) {
//         item.style.display = item.style.display === 'block' ? 'none' : 'block';
//     });
// });

// const menuIcon = document.querySelector('.menu-icon');
// const menu = document.querySelector('.menu');

// menuIcon.addEventListener('click', () => {
//   menu.classList.toggle('show');
// });




// script.js
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const hamburgerIcon = document.querySelector('.ham-button');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});

hamburgerIcon.addEventListener('click', () => {
  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
});





