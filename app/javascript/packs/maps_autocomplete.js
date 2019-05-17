// api const variables
const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const keyApi = 'pk.eyJ1IjoibmljZGViIiwiYSI6ImNqdnBtZnJqNTAwZGszeW1hbWNjbWdkZDAifQ._PIn4AYhdlXvfaZSSOM4MA';

// on-page elements
const searchInput = document.querySelector('.form-address');
const resultDiv = document.querySelector('.project_address')


const insertResults = (results) => {
  while (document.querySelector('.lu-results')){
    const previousResults = document.querySelector('.lu-results');
    resultDiv.removeChild(previousResults);
  };
  const ul = document.createElement('ul');
  ul.classList = 'lu-results';
  resultDiv.appendChild(ul);
  results.forEach((result) => {
    if(result.place_name.includes('Belgium')) {
      ul.insertAdjacentHTML('beforeend', `<li class="resultLi">${result.place_name}</li>`);
    }
  })
}



const getAddresses = (event) => {
  if (event.currentTarget.value != '') {
    fetch(`${baseURL}${event.currentTarget.value}.json?access_token=${keyApi}`)
      .then(response => response.json())
      .then(data => {
        insertResults(data.features);
      });
  }
};


searchInput.addEventListener('keyup', getAddresses);
