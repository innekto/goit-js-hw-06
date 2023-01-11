const inputEl = document.querySelector('#name-input');
console.log(inputEl);

const nameLabeEl = document.querySelector('#name-output');
console.log(nameLabeEl.textContent);

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
    if (inputEl.value === '') {
        return nameLabeEl.textContent = 'Anonymous';
    }
    nameLabeEl.textContent = inputEl.value;
};



