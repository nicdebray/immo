
// estimator rental yield

const estimatorRentalYield = () => {
  const purchasePrice = parseInt(document.getElementById('purchase-price-input-estimator').value);
  const monthlyRent = parseInt(document.getElementById('monthly-rent-input-estimator').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator').value);
  const estimatorResult = document.getElementById('result-estimator');
  const estimatorResult10 = document.getElementById('result-estimator10');
  const estimatorResult11 = document.getElementById('result-estimator11');
  const estimatorResult12 = document.getElementById('result-estimator12');
  const netReturn10 = (monthlyRent*10)/((purchasePrice*1.15)+extraWorks);
  const netReturn11 = (monthlyRent*11)/((purchasePrice*1.15)+extraWorks);
  const netReturn12 = (monthlyRent*12)/((purchasePrice*1.15)+extraWorks);
  estimatorResult10.innerText = `Based on 10 months rent ${Math.round(netReturn10*10000) / 100} %`;
  estimatorResult11.innerText = `Based on 11 months rent ${Math.round(netReturn11*10000) / 100} %`;
  estimatorResult12.innerText = `Based on 12 months rent ${Math.round(netReturn12*10000) / 100} %`;
  estimatorResult.insertAdjacentHTML('beforeend', `<i class="far fa-times-circle" id="estimator-eraser"></i>`);
  const estimatorEraser = document.querySelector('#estimator-eraser');
  estimatorEraser.addEventListener('click', estimatorRentalYieldClear);
};

const estimatorRentalYieldClear = () => {
  const estimatorResult10 = document.getElementById('result-estimator10');
  const estimatorResult11 = document.getElementById('result-estimator11');
  const estimatorResult12 = document.getElementById('result-estimator12');
  const estimatorEraser = document.getElementById('estimator-eraser');
  estimatorResult10.innerText = ``;
  estimatorResult11.innerText = ``;
  estimatorResult12.innerText = ``;
  estimatorEraser.parentNode.removeChild(estimatorEraser);
};


// estimator monthly rent

const estimatorMonthlyRent = () => {
  const purchasePrice = parseInt(document.getElementById('purchase-price-input-estimator-mr').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator-mr').value);
  const rentalYield = parseInt(document.getElementById('rental-yield-input-estimator-mr').value);
  const estimatorResult = document.getElementById('result-estimator');
  const estimatorResult10 = document.getElementById('result-estimator10');
  const estimatorResult11 = document.getElementById('result-estimator11');
  const estimatorResult12 = document.getElementById('result-estimator12');
  const monthlyRent10 = (((purchasePrice*1.15)+extraWorks)*(rentalYield/100))/10;
  const monthlyRent11 = (((purchasePrice*1.15)+extraWorks)*(rentalYield/100))/11;
  const monthlyRent12 = (((purchasePrice*1.15)+extraWorks)*(rentalYield/100))/12;
  estimatorResult10.innerText = `Based on 10 months rent ${Math.round(monthlyRent10)} €`;
  estimatorResult11.innerText = `Based on 11 months rent ${Math.round(monthlyRent11)} €`;
  estimatorResult12.innerText = `Based on 12 months rent ${Math.round(monthlyRent12)} €`;
  estimatorResult.insertAdjacentHTML('beforeend', `<i class="far fa-times-circle" id="estimator-eraser"></i>`);
  const estimatorEraser = document.querySelector('#estimator-eraser');
  estimatorEraser.addEventListener('click', estimatorRentalYieldClear);
};


// estimator monthly rent

const estimatorPurchasePrice = () => {
  const monthlyRent = parseInt(document.getElementById('monthly-rent-input-estimator-pp').value);
  const extraWorks = parseInt(document.getElementById('extra-works-input-estimator-pp').value);
  const rentalYield = parseInt(document.getElementById('rental-yield-input-estimator-pp').value);
  const estimatorResult = document.getElementById('result-estimator');
  const estimatorResult10 = document.getElementById('result-estimator10');
  const estimatorResult11 = document.getElementById('result-estimator11');
  const estimatorResult12 = document.getElementById('result-estimator12');
  const purchasePrice10 = (((monthlyRent*10)/(rentalYield/100))-extraWorks)/1.15;
  const purchasePrice11 = (((monthlyRent*11)/(rentalYield/100))-extraWorks)/1.15;
  const purchasePrice12 = (((monthlyRent*12)/(rentalYield/100))-extraWorks)/1.15;
  estimatorResult10.innerText = `Based on 10 months rent ${Math.round(purchasePrice10)} €`;
  estimatorResult11.innerText = `Based on 11 months rent ${Math.round(purchasePrice11)} €`;
  estimatorResult12.innerText = `Based on 12 months rent ${Math.round(purchasePrice12)} €`;
  estimatorResult.insertAdjacentHTML('beforeend', `<i class="far fa-times-circle" id="estimator-eraser"></i>`);
  const estimatorEraser = document.querySelector('#estimator-eraser');
  estimatorEraser.addEventListener('click', estimatorRentalYieldClear);
};

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

// test
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


