const plusValues = document.querySelectorAll('.project-card-capital-return-15-content');


const plusValuesShowHide = (event) => {
  event.currentTarget.firstElementChild.classList.toggle('hidden');
};


plusValues.forEach((plusValue) => {
  plusValue.addEventListener('click', plusValuesShowHide);
});
