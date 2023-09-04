'use strict';

let btnText, btnColor;
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

// 1. Повесить на кнопку обработчик события click и реализовать такой функционал:
// В input[type=text] можно ввести цвет: red, green, blue и так далее.
// По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата
document.querySelector('button#btn').addEventListener('click', e => {
    btnText = document.querySelector('input#text').value;
    if (btnText == '') {return false}; 
    btnColor = document.querySelector('div#square');
    btnColor.style.backgroundColor = btnText;    
    document.querySelector('input#text').value ='';
});

// 2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; " 
const btnInsideSquare = document.querySelector('button#e_btn');
btnInsideSquare.style.display = 'none';

// 3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!) 
const logger = function (event) {
    span.textContent = event.target.value;
    circle.style.width = span.textContent +'%';
    circle.style.height = span.textContent +'%';   
}

range.addEventListener('change', logger) 