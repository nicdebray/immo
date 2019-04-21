const showHideMenu = () => {
  const menu = document.querySelector('.main-menu');
  menu.classList.toggle('hidden');
};

const burgerMenu = document.querySelector('.navbar-main-burger');

burgerMenu.addEventListener('click', () => {
  console.log('pizza');
  showHideMenu()
});
