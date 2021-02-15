'use strict';
let nameRegExp = /^[A-Z][a-z]{1,19}$/;
let emailRegExe = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/
let passwordRegExp = /\w{8,15}$/;
let getID = id => document.getElementById(id);
let f = document.forms.f;

function checkForms(element, pattern) {
    getID(element).oninput = function () {
        // getID('check').setAttribute("disabled", "true")
        let test = pattern.test(this.value);
        if (test) {
            this.style.border = '1px solid green';
        } else {
            this.style.border = '1px solid red';
        }
    }
}

checkForms('first_name', nameRegExp);
checkForms('last_name', nameRegExp);
checkForms('email', emailRegExe);
checkForms('password', passwordRegExp);

getID('sign_up').addEventListener('click', function (e) {
    event.preventDefault();
    document.querySelector('.block').style.display = 'block';

})

document.querySelector('.out').addEventListener('click', function () {
    document.querySelector('.block').style.display = 'none';
    f.firstName.value = '';
    f.lastName.value = '';
    f.email.value = '';
    f.password.value = '';
})

document.querySelector('span').addEventListener('mouseup', event => {
    if (f.firstName.value !== '' && f.lastName.value !== '' && f.email.value !== '' && f.password.value !== '') {
        getID('check').removeAttribute("disabled");
    }
});


// (function checked() {
//     if (f.firstName.value !== '' && f.lastName.value !== '' && f.email.value !== '' && f.password.value !== '') {
//         getID('check').removeAttribute("disabled");
//     }
// })();

