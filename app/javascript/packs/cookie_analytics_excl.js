// make available some variables
const setBtn = document.querySelector('.btn-set-ga-cookie');
const readBtn = document.querySelector('.btn-check-ga-cookie');
const deleteBtn = document.querySelector('.btn-delete-ga-cookie');


// define functions

const setCookie = (name, value, days) => {
  let d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
}

const showCookie = () => {
  alert(document.cookie);
}

const deleteCookie = () => {
  setCookie('analytics', '', -1);
  alert(document.cookie);
}


// define events to trigger functions
setBtn.addEventListener('click', () => {
  setCookie('analytics','exclude', 1);
});

readBtn.addEventListener('click', showCookie);

deleteBtn.addEventListener('click', deleteCookie);


// set the cookie onload
setCookie('analytics','exclude', 1);
