// where to insert the cookie value
const purchasePriceInput = document.getElementById('purchase-price');
const monthlyRentInput = document.getElementById('monthly-rent');
const extraWorksInput = document.getElementById('extra-works');

// regex to find the cookie
const purchasePriceRegex = /purchase_price=\d+/;
const monthlyRentRegex = /monthly_rent=\d+/;
const extraWorksRegex = /extra_works=\d+/;

// set up the cookie
const setCookie = (name, value, days) => {
  let d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
};

// retrieve the cookie value
const getCookieValue = (regex) => {
  const cookieValue = document.cookie.match(regex);
  if(cookieValue != null) {
    const cookieExactValue = cookieValue[0].split('=')[1];
    return cookieExactValue;
  };
};

// push the retrieved cookie value into the right input field
const setInputCookieValue = (input, regex) => {
  input.value = getCookieValue(regex);
};

setInputCookieValue(purchasePriceInput,purchasePriceRegex);
setInputCookieValue(monthlyRentInput,monthlyRentRegex);
setInputCookieValue(extraWorksInput,extraWorksRegex);

//removing the cookie when leaving the page
window.addEventListener('beforeunload', (event) => {
  console.log('pizzaaa');
  return setCookie('purchase_price','',-1);
});



