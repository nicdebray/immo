const purchasePrices = document.querySelectorAll('#purchase-price-input-estimator');

const cookieValue = (something) => something.value;

const setCookie = (name, value, days) => {
  let d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
}


purchasePrices.forEach((purchasePrice) => {
  purchasePrice.addEventListener('focusout', event => {
    if(cookieValue(purchasePrice) != 0) {
      const value = cookieValue(purchasePrice);
      setCookie('purchase_price',value, 1);
      console.log(document.cookie);
    }
  });
})

