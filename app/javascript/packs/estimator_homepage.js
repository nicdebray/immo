const estimatorResult = document.getElementById('result-estimator');
const estimatorResult10 = document.getElementById('result-estimator10');
const estimatorResult11 = document.getElementById('result-estimator11');
const estimatorResult12 = document.getElementById('result-estimator12');
const estimatorResultsAll = document.querySelectorAll('.result-estim');

// clear results

const estimatorRentalYieldClear = () => {
  const estimatorErasers = document.querySelectorAll('#estimator-eraser');
  estimatorErasers.forEach((estimatorEraser) => {
    estimatorEraser.parentNode.removeChild(estimatorEraser);
  })
  estimatorResultsAll.forEach((estimatorResultsA) => {
    estimatorResultsA.innerText = ``;
  });
};

const estimatorEraserIcon = () => {
  const estimatorErasers = document.querySelectorAll('#estimator-eraser');
  estimatorErasers.forEach((estimatorEraser) => {
    estimatorEraser.addEventListener('click', estimatorRentalYieldClear);
  });
};

// estimator rental yield

const estimatorRentalYield = () => {
  const purchasePrice = parseInt(document.getElementById('purchase-price-input-estimator').value);
  const monthlyRent = parseInt(document.getElementById('monthly-rent-input-estimator').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator').value);
  const netReturn10 = (monthlyRent*10)/((purchasePrice*1.15)+extraWorks);
  const netReturn11 = (monthlyRent*11)/((purchasePrice*1.15)+extraWorks);
  const netReturn12 = (monthlyRent*12)/((purchasePrice*1.15)+extraWorks);
  estimatorResult10.innerText = `Based on 10 months rent ${Math.round(netReturn10*10000) / 100} %`;
  estimatorResult11.innerText = `Based on 11 months rent ${Math.round(netReturn11*10000) / 100} %`;
  estimatorResult12.innerText = `Based on 12 months rent ${Math.round(netReturn12*10000) / 100} %`;
  estimatorResult.insertAdjacentHTML('beforeend', `<i class="far fa-times-circle" id="estimator-eraser"></i>`);
  estimatorEraserIcon();
};

// estimator monthly rent

const estimatorMonthlyRent = () => {
  const purchasePrice = parseInt(document.getElementById('purchase-price-input-estimator-mr').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator-mr').value);
  const rentalYield = parseInt(document.getElementById('rental-yield-input-estimator-mr').value);
  const monthlyRent10 = (((purchasePrice*1.15)+extraWorks)*(rentalYield/100))/10;
  const monthlyRent11 = (((purchasePrice*1.15)+extraWorks)*(rentalYield/100))/11;
  const monthlyRent12 = (((purchasePrice*1.15)+extraWorks)*(rentalYield/100))/12;
  estimatorResult10.innerText = `Based on 10 months rent ${Math.round(monthlyRent10)} €`;
  estimatorResult11.innerText = `Based on 11 months rent ${Math.round(monthlyRent11)} €`;
  estimatorResult12.innerText = `Based on 12 months rent ${Math.round(monthlyRent12)} €`;
  estimatorResult.insertAdjacentHTML('beforeend', `<i class="far fa-times-circle" id="estimator-eraser"></i>`);
  estimatorEraserIcon();
};

// estimator purchase price

const estimatorPurchasePrice = () => {
  const monthlyRent = parseInt(document.getElementById('monthly-rent-input-estimator-pp').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator-pp').value);
  const rentalYield = parseInt(document.getElementById('rental-yield-input-estimator-pp').value);
  const purchasePrice10 = (((monthlyRent*10)/(rentalYield/100))-extraWorks)/1.15;
  const purchasePrice11 = (((monthlyRent*11)/(rentalYield/100))-extraWorks)/1.15;
  const purchasePrice12 = (((monthlyRent*12)/(rentalYield/100))-extraWorks)/1.15;
  estimatorResult10.innerText = `Based on 10 months rent ${Math.round(purchasePrice10)} €`;
  estimatorResult11.innerText = `Based on 11 months rent ${Math.round(purchasePrice11)} €`;
  estimatorResult12.innerText = `Based on 12 months rent ${Math.round(purchasePrice12)} €`;
  estimatorResult.insertAdjacentHTML('beforeend', `<i class="far fa-times-circle" id="estimator-eraser"></i>`);
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
   if(document.querySelector('.selected-estimator').innerText === 'Rental yield')
  estimatorRentalYield();
     else if (document.querySelector('.selected-estimator').innerText === 'Monthly Rent')
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
