// // task 1
// let password = prompt('Введіть пароль');
// if (password !== '1111') {
//     let count = 4;
//     while (count >= 1 && password !== '1111') {
//         alert(`Невірний пароль. У Вас залишилося ${count} спроби`)
//         count--;
//         password = prompt('Введіть пароль');
//     }
//     if (password !== '1111') {
//         document.write(`<h2>Будь  ласка спробуйте пізніше!</h2>`);
//     } else {
//         document.write(`<h2>Запрошуємо на сайт!</h2>`);
//     }
// } else {
//     document.write(`<h2>Запрошуємо на сайт!</h2>`);
// }

// // task 2
// // 1
// let n = parseInt(prompt('Введіть число'));
// if (n < 0) {
//     document.write(`<h2>Введіть натуральне число</h2>`);
// } else if (!isNaN(n)) {
//     let resultat = 1;
//     let i = 1;
//     while (i <= n) {
//         resultat *= i;
//         i++;
//     }
//     document.write(`<h2>Дорівнює ${resultat}</h2>`);
// } else {
//     document.write(`<h2>Введіть натуральне число</h2>`);
// }

// // 2
// let count = 1000;
// while (count <= 9999) {
//     document.write(`<h2>Дорівнює ${count}</h2>`);
//     count += 3
// }

// // 3 
// let a = 1;
// let b = 1
// while (a <= 55) {
//     document.write(`<h2>Дорівнює ${b += 2} => елемент в прогресії ${a}</h2>`);
//     a++
// }

// // 4
// let count = 90;
// while (count >= 0) {
//     document.write(`<h2>Рахуй ${count}</h2>`);
//     count -= 5;
// }

// //5
// let a = 1,
//     b = 2;
// while (a <= 20) {
//     document.write(`<h2>Дорівнює ${b *= 2} => порядок елемента  ${a}</h2>`);
//     a++;
// }

// //6
// let a = 2;
// while (a < 10000) {
//     document.write(`<h2>Дорівнює ${a}`);
//     a = 2 * a - 1;
// }

// // 7 
// let a = -166;
// while (a < 100) {
//     if (a > -100) {
//         document.write(`<h2>Дорівнює ${a}`);
//     }
//     a = 2 * a + 200
// }

// // 8
// let a = +prompt('Введіть число');
// let b = +prompt('Введіть степінь числа');
// let result = 1;
// if (b > 0 || b < 0) {
//     let i = 1;
//     while (i <= Math.abs(b)) {
//         result = result * a;
//         i++;
//     }
//     if (b < 0) {
//         result = 1 / result;
//         document.write(`<h2>Дорівнює ${result}`);
//     } else {
//         document.write(`<h2>Дорівнює ${result}`);
//     }
// } else {
//     result = 1;
//     document.write(`<h2>Дорівнює ${result}`);
// }