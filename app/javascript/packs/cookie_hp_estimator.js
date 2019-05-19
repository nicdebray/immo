// where to pick the input from the user
const purchasePrices = document.querySelectorAll('#purchase-price-input-estimator');
const monthlyRents = document.querySelectorAll('#monthly-rent-input-estimator');
const extraWorks = document.querySelectorAll('#extra-works-input-estimator');

// cookie names set up
const purchasePriceName = 'purchase_price';
const monthlyRentName = 'monthly_rent';
const extraWorksName = 'extra_works';

// set up the cookie
const setCookie = (name, value, days) => {
  let d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
}

// get the input from the user and create the cookie
const getInput = (array, cookieName) => {
  array.forEach((element) => {
    element.addEventListener('focusout', event => {
      if(cookieValue(element) != 0) {
        const value = element.value;
        setCookie(cookieName,value, 1);
      }
    });
  });
};

// fire the function for the 3 fields
getInput(purchasePrices,purchasePriceName);
getInput(monthlyRents,monthlyRentName);
getInput(extraWorks,extraWorksName);


