// api const variables
const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const keyApi = 'pk.eyJ1IjoibmljZGViIiwiYSI6ImNqdnBtZnJqNTAwZGszeW1hbWNjbWdkZDAifQ._PIn4AYhdlXvfaZSSOM4MA';

// on-page elements
const searchInput = document.querySelector('.form-address');
const resultDiv = document.querySelector('.project_address');
const belgiumPlaces = 0;


//check if there's at least one result to display
const belgiumResults = (results) => {
  const belgiumArray = new Array;
  results.forEach((result) => {
    const resultName = result.place_name;
    if(resultName.includes('Belgium')) {
      belgiumArray.push(result);
    }
  })
  return belgiumArray.length;
};

// set the selected suggestion in the input and clear suggestion
const setSuggestion = (event) => {
  searchInput.value = event.currentTarget.innerText;
  const previousResults = document.querySelector('.ul-results');
  resultDiv.removeChild(previousResults);
};

// check if there's a <ul>, if so remove it, before reinserting an updated one
const removeUlPresent = () => {
  const ulResults = document.querySelector('.ul-results');
  if (ulResults){
    resultDiv.removeChild(ulResults);
  };
};

// validate there at least one result and then create the <ul>
const createUl = (results) => {
  if(belgiumResults(results) > 0) {
    const ul = document.createElement('ul');
    ul.classList = 'ul-results card';
    resultDiv.appendChild(ul);
  };
};

// insert results
const insertResults = (results) => {
  removeUlPresent();
  createUl(results);
  results.forEach((result) => {
    if(result.place_name.includes('Belgium')) {
      const ul = document.querySelector('.ul-results');
      const li = document.createElement('li');
      li.classList = 'resultLi';
      li.innerHTML = result.place_name;
      ul.appendChild(li);
      li.addEventListener('click', (event) => {
        setSuggestion(event);
      });
    };
  });
};

const getAddresses = (event) => {
  if (event.currentTarget.value != '') {
    fetch(`${baseURL}${event.currentTarget.value}.json?access_token=${keyApi}`)
      .then(response => response.json())
      .then(data => {
        insertResults(data.features);
      });
  }
};

const removeSuggest = () => {
  document.addEventListener('click', (event) => {
    const resultSuggestions = document.getElementById('project_address');
    if(event.currentTarget != resultSuggestions) {
      removeUlPresent();
    }
  });
};

searchInput.addEventListener('keyup', getAddresses);

// when focus-ing remove suggestions if click outside and
// when 'refocusing' re-show suggestions based on the current input
searchInput.addEventListener('focusin', (event) => {
  removeSuggest();
  getAddresses(event);
});
