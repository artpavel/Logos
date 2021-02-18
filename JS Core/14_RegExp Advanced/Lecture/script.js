'use strict';
/*
Flags
    - g - глобальний пошук
    - і - не чутливість до регістру
    - m - багаторядковий режим(^ $)
    - s - симовол нового рядка. Враховує новий рядок
    - u -  включення підтримки юнікоду
    - у - липкий пошук. Шукаємо співпадіння з певного символу в стрічці

    let regexp = /expression/flags;

    let regexp = new RegExp(expression, flags)
*/

/*
//  - g - глобальний пошук
const REGEXP = /ivan/g;
const STR = 'One ivan and one more ivan'
*/

/*
// - і - не чутливість до регістру
const REGEXP = /ivan/gi;
const STR = 'One ivan and one more iVan'
*/


/*
// - m - багаторядковий режим(^ $)
const REGEXP = /^\d/gim;
const STR = `1.One ivan and
2.one more iVan`;
*/


/*
// - s - симовол нового рядка. Враховує новий рядок
const REGEXP = /e.*r/s; // озн. після букви е будь-які символи до r
const STR = `
one
two
three
`;
// у нас три рядки, а при цьому він буде вважати як один рядок
*/

// const REGEXP = /ivan/gis;
// console.log(REGEXP.flags)
// console.log(REGEXP.global)

/*
// () - групи
console.log(/^(\d{3})\s(\w+)$/.test('345 s'))
*/

/*
// за допомогою ?< > ми можемо давати назву групам, які вибрали
let str = 'Привіт, сьогодні в 10-07-2020 відбудеться .....'
let regExp = /(?<date>\d{2})-(?<month>\d{2})-(?<year>\d{4})/
console.log(regExp.exec(str))
let { date, month, year } = regExp.exec(str).groups;
console.log(month, year);
*/

/*
// за допомогою match()
let str = 'Привіт, сьогодні в 10-07-2020 відбудеться .....'
let regExp = /(?<date>\d{2})-(?<month>\d{2})-(?<year>\d{4})/
console.log(str.match(regExp))
let { date, month, year } = str.match(regExp).groups;
console.log(month, year);
*/

// // відключення групи
// let regExp = /a(?:bc)*/

// \b  \B - межі слова. Окремий вираз

/*
//''.replace, ''.split, ''.search
let str = 'I love Chelsea and Chelsea the best and chelsea'
let regExp = /Chelsea/gi // спочатку не знайшло друге входження. Поки не g
let newStr = str.replace(regExp, 'Arsenal')
console.log(newStr);

let str1 = '1.Ivan. 2.Pavlo. 3.Petro.'
let regExp1 = /\d\./g;
console.log(str1.split(' '));
console.log(str1.split(regExp1));

let str2 = 'lorem ipsum dolor sit bassumenda amet  consectetur adipisicing elit. Assumenda ipsam maxime'
let regExp2 = /\bassumenda\b/gi;
console.log(str2.search(regExp2));
// якщо нічого не буде -1
*/




























