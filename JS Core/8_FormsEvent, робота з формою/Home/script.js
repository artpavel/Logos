'use strict';
// task 1
/*
* Необхідно реалізувати наступний функціонал як на відео input (архів долучено до завдання), а саме:

— при кліку кнопку Move текст з лівого інпута переноситься в правий, причому якщо в лівому інпуті нічого немає, текст в правому не змінюється

— при втраті фокусу в нижньому інпуті текст має переноситися в його ж placeholder, причому якщо в інпуті нічого немає, текст в placeholder не змінюється
* */
let f1 = document.forms.f1;
f1.addEventListener('click', function () {
    let input = f1.input.value;
    if(input.length !== 0){
        f1.output.value = input;
    }
    f1.input.value = '';
})

function change(){
    f1.input.value = '';
    if(f1.bottom.value === f1.output.value){
        f1.bottom.placeholder = f1.output.value;
    }
    f1.bottom.value = '';
}

// task 2
/*
*Необхідно реалізувати наступний функціонал як на відео signUp, а саме:

— заповнити всі поля форми: first name, second name, email

— вибрати стать: man, woman

— вибрати position: Fronted, Backend, QC/QA

— поставити галочку навпроти пункту: I agree…

— після чого клікаємо на кнопку Sign Up і переходимо до блоку профайлу користувача (примітка: без галочки напроти I agree… кнопка має бути не активна)

— на блоці профайлу має бути вся інформація яку ми заповнювали, а також картинка чоловіча чи жіноча відносно статі яку ми обирали

— при кліку на Sign Out ми повертаємося на блок створення акаунту, поля в блоці мають бути зачищені
* */
let account = document.querySelector('.account');
let profile = document.querySelector('.profile');
let img = document.querySelector('img');
let f2 = document.forms.f2;
let f3 = document.forms.f3;
f2.submit.addEventListener('click', function (){
    let obj={
        firstName: f2.firstName.value,
        lastName: f2.lastName.value,
        email: f2.email.value,
        state: f2.state.value,
        position: f2.skills.value
    }
    event.preventDefault();
    document.querySelector('.block1').textContent = obj.firstName;
    document.querySelector('.block2').textContent = obj.lastName;
    document.querySelector('.block3').textContent = obj.position;
    if(obj.state === 'man'){
        img.setAttribute('src', 'https://img.icons8.com/bubbles/452/man-with-beard-in-suit.png')
    }else{
        img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MGppgIP9vAmF7UpvHujSQ_hJ49TqKWImcQ&usqp=CAU')
    }
    f2.reset();
    account.style.display = 'none';
    profile.style.display = 'block';
})

f3.submit.addEventListener('click', function (){
    account.style.display = 'block';
    profile.style.display = 'none';
    img.removeAttribute('src');
})


