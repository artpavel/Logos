'use strict';

// task1
function sum() {
    let sum = 0;
    arr.forEach((val, index) => sum += val);
    return sum;
}

let arr = [5, 6, 7, 8, 9];
console.log(sum(arr));

// task2
function squareNumber() {
    return arr.map(val => val * val);
}

let arr1 = [5, 6, 7, 8, 9];
console.log(squareNumber(arr1));

// task3, task4
function checkEvery(arr) {
    return arr.every(s => s.country.toLowerCase() === 'ukraine');
}

function checkSome(arr) {
    return arr.some(s => s.country.toLowerCase() === 'ukraine');
}

let arr2 = [
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'}
]
console.log(checkEvery(arr2));
console.log(checkSome(arr2));

// task5
function filterArr(arr) {
    return arr.filter(elem => Array.isArray(elem));
}

let arr3 = [1, 'string', [3, 4], 5, [6, 7]]
console.log(filterArr(arr3));

// task6
function sumForZero(arr) {
    return arr.reduce((acc, cur, i) => {
        if (cur === 0) arr.splice(i)
        return acc + cur;
    }, 0)
}

function howManyElements(arr) {
  arr.reduce((acc, cur, i) => {
        if (acc === 10) arr.splice(i)
         return acc + cur;
    }, 0)
return arr.length;
}

let arr4 = [1, 2, 3, 0, 4, 5, 6];
let arr5 = [1, 2, 3, 0, 4, 5, 6];
console.log(sumForZero(arr4));
console.log(howManyElements(arr5));


// task 7
function search(arr) {
    return arr.filter(val => val >= 0)
        .map(val => parseFloat(Math.sqrt(val).toFixed(2)))
}

let arr6 = [1, -2, 3, 0, 4, -5, 6, -11];
console.log(search(arr6))