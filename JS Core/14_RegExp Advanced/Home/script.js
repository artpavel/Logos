'use strict';
// pattern
let nameRegExp = /^[A-Za-z]{4,16}$/;
let passwordRegExp = /\w.{3,16}$/;
let emailRegExp = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/
let getSelector = selector => document.querySelector(selector);
let myDate = {};


/* валідація форм початок */

// кнопка спочатку не активна.
function checkForms(element, pattern) {
    getSelector(element).oninput = function () {
        let test = pattern.test(this.value);
        if (test) {
            this.style.border = '1px solid green';
            getSelector('.add-user').removeAttribute("disabled");
        } else {
            this.style.border = '1px solid red';
            getSelector('.add-user').setAttribute("disabled", true);
        }
    }
}

checkForms('.login', nameRegExp);
checkForms('.email', emailRegExp);
checkForms('.password', passwordRegExp);

// дана функція перевіряє правильність і тільки після того добавляє об'єкт в масив
function checkButtonAdd() {
    if (getSelector('.login').value !== '' && getSelector('.email').value !== '' && getSelector('.password').value !== '') {
        getSelector('.warn').classList.remove('active');
        createDate();
        createTable();
        clearInput();
    } else {
        getSelector('.warn').classList.toggle('active');
    }
}

/* валідація форм кінець */

/* функції початок */

// очищення полів вводу
function clearInput() {
    getSelector('.login').value = '';
    getSelector('.password').value = '';
    getSelector('.email').value = '';
}

// створення даних з полів
function createDate() {
    myDate = {
        login: getSelector('.login').value,
        password: getSelector('.password').value,
        email: getSelector('.email').value
    }
}

// створення даних рядків

// вивід в таблицю
function createTable() {
    let tr = document.querySelectorAll('tr');
    getSelector('.table').innerHTML +=
        `<table class="table">
            <tr class="tr">
                <td class="td">${tr.length}</td>
                <td class="td">${myDate.login}</td>
                <td class="td">${myDate.password}</td>
                <td class="td">${myDate.email}</td>
                <td class="td"><a class="edit">Edit</a></td>
                <td class="td"><a class="delete">Delete</a></td>
            </tr>
      </table>`
}


/* функції кінець */
// добавлення по кліку
getSelector('.add-user').addEventListener('click', () => {
    checkButtonAdd();
})

// видалення по кліку
document.addEventListener('click', event => {
    if (event.target.matches('.delete')) {
        let del = getSelector('.delete').parentNode.parentNode;
        console.log(getSelector('.delete').parentNode.parentNode);
        del.remove();
        let tr = document.querySelectorAll('tr');
        let td = document.querySelectorAll('td')
        console.log(tr)

    }
})


// зміна елементу по кліку
let element = {};
document.addEventListener('click', event => {
    let edit;
    let number;
    if (event.target.matches('.edit')) {
        let index = document.querySelector('.edit').parentNode.parentNode.rowIndex;
        edit = document.querySelector('.edit').parentNode.parentNode;
        console.log(index)
        number = edit.childNodes[3].textContent;
        getSelector('.login').value = edit.childNodes[3].textContent;
        getSelector('.password').value = edit.childNodes[5].textContent;
        getSelector('.email').value = edit.childNodes[7].textContent;
        getSelector('.first').classList.add('active');
        getSelector('.two').classList.add('active');
    }
    if (event.target.matches('.edit-user')) {
        createDate();

        getSelector('.first').classList.remove('active');
        getSelector('.two').classList.remove('active');
    }

})

