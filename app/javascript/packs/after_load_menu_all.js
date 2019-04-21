const showHideMenu = () => {
  const menu = document.querySelector('.main-menu');
  menu.classList.toggle('hidden');
  };

const switchIconMenu = () => {
  const menuIcons = document.querySelectorAll('.navbar-main-burger .navbar-main-icon');
  menuIcons.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
};

const burgerMenu = document.querySelectorAll('.navbar-main-burger .navbar-main-icon');

burgerMenu.forEach((icon) => {
  icon.addEventListener('click', () => {
    switchIconMenu();
    showHideMenu();
  });
});
