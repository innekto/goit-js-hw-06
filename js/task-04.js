const decrButton = document.querySelector('[data-action="decrement"]');
// console.log(decrButton);

const incrButton = document.querySelector('[data-action="increment"]');
// console.log(incrButton);

let counterValue = 0;

const counter = document.querySelector('#value');
// console.log(counterValue.textContent);

decrButton.addEventListener('click', onBtnDec);
incrButton.addEventListener('click', onBtnInc);

function onBtnDec() {
    // console.log('decr');
    counterValue -= 1;
    counter.innerHTML = counterValue;
}

function onBtnInc() {
    // console.log('incr');
    counterValue += 1;
     counter.innerHTML = counterValue;
}
