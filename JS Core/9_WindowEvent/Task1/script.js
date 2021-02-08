'use strict';
/*
* Необхідно реалізувати наступний функціонал як на відео scroll, а саме:

— при скролі текст “scroll down” збільшує розмір тексту

— далі блок з текстом “slide from left” зміщує чуть позицію вправо а також збільшується лінія підкреслення

— далі картинка(можна використати будь яку) зміщується вліво

— ну і в кінці текст “scroll up” зменшує розмір тексту

— при кліку на “scroll down” відбувається автоматичний скрол до блоку “slide from left”

— при кліку на “scroll up” відбувається автоматичний скрол до верху сторінки
*
*  */

let down = document.querySelector('.down'),
    left = document.querySelector('.lt'),
    up = document.querySelector('.up'),
    img = document.querySelector('img'),
    line = document.querySelector('.line')

window.addEventListener('scroll', function () {
    if (scrollY > 50 && scrollY <= 600) {
        down.style.fontSize = `${scrollY / 4}px`;
        up.style.fontSize = `${160 - scrollY / 4}px`;
        left.style.marginLeft = `${scrollY/4}px`;
        line.style.width = `${scrollY}px`;
        img.style.right = `${scrollY / 4}px`;
    }
})

left.addEventListener('click', function (){
    alert('hjklhd')
})

up.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

down.addEventListener('click', function () {
    window.scroll({
        top: 300,
        behavior: 'smooth'
    });
})

