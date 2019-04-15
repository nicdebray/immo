const estimatorResult = document.getElementById('estimator-result');
const estimatorCheckBtn = document.getElementById('estimator-checker');


const estimator = () => {
  const monthlyRent = parseInt(document.getElementById('monthly-rent').value);
  const purchasePrice = parseInt(document.getElementById('purchase-price').value);
  const extraWorks = parseInt(document.getElementById('extra-works').value);
  const netReturn = (monthlyRent*10)/((purchasePrice*1.15)+extraWorks);
  const estimatorResult = document.getElementById('estimator-result');

  return estimatorResult.innerText = netReturn;
}



estimatorCheckBtn.addEventListener('click', estimator);



