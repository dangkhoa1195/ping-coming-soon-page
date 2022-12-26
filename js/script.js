const btnSubmit = document.querySelector('#btn-submit');
const inputEmail = document.querySelector('#input-email');
const textError = document.querySelector('.text-error');
btnSubmit.addEventListener('click', event => {
  event.preventDefault();
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!inputEmail.value.match(validRegex)) {
    textError.style.display = 'block';
    inputEmail.classList.add('error');
    inputEmail.placeholder = 'example@email/com';
  }
});
inputEmail.addEventListener('focus', () => {
  textError.style.display = 'none';
  inputEmail.classList.remove('error');
  inputEmail.placeholder = '';
});
