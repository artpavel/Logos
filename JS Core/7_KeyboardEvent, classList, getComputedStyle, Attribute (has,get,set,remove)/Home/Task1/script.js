'use strict';

/*
* Необхідно реалізувати наступний функціонал як на відео backgrounds, а саме:

— при кліку на текст колір появляється блок з кольорами

— при кліку на текст зображення появляється блок з зображеннями

— при кліку на самі блоки з кольорами змінюється колі фону

— при кліку на самі блоки з зображеннями змінюється зображення фону

— послідовність чи я задаю колір фону а потім зображення або навпаки не має значення
 */

// массивы
const arrColor = ['green', 'grey', 'blue', 'red', 'yellow', 'brown', 'pink', 'purple', 'orange'];
const arrImg = ['https://cdn.eso.org/images/thumb300y/eso1322a.jpg', 'https://deep-image.ai/static/media/slider-3-a.a21f311c.jpg',
    'https://www.gettyimages.com/gi-resources/images/500px/983801190.jpg', "https://cdn.eso.org/images/thumb300y/eso1322a.jpg",
    'https://ts-mi.com/wp-content/uploads/2020/09/image-images.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaJuXd05exiz7RMDHohhFRh7BySnxLAiGXA&usqp=CAU',
    'https://html5css.ru/css/paris.jpg', 'https://images.ctfassets.net/hrltx12pl8hq/1zlEl4XHkxeDuukJUJyQ7Y/a149a908727e2084d503dc103a620d7f/lohp-image-img-3.jpg?fit=fill&w=480&h=270',
    'https://static.toiimg.com/thumb/msid-66476517,imgsize-196276,width-800,height-600,resizemode-75/66476517.jpg'
]

// переменные
let color = document.querySelector('.color'),
    img = document.querySelector('.img'),
    div = document.querySelectorAll('.div'),
    wrapper = document.querySelector('.wrapper');

// функции
function createClass(selector) {
    selector.classList.remove('active');
    selector.classList.add('active');
}

function createBlocks(arr, arr1) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundImage = 'none';
        arr[i].style.backgroundColor = arr1[i];
        arr[i].style.backgroundImage = `url(${arr1[i]})`;
    }
}

function createFon(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', function () {
            document.body.style.backgroundImage = 'none';
            document.body.style.background = getComputedStyle(arr[i]).backgroundColor;
            document.body.style.backgroundImage = getComputedStyle(arr[i]).backgroundImage;
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = 'cover';
        })
    }
}

// работа по заданию
color.addEventListener('click', function () {
    createClass(wrapper);
    createBlocks(div, arrColor);
    createFon(div);
});

img.addEventListener('click', function () {
    createClass(wrapper);
    createBlocks(div, arrImg);
    createFon(div);
})









