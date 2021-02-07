'use strict';


//task 1
/*const fib = (n) => {
    let b = n == 0;
    if (b) {
        console.log(0);
    } else {
        let prev = 0;
        let next = 1;
        console.log(1);
        for (let i = 1; i < n; i++) {
            let temp = prev + next;
            prev = next;
            next = temp;
            console.log(temp);
        }
    }
}
fib(5);*/
//task 2
//2.1
let f = function (a, b) {
    let prev = 0;
    let next = 1;
    let sum = 1;

    for (let i = 1; i < a; i++) {
        let temp = next * b;
        prev = next;
        next = temp;
        sum += temp;
    }
    console.log(sum);
}
f(5, 2);
//2.2
/*let f = function (n, q) {
    let sum = (1 - q ** n) / (1 - q);
    console.log(sum);s
}*/
f(4, 3);

// task 3
/*function isPrime(num) {
    let flag = true;
    let temp;
    for (let i = 2; i < num ; i++) {
        temp = num % i;
        if (temp === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(num);
    }
}

let simpleNumber = (num1, num2) => {
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}
let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');

simpleNumber(num1, num2);*/
