import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');

const inputRef = document.querySelector('input');

const textareaRef = document.querySelector('textarea');


const throttled = throttle(onFormInput, 1000);

formRef.addEventListener('input', e => throttled(e.currentTarget));

formRef.addEventListener('submit', onFormSubmit);

check();


function onFormInput(currTarget) {
  const email = currTarget.elements.email.value;
  const message = currTarget.elements.message.value;
  const formValues = JSON.stringify({ email, message });
  localStorage.setItem('feedback-form-state', formValues);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const elements = evt.currentTarget.elements;

  console.log(`email: ${elements.email.value}`);

  console.log(`message: ${elements.message.value}`);
  evt.currentTarget.reset();
  localStorage.clear();
}

function check() {
  const valuesForCheck = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  // console.log(valuesForCheck.email.length);

  if (!valuesForCheck) return;
  else if (
    valuesForCheck.email.length !== 0 &&
    valuesForCheck.message.length === 0
  ) {
    inputRef.value = valuesForCheck.email;
  } else if (
    valuesForCheck.email.length === 0 &&
    valuesForCheck.message.length !== 0
  ) {
    textareaRef.value = valuesForCheck.message;
  } else {
    inputRef.value = valuesForCheck.email;
    textareaRef.value = valuesForCheck.message;
  }
}
