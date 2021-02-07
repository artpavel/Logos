'use strict';
// доступ до форм через js
let f1 = document.forms.f1;
// let f1 = document.forms["f1"];
/*
let ff = document.forms;
console.log(ff);
*/

// console.log(f1);

/* Method*/
// console.log(f1.elements);
// console.log(f1.elements.login);
// console.log(f1.get);

// login
// console.log(f1.login);

// повісили подію і дістали данні
f1.get.addEventListener('click', function (){
    let userlogin = f1.login.value;
    let userPassword = f1.password.value;
    console.log(userlogin);
    console.log(userPassword);
    //  і можемо відразу очистити поля після вводу
    // f1.login.value = '';
    // f1.password.value = '';
    // або
    f1.reset();
})

/* form f2 */
let f2 = document.forms.f2;
/*
//хочемо задати фон для body
for (let i = 0; i < f2.elements.length; i++) {
    f2.elements[i].onclick = function (){
        document.body.style.backgroundColor = this.value;
    }
}
*/
function radioColor(){
    if (event.target.type === 'radio'){
        document.body.style.backgroundColor = event.target.value;
    }
}

/* form f4 */
let f4 = document.forms.f4;
f4.show.addEventListener('click', function (){
    // console.log(this);
    // console.log(this.checked);
    // f4.hide.checked = true;
    // if(f4.show.checked){
    //     f4.area.style.display = 'block';
    // }else{
    //     f4.area.style.display = 'none';
    // }
    f4.area.style.display = f4.show.checked ? 'block' : 'none';
    document.forms.f3.elements[3].checked = true;
})

/* form f5 */
let f5 = document.forms.f5;
// console.log(f5.colors.options);
// console.log(f5.colors.selectedIndex);
// console.log(f5.colors.value);
// for (let i = 0; i < f5.colors.options.length; i++) {
//     if(f5.colors.options[i].selected){
//         console.log(f5.colors.options[i])
//     }
// }

// for (let i = 0; i < f5.colors.options.length; i++) {
//     f5.colors.addEventListener('change', function () {
//         if (f5.colors.options[i].selected) {
//             document.body.style.backgroundColor = this.value;
//         }
//     })
// }

// це набагато простіший варіант
f5.colors.addEventListener('change', function (){
    document.body.style.backgroundColor = this.value;
})

// це ми при кліку по кнопці витягуємо значення options
f5.get.addEventListener('click', () => {
    console.log(f5.colors.value);
    // let opt = new Option('gray color', 'gray', true, true);
    // console.log(opt);
})

/* form f6 */
let f6 = document.forms.f6;
// подія input, focus, blur
f6.test.addEventListener('focus', function (){
    console.log(`focus works`)
})
f6.test.addEventListener('blur', function (){
    console.log(`blur works`)
})

f6.test.addEventListener('change', function (){
    console.log(`change works`)
})

// подія input
f6.test.addEventListener('input', function (){
    console.log(`input works`)
    document.querySelector('.text').textContent = this.value;
})

/* form f7 */
function showMessage(){
    // при цій команді дані з форми нікуди не надсилаются
    // event.preventDefault();
    console.log('submit done')
}












