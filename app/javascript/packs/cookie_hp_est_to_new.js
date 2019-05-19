const purchasePriceInput = document.getElementById('purchase-price');

const setCookie = (name, value, days) => {
  let d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
};

const getCookiePriceValue = () => {
  console.log(document.cookie);
  const regExPrice = /purchase_price=\d+/;
  const cookieValue = document.cookie.match(regExPrice);
  console.log(cookieValue);
  if(cookieValue === '0' || cookieValue === null){
    return "";
  } else {
    const cookiePriceValue = cookieValue[0].split('=')[1];
    return cookiePriceValue;
  }
};

const setPurchaseCookieValue = () => {
  purchasePriceInput.value = getCookiePriceValue();
}

setPurchaseCookieValue();

// removing the cookie when leaving the page
window.addEventListener('beforeunload', (event) => {
  console.log('pizzaaa');
  return setCookie('purchase_price','',-1);
});



