import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// const formData = {};
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

writeValueKey();

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function writeValueKey() {
  if (formData) {
    let { email, message } = formEl.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}
