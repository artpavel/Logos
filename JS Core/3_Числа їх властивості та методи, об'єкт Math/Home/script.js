'use strict';
/*
// task 1
let num = prompt('Введіть число');
const getArea = a => {
    if(a === null){
        alert('Введіть радіус!');
    }else if (!Number.isFinite(+a)) {
        alert('Повинно бути числове значення');
    } else {
        alert(Math.PI * a * a);
    }
};
getArea(num);
*/

/*
// task 2
function getSqrt(number) {
    if (number === null) {
        alert('Будь ласка, введіть число!');
    } else if (!Number.isFinite(+number)) {
        alert('Повинно бути числове значення');
    } else if (+number < 0) {
        alert('Введіть додатнє число');
    } else {
        alert(`Квадратний корінь з числа ${number} дорівнює ${Math.sqrt(number)}`);
    }
}
let num = prompt('Введіть число');
getSqrt(num);
*/

// task 3
let MyMath = {
    PI: 3.141592,
    pow: (number, degree) => number ** degree,
    min: (...arr) => {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    },
    max: (...arr) => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    },
    abs: number => {
        let a = +number;
        let b;
        if (a < 0) {
            b = a * -1;
        } else {
            b = a;
        }
        return b;
    }
}

let question = prompt('Введіть необхідну функцію: pi, pow, min, max');
let str = question.toLowerCase();

switch (str) {
    case 'pi':
        alert(MyMath.PI)
        break;
    case 'pow':
        let a = prompt('Введіть число');
        while (true) {
            if (a === null) {
                alert('Будь ласка, введіть число!');
            } else if (!Number.isFinite(+a)) {
                alert('Повинно бути числове значення');
            } else {
                break;
            }
            a = prompt('Введіть число');
        }
        let b = prompt('Введіть степінь число');
        while (true) {
            if (b === null) {
                alert('Будь ласка, введіть число!');
            } else if (!Number.isFinite(+b)) {
                alert('Повинно бути числове значення');
            } else {
                break;
            }
            b = prompt('Введіть число');
        }
        alert(MyMath.pow(a, b));
        break;
    case 'abs':
        let abs = prompt('Введіть число');
        if (abs === null) {
            alert('Будь ласка, введіть число!');
        } else if (!Number.isFinite(+abs)) {
            alert('Повинно бути числове значення');
        } else {
            alert(MyMath.abs(abs));
        }
        break;
    case 'max':
        let max = prompt('Введіть число. Будь-який символ закінчить масив');
        let arr = [];
        while (isFinite(max)) {
            arr.push(max);
            max = prompt('Введіть число. Будь-який інший символ закінчить масив');
        }
        alert(`Максимальне значення буде ${MyMath.max(...arr)}`);
        break;
    case 'min':
        let min = prompt('Введіть число. Будь-який символ закінчить масив');
        let arr1 = [];
        while (isFinite(min)) {
            arr1.push(min);
            min = prompt('Введіть число. Будь-який інший символ закінчить масив');
        }
        alert(`Мінімальне значення буде ${MyMath.min(...arr1)}`);
        break;
    default:
        alert(`Зробіть коректний вибір
                 Це може бути: pi, pow, min, max`);
        break;

}


