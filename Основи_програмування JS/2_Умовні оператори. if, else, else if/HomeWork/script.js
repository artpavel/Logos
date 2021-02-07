// // task 1
// let count = 0;
// let ask = confirm('Чи 10 більше за 5?');
// if (ask) count++;
// ask = confirm('Київ - столиця України?');
// if (ask) count++;
// ask = confirm('Слон більший за мишу?');
// if (ask) count++;
// ask = confirm('Черепаха швидша за зайця?');
// if (!ask) count++;
// ask = confirm('Лев із родини котячих?');
// if (ask) count++;
// ask = confirm('Вода важлива для організму?');
// if (ask) count++;
// ask = confirm('1 кг вати більший за 1 кг заліза?');
// if (!ask) count++;
// ask = confirm('Зима вважається найхолоднішою порою року?');
// if (ask) count++;
// ask = confirm('Новий рік починається 1 січня?');
// if (ask) count++;
// ask = confirm('2+2*2 буде 8?');
// if (!ask) count++;
// if (count == 10) {
//     console.log('Ви відповіли правильно на всі питання. Відмінно.');
// } else if (count < 10 && count >= 7) {
//     console.log(`Ви відповіли правильно на ${count} із 10 питань. Непогано, але можна краще`);
// } else {
//     console.log(`Ви відповіли правильно на ${count} із 10 питань. Дуже погано. Потрібно підготовитися краще`);
// }

// // task2
// let ask = prompt("Введіть слово 'ім'я' ");
// if (ask === "ім'я") {
//     let parol = prompt("Введіть пароль");
//     if (parol === 'ЛОГОС') {
//         console.log("Ласкаво просимо");
//     } else if (parol == null) {
//         console.log("Вхід скасований");
//     } else {
//         console.log("Пароль невірний");
//     }
// } else if (ask == null) {
//     console.log("Вхід скасований");
// } else {
//     console.log("Я Вас не знаю");
// }

// task 3
let number = +prompt("Введіть число в діапазоні від 1 до 12 ");
if (number >= 1 && number <= 2 || number === 12) {
    alert("Зараз зима!");
} else if (number > 2 && number <= 5) {
    alert("Зараз весна!");
} else if (number > 5 && number <= 8) {
    alert("Зараз літо!");
} else if (number > 8 && number < 12) {
    alert("Зараз осінь!");
} else {
    alert("Введіть коректні дані!!!");
}