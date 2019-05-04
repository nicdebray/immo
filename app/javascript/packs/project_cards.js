const plusValues = document.querySelectorAll('.project-card-capital-return-15-content');
const burgerDots = document.querySelectorAll('.card-all-icons-content-dots');

const showHidePreviousElement = (event) => {
  event.currentTarget.previousElementSibling.classList.toggle('hidden');
};

const showHidenextElement = (event) => {
  event.currentTarget.nextElementSibling.classList.toggle('hidden');
};


// show hide info about plus values
plusValues.forEach((plusValue) => {
  plusValue.addEventListener('click', showHidePreviousElement);
});


// show hide actions icons
burgerDots.forEach((burgerDot) => {
  burgerDot.addEventListener('click', showHidenextElement);
});
