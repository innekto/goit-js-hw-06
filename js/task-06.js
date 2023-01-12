const inputEl = document.querySelector('#validation-input');

const dataLengthValue = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('input', onInputChange);


function onInputChange(event) {
    const incomLength = event.currentTarget.value.length;
    if (incomLength !== dataLengthValue) {
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.replace('invalid','valid')
    }
};


