const estimator = () => {
  const monthlyRent = parseInt(document.getElementById('monthly-rent').value);
  const purchasePrice = parseInt(document.getElementById('purchase-price').value);
  const extraWorks = parseInt(document.getElementById('extra-works').value);
  const estimatorResult = document.getElementById('estimator-result');
  const netReturn = (monthlyRent*10)/((purchasePrice*1.15)+extraWorks);
  estimatorResult.innerText = `${Math.round(netReturn*10000) / 100} %`;
  estimatorResult.insertAdjacentHTML('beforeend', `<i class="fas fa-ban" id="estimator-eraser"></i>`);
  const estimatorEraser = document.getElementById('estimator-eraser');
  estimatorEraser.addEventListener('click', estimatorClear);
}

const estimatorClear = () => {
  const estimatorResult = document.getElementById('estimator-result');
  estimatorResult.innerText = '';
}

const estimatorCheckBtn = document.getElementById('estimator-checker-button');
estimatorCheckBtn.addEventListener('click', estimator);


