const estimatorHomepage = () => {
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
  estimatorResult.insertAdjacentHTML('beforeend', `<i class="fas fa-ban" id="estimator-eraser"></i>`);
  const estimatorEraser = document.getElementById('estimator-eraser');
  estimatorEraser.addEventListener('click', estimatorClear);
}

const estimatorClear = () => {
  const estimatorResult10 = document.getElementById('result-estimator10');
  const estimatorResult11 = document.getElementById('result-estimator11');
  const estimatorResult12 = document.getElementById('result-estimator12');
  const estimatorEraser = document.getElementById('estimator-eraser');
  estimatorResult10.innerText = ``;
  estimatorResult11.innerText = ``;
  estimatorResult12.innerText = ``;
  estimatorEraser.parentNode.removeChild(estimatorEraser);
}

const estimatorCheckBtn = document.getElementById('estimator-checker');
estimatorCheckBtn.addEventListener('click', estimatorHomepage);
