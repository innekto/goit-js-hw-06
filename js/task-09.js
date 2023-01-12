function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
// console.log(getRandomHexColor());


const body = document.querySelector('body');
// console.log(body);
const spanEl = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');

changeBtn.addEventListener('click', onBtnChange);

function onBtnChange() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
};
