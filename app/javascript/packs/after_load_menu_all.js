const menu = document.querySelector('.main-menu');
const burgerMenu = document.querySelectorAll('.navbar-main-burger .navbar-main-icon');


const showHideMenu = () => {
  menu.classList.toggle('hidden');
  };

const switchIconMenu = () => {
  burgerMenu.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
};

burgerMenu.forEach((icon) => {
  icon.addEventListener('click', () => {
    switchIconMenu();
    showHideMenu();
  });
});
