const setBtn = document.querySelector('.btn-set-ga-cookie');
const readBtn = document.querySelector('.btn-check-ga-cookie');
const deleteBtn = document.querySelector('.btn-delete-ga-cookie');

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


setBtn.addEventListener('click', () => {
  setCookie('analytics','exclude', 1);
});

readBtn.addEventListener('click', showCookie);

deleteBtn.addEventListener('click', deleteCookie);
