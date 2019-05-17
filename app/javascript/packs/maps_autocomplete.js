// api const variables
const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const keyApi = 'pk.eyJ1IjoibmljZGViIiwiYSI6ImNqdnBtZnJqNTAwZGszeW1hbWNjbWdkZDAifQ._PIn4AYhdlXvfaZSSOM4MA';

// on-page elements
const searchInput = document.querySelector('.form-address');
const resultDiv = document.querySelector('.project_address')
const belgiumPlaces = 0;


//check if there's at least one result to display
const belgiumResults = (results) => {
  const belgiumArray = []
  results.forEach((result) => {
    if(result.place_name.includes('Belgium')) {
      belgiumArray.push(result);
    }
  })
  return belgiumArray.length;
}

const selectedSuggestion = (event) => {
  searchInput.value = event.currentTarget.innerText;
  const previousResults = document.querySelector('.lu-results');
  resultDiv.removeChild(previousResults);

}

// insert results
const insertResults = (results) => {
  // check if there's a <lu>, if so remove it, before reinserting an updated one
  while (document.querySelector('.lu-results')){
    const previousResults = document.querySelector('.lu-results');
    resultDiv.removeChild(previousResults);
  };
  // validate there at least one result in order to push the ul and its content
  if(belgiumResults(results) > 0) {
  const ul = document.createElement('ul');
  ul.classList = 'lu-results card';
  resultDiv.appendChild(ul);
  results.forEach((result) => {
    if(result.place_name.includes('Belgium')) {
      const li = document.createElement('li');
      li.classList = 'resultLi';
      li.innerHTML = result.place_name;
      ul.appendChild(li);
      li.addEventListener('click', (event) => {
        selectedSuggestion(event);
      })
    }
  })
}
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

