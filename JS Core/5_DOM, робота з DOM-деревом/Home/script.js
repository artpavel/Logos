function check(a) {
    while (true) {
        if (a === null) {
            alert('Введіть дані')
            a = prompt('Виберіть фон для сторінки');
        } else break;
    }
}

let fon = prompt('Виберіть фон для сторінки');
check(fon);
document.querySelector('body').style.background = fon;

let font = prompt('Виберіть тип шрифта на  сторінці');
check(font);
document.querySelector('body').style.fontStyle = font;

let align = prompt('Виберіть як вирівняємо заголовок');
check(align);
document.querySelector('h1').style.textAlign = align;

let bgParagraf = prompt('Виберіть фон для параграфа з посиланнями');
check(bgParagraf);
document.querySelector('p').style.background = bgParagraf;

let colorLink = prompt('Виберіть колір тексту посилань');
check(colorLink);
let links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
    links[i].style.color = colorLink;
}

let colorDiv = prompt('Виберіть колір тексту div');
check(colorDiv);
let fontDiv = prompt('Виберіть розмір тексту div');
check(fontDiv);
let deptDiv = prompt('Виберіть товщину тексту div');
check(deptDiv);
let div = document.querySelector('div');
div.style.cssText = `color: ${colorDiv}; font-size: ${fontDiv}px; font-weight: ${deptDiv}`;

let marker = prompt('Виберіть тип маркування списку');
check(marker);
document.querySelector('ul').style.listStyle = marker;

// let linkOne = prompt('Виберіть посилання 1');
// let linkTwo = prompt('Виберіть посилання 2');
// let linkThree = prompt('Виберіть посилання 3');
//
// let one = document.getElementsByTagName('a')[0];
// one.textContent = linkOne;
// one.href = linkOne;
//
// let two = document.getElementsByTagName('a')[1];
// two.textContent = linkTwo;
// two.href = linkTwo;
//
// let three = document.getElementsByTagName('a')[2];
// three.textContent = linkThree;
// three.href = linkThree;


