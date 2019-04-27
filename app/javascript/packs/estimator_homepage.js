const estimatorResult = document.getElementById('result-estimator');
const estimatorContent = document.getElementById('estimator-content');

// add only one clear icon

const addEraserIcon = () => {
  if (estimatorResult.children.length < 4) {
    estimatorResult.insertAdjacentHTML('beforeend', `<i class="far fa-times-circle" id="estimator-eraser"></i>`);
  };
};

// clear results

const estimatorResultsClear = () => {
  while (estimatorResult.firstChild) {
    estimatorResult.removeChild(estimatorResult.firstChild);
  };
};

const estimatorEraserIcon = () => {
  const estimatorEraser = document.getElementById('estimator-eraser');
  estimatorEraser.addEventListener('click', estimatorResultsClear);
};

// generate results

const generateResults = (a,b,c) => {
  let divResult = '';
  let divResult2 = '';
  const months_rent = [10, 11, 12];
  estimatorResultsClear();
  months_rent.forEach((n) => {
    if(document.querySelector('.selected-estimator').innerText === 'Rendement') {
    divResult = `<div id="result-estimator${n}" class="result-estim"> Basé sur ${n} mois de loyer <div class="result-estim-value">${Math.round((((b*n)/((a*1.15)+c))*10000))/100} %</div> </div>`;}
    else if (document.querySelector('.selected-estimator').innerText === 'Loyer mensuel') {
    divResult = `<div id="result-estimator${n}" class="result-estim"> Basé sur ${n} mois de loyer <div class="result-estim-value">${Math.round((((a*1.15)+b)*(c/100))/n)} €</div> </div>`;}
    else{
    divResult = `<div id="result-estimator${n}" class="result-estim"> Basé sur ${n} mois de loyer <div class="result-estim-value">${Math.round((((a*n)/(c/100))-b)/1.15)} €</div> </div>`;}
    estimatorResult.insertAdjacentHTML('beforeend', divResult);
  });
};

// estimator rental yield

const estimatorRentalYield = () => {
  const purchasePrice = parseInt(document.getElementById('purchase-price-input-estimator').value);
  const monthlyRent = parseInt(document.getElementById('monthly-rent-input-estimator').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator').value);
  generateResults(purchasePrice, monthlyRent, extraWorks);
  addEraserIcon();
  estimatorEraserIcon();
};

// estimator monthly rent

const estimatorMonthlyRent = () => {
  const purchasePrice = parseInt(document.getElementById('purchase-price-input-estimator-mr').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator-mr').value);
  const rentalYield = parseInt(document.getElementById('rental-yield-input-estimator-mr').value);
  generateResults(purchasePrice, extraWorks, rentalYield);
  addEraserIcon();
  estimatorEraserIcon();
};

// estimator purchase price

const estimatorPurchasePrice = () => {
  const monthlyRent = parseInt(document.getElementById('monthly-rent-input-estimator-pp').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator-pp').value);
  const rentalYield = parseInt(document.getElementById('rental-yield-input-estimator-pp').value);
  generateResults(monthlyRent, extraWorks, rentalYield);
  addEraserIcon();
  estimatorEraserIcon();
};

// add identifier class to the selected estimator

const removeSelected = () => {
  const estimatorChoices = document.querySelectorAll('.description-estimator');
  estimatorChoices.forEach((choice) => {
    choice.classList.remove('selected-estimator');
  });
};

const estimatorChoices = document.querySelectorAll('.description-estimator');

estimatorChoices.forEach((choice) => {
  choice.addEventListener('click', (event) => {
    removeSelected();
    event.currentTarget.classList.add('selected-estimator');
  })
})

// run the correct estimator function

 const estimatorCheckBtn = document.getElementById('estimator-checker');
 estimatorCheckBtn.addEventListener('click', () => {
   if(document.querySelector('.selected-estimator').innerText === 'Rendement')
  estimatorRentalYield();
     else if (document.querySelector('.selected-estimator').innerText === 'Loyer mensuel')
  estimatorMonthlyRent();
   else
  estimatorPurchasePrice();
     });

// select estimator and show correct inputs

const hideAllEstimator = () => {
  const estimatorSelection = document.querySelectorAll('.estimator-inputs');
  estimatorSelection.forEach((estimator) => {
    estimator.classList.add('hidden');
  });
};

const estimatorSelection = document.querySelectorAll('.description-estimator');

estimatorSelection.forEach((estimator) => {
  estimator.addEventListener('click', (event) => {
    hideAllEstimator();
    const classEstimator = `.${event.currentTarget.innerText[0]}`;
    document.querySelector(`${classEstimator}`).classList.remove('hidden');
  });
});

// default value to zero removed/added when focus in out

const formInput = document.querySelectorAll('.home-input-estimator');

formInput.forEach((field) => {
    field.addEventListener('focusin', () => {
      if (field.value === '0') {
      field.value = '';
      };
    });
    field.addEventListener('focusout', () => {
      if (field.value === '') {
        field.value = '0';
      };
    });
});

// tooltip-prix

const toolTipPrices = document.querySelectorAll('.estimator-tooltip');
const toolTipPrixContents = document.querySelectorAll('.estimator-tooltip-content');


toolTipPrices.forEach((toolTipPrice) => {
  toolTipPrice.addEventListener('click', (event) => {
    event.currentTarget.firstChild.nextSibling.childNodes[1].classList.toggle('hidden');
  });
});



