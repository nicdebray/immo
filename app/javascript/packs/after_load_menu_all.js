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


// HIHIHIHI
console.log(`Big JavaScript Kiss!!! If you're reading this probably you can improve this code, give feedback, tips, tricks, love :)` )
