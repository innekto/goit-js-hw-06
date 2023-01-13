        // НЕ ДОРОБЛЕНО !!!



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputEl = document.querySelector('#controls>input');
// console.log(inputEl);
const createBtnEl = document.querySelector('[data-create]');
// console.log(createBtnEl);
const destroyBtnEl = document.querySelector('[data-destroy]');
// console.log(destroyBtnEl);
const boxesEl = document.querySelector('#boxes');



inputEl.addEventListener('input', onInput);
createBtnEl.addEventListener('click', createBoxes);
// destroyBtnEl.addEventListener('click', destroyBoxes);

function onInput() {
  // console.log(inputEl.value);
  return inputEl.value;
 };


function widtAndHeightUp(index) {
  return (index * 10 + 30) + 'px';
};


function createBoxes(amount) {
  amount = onInput();
  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement('div');
    el.classList.add('box');
    el.style.backgroundColor = getRandomHexColor();
    el.style.width = widtAndHeightUp(i);
    el.style.height = widtAndHeightUp(i);
    boxesEl.append(el);
}
  
  return boxesEl;
  };


// function destroyBoxes() {
//   const box = document.querySelectorAll('.box');
//   console.log(box);
  
// }


// destroyBoxes()