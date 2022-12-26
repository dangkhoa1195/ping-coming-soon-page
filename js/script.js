const btnSubmit = document.querySelector('#btn-submit');
const inputEmail = document.querySelector('#input-email');
const textError = document.querySelector('.text-error');
btnSubmit.addEventListener('click', event => {
  event.preventDefault();
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.value === '') {
    textError.innerText = 'Whoops! It looks like you forgot to add your email';
    textError.style.display = 'block';
  } else if (!inputEmail.value.match(validRegex)) {
    textError.innerText = 'Please provide a valid email address';
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
const validateEmail = email => {};
