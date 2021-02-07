// // task 1
// let number = +prompt('Введіть число від 1 до 12');
/*
let number = 5;
switch (number) {
    case 12:
    case 1:
    case 2:
        alert("Зараз зима!");
        break;
    case 3:
    case 4:
    case 5:
        alert("Зараз весна!");
        break;
    case 6:
    case 7:
    case 8:
        alert("Зараз літо!");
        break;
    case 9:
    case 10:
    case 11:
        alert("Зараз осінь!");
        break;
    default:
        alert("Введіть коректні дані!!!");
        break;
}
*/

// // task 2
// function isPrime(num) {
//     let flag = true;
//     let temp;
//     for (let i = 2; i < num / 2; i++) {
//         temp = num % i;
//         if (temp == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag) {
//         console.log(`${num} це просте число`);
//     } else {
//         console.log(`${num} це сладне число`);
//     }
// }
// isPrime(2);
// isPrime(24);
// isPrime(3);
// isPrime(6);

// task 3
// function max() {
//     let temp = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (temp < arguments[i]) temp = arguments[i]
//     }
//     console.log(temp);
// }
// max(0, 0, 3, -5);