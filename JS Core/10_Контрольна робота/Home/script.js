'use strict';
/* змінні */
const arrColor = ['green', 'grey', 'blue', 'red', 'yellow', 'brown', 'pink', 'purple', 'orange'];
const arrColor1 = ['pink', 'purple', 'orange', 'red', 'blue', 'yellow', 'brown', 'green', 'grey'];
let colorBox = document.querySelectorAll('.color-box');
let colorBox1 = document.querySelectorAll('.color-box1');
let topBlock = document.querySelector('.top-block');

/* функції  */
const getS = selector => document.querySelector(selector);

/**
 * функція showElement
 * додає клас active до елемента, який потрібно застилізувати в CSS
 * @param elemPush - який натиснути
 * @param elemShow - який показати блок
 * @param elemRemove - який видалити блок
 */
function showElement(elemPush, elemShow, elemRemove) {
    getS(elemPush).addEventListener('click', function () {
        getS(elemShow).classList.add('active');
        getS(elemRemove).classList.remove('active');
    })
}

/**
 * Використовувати разом із showElement
 * @param elemPush
 * @param elemHide
 */
function hideElement(elemPush, elemHide) {
    getS(elemPush).addEventListener('click', function () {
        getS(elemHide).classList.remove('active');
    })
}

/**
 * saveTextArea - записує значення в textarea
 * @param push - який елемент потрібно натиснути
 * @param elemHTML
 */
function saveTextArea(push) {
    getS(push).addEventListener('click', function () {
        getS('.edit-area').value = getS('.top-block').innerHTML;
    })
}

function saveTopBlock(push) {
    getS(push).addEventListener('click', function () {
        getS('.top-block').innerHTML = getS('.edit-area').value;
    })
}

/**
 * changeStyle() - проводить зміни із стилями нашого блоку
 */
function changeStyle() {
    getS('.top-block').style.fontSize = event.target.value;
    getS('.top-block').style.fontFamily = event.target.value;
    if(event.target.checked){
        getS('.top-block').style.fontWeight = event.target.dataset.name;
        getS('.top-block').style.fontStyle = event.target.dataset.name;
    }else {
        getS('.top-block').style.fontWeight = 'normal';
        getS('.top-block').style.fontStyle = 'normal';
    }

}

/**
 * colorForBlocks - замальовує блоки у віповідний колір
 * @param arr - блоки, які потрібно замалювати
 * @param arr1 - масив кольорів
 */
function colorForBlocks(arr, arr1) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = arr1[i];
    }
}

/**
 * changeText - змінює колір тексту
 * @param arr - масив кольорів
 */
function changeText(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', function () {
            topBlock.style.color = getComputedStyle(arr[i]).backgroundColor;
            document.querySelector('.colors').classList.toggle('active');

        })
    }
}

function changeFon(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', function () {
            topBlock.style.backgroundColor = getComputedStyle(arr[i]).backgroundColor;
            document.querySelector('.colors1').classList.toggle('active');

        })
    }
}


/* показую елементи */
showElement('.edit', '.edit-block', '.style-block');
showElement('.style', '.style-block', '.edit-block');
showElement('.btn-text-color', '.colors', '.edit-block');
showElement('.btn-bg-color', '.colors1', '.edit-block');

/* ховаю елементи */
hideElement('.btn-save', '.edit-block');

/* зберігає зміни в блоках */
saveTextArea('.edit');
saveTopBlock('.btn-save');

/* стилізація блоку */
colorForBlocks(colorBox, arrColor);
colorForBlocks(colorBox1, arrColor1);
changeText(colorBox);
changeFon(colorBox1);

