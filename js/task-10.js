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
destroyBtnEl.addEventListener('click', destroyBoxes);

function onInput() {
  // console.log(inputEl.value);
  return inputEl.value;
 };


function widthUp(b) {
  let a = 30;
  for (let i = 0; i < b; i += 1){
    a += i * 10;
  }
  return a +'px';
}
// console.log(widthUp(3))





function createBoxes(amount) {
  amount = onInput();
//   let divArr = [];
//   for (let i = 0; i < amount; i += 1) {

//     divArr.push(document.createElement('div'));
//     console.log(divArr[i]);
//     divArr[i].style.backgroundColor = getRandomHexColor();
//     divArr[i].style.width = widthUp(amount);
//     divArr[i].style.height = widthUp(amount);
//     boxesEl.append(divArr[i]);
// };
  
  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement('div');
    el.classList.add('box');
    el.style.backgroundColor = getRandomHexColor();
    el.style.width += widthUp(amount);
    el.style.height += widthUp(amount);
    boxesEl.append(el);
}
  
  return boxesEl;
  
};


function destroyBoxes() {
  const box = document.querySelectorAll('.box');
  console.log(box);
  
}


destroyBoxes()