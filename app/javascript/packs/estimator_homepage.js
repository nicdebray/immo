const estimatorResult = document.getElementById('result-estimator');
const estimatorContent = document.getElementById('estimator-content');
const estimatorSaveLink = document.getElementById('estimator-save-link');
const estimatorCheckBtn = document.getElementById('estimator-checker');

// class toggle

const showHideElement = (e, c) => {
  e.classList.toggle(c);
  };

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
  let estimatorSelected = document.querySelector('.selected-estimator').innerText;
  const months_rent = [10, 11, 12];
  estimatorResultsClear();
  months_rent.forEach((n) => {
    if( estimatorSelected === 'Rendement') {
    divResult = `<div id="result-estimator${n}" class="result-estim"> Basé sur ${n} mois de loyer <div class="result-estim-value">${Math.round((((b*n)/((a*1.15)+c))*10000))/100} %</div> </div>`;}
    else if (estimatorSelected === 'Loyer mensuel') {
    divResult = `<div id="result-estimator${n}" class="result-estim"> Basé sur ${n} mois de loyer <div class="result-estim-value">${Math.round((((a*1.15)+b)*(c/100))/n)} €</div> </div>`;}
    else{
    divResult = `<div id="result-estimator${n}" class="result-estim"> Basé sur ${n} mois de loyer <div class="result-estim-value">${Math.round((((a*n)/(c/100))-b)/1.15)} €</div> </div>`;}
    estimatorResult.insertAdjacentHTML('beforeend', divResult);
  });
};

// estimator rental yield

const estimatorRentalYield = () => {
  const purchasePrice = parseFloat(document.getElementById('purchase-price-input-estimator').value);
  const monthlyRent = parseFloat(document.getElementById('monthly-rent-input-estimator').value);
  const extraWorks = parseFloat(document.getElementById('extra-works-input-estimator').value);
  if (purchasePrice && monthlyRent != 0) {
    generateResults(purchasePrice, monthlyRent, extraWorks);
    addEraserIcon();
    estimatorEraserIcon();
  } else {
    alert(`Prix d'achat et Loyer mensuel doivent être plus grands que zéro`);
  };
};

// estimator monthly rent

const estimatorMonthlyRent = () => {
  const purchasePrice = parseFloat(document.getElementById('purchase-price-input-estimator-mr').value);
  const extraWorks = parseFloat(document.getElementById('extra-works-input-estimator-mr').value);
  const rentalYield = parseFloat(document.getElementById('rental-yield-input-estimator-mr').value);
  if (purchasePrice && rentalYield != 0) {
    generateResults(purchasePrice, extraWorks, rentalYield);
    addEraserIcon();
    estimatorEraserIcon();
  } else {
    alert(`Prix d'achat et Rendement doivent être plus grands que zéro`);
  };
};

// estimator purchase price

const estimatorPurchasePrice = () => {
  const monthlyRent = parseFloat(document.getElementById('monthly-rent-input-estimator-pp').value);
  const extraWorks = parseFloat(document.getElementById('extra-works-input-estimator-pp').value);
  const rentalYield = parseFloat(document.getElementById('rental-yield-input-estimator-pp').value);
  if (monthlyRent && rentalYield != 0) {
    generateResults(monthlyRent, extraWorks, rentalYield);
    addEraserIcon();
    estimatorEraserIcon();
  } else {
    alert(`Loyer mensuel et Rendement doivent être plus grands que zéro`);
  }
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

estimatorCheckBtn.addEventListener('click', () => {
  if(document.querySelector('.selected-estimator').innerText === 'Rendement') {
    estimatorRentalYield();
  }
  else if (document.querySelector('.selected-estimator').innerText === 'Loyer mensuel') {
    estimatorMonthlyRent();
  }
  else {
    estimatorPurchasePrice();
  }
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
    const purchasePrice = parseFloat(document.querySelector('.home-input-estimator-price').value);
    const extraWorks = parseFloat(document.querySelector('.home-input-estimator-extra-works').value);
    const rentalYield = parseFloat(document.querySelector('.home-input-estimator-rental-yield').value);
    const monthlyRent = parseFloat(document.querySelector('.home-input-estimator-monthly-rent').value);
    const classEstimator = `.${event.currentTarget.innerText[0]}`;
    document.querySelector(`${classEstimator}`).classList.remove('hidden');
    if (classEstimator === ".R" && purchasePrice != 0 && monthlyRent != 0) {
      estimatorRentalYield();
    }
    else if (classEstimator === ".L" && purchasePrice != 0 && rentalYield != 0) {
      estimatorMonthlyRent();
    }
    else if (classEstimator === ".P" && monthlyRent != 0 && rentalYield != 0) {
      estimatorPurchasePrice();
    }
    else {
      estimatorResultsClear();
    }
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

// estimator tooltips icons

const estimatorHomeToolTips = document.querySelectorAll('.estimator-tooltip');

estimatorHomeToolTips.forEach((estimatorHomeToolTip) => {
  estimatorHomeToolTip.addEventListener('click', (event) => {
    event.currentTarget.firstChild.nextSibling.childNodes[1].classList.toggle('hidden');
  });
});


// make input values replicated across the different estimators

const inputPrices = document.querySelectorAll('.home-input-estimator-price');
const inputWorks = document.querySelectorAll('.home-input-estimator-extra-works');
const inputRents = document.querySelectorAll('.home-input-estimator-monthly-rent');
const inputYields = document.querySelectorAll('.home-input-estimator-rental-yield');
const inputEstimatorAll = document.querySelectorAll('.home-input-estimator');

const setValue = (value, input) => {
  input.forEach((e) => {
    e.value = value;
  });
};

inputEstimatorAll.forEach((e) => {
  e.addEventListener('focusout', (event) => {
    let value = event.currentTarget.value;
    let classList = event.currentTarget.classList.value;
    if (classList.includes('home-input-estimator-price'))
      setValue(value, inputPrices);
    else if (classList.includes('home-input-estimator-extra-works'))
      setValue(value, inputWorks);
    else if (classList.includes('home-input-estimator-monthly-rent'))
      setValue(value, inputRents);
    else
      setValue(value, inputYields);
  });
});


// testinnnnng

const updatingResult = () => {
  const purchasePrice = parseFloat(document.querySelector('.home-input-estimator-price').value);
  const extraWorks = parseFloat(document.querySelector('.home-input-estimator-extra-works').value);
  const rentalYield = parseFloat(document.querySelector('.home-input-estimator-rental-yield').value);
  const monthlyRent = parseFloat(document.querySelector('.home-input-estimator-monthly-rent').value);
  const classEstimator = `.${event.currentTarget.innerText[0]}`;
  if (classEstimator === "R" && purchasePrice && monthlyRent > 0)
    estimatorRentalYield();
  else if (classEstimator === "L" && (purchasePrice && rentalYield != 0))
    estimatorMonthlyRent();
  else if (classEstimator === "P" && (purchasePrice && monthlyRent != 0))
    estimatorPurchasePrice();
  else
    estimatorResultsClear();
};
