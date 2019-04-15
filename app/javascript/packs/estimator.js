const estimator = () => {
  const monthlyRent = parseInt(document.getElementById('monthly-rent').value);
  const purchasePrice = parseInt(document.getElementById('purchase-price').value);
  const extraWorks = parseInt(document.getElementById('extra-works').value);
  const estimatorResult = document.getElementById('estimator-result');
  const netReturn = (monthlyRent*10)/((purchasePrice*1.15)+extraWorks);
  return estimatorResult.innerText = `${Math.round(netReturn*10000) / 100} %`;
}


const estimatorCheckBtn = document.getElementById('estimator-checker');
estimatorCheckBtn.addEventListener('click', estimator);
