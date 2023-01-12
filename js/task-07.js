const spanEl = document.querySelector('#text');
const sliderEl = document.querySelector('#font-size-control');
// console.log(sliderEl.value);
// console.log(spanEl.style.fontSize);

sliderEl.addEventListener('input', onInputChange);

function onInputChange() {
    spanEl.style.fontSize = sliderEl.value + 'px';
}