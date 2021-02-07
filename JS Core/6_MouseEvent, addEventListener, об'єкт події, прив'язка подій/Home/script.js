// task 1
let color = ['red', 'yellow', 'green'];
let counter = 0;
let block1 = document.querySelector('.block1');
block1.addEventListener('mouseover', function () {
    this.style.backgroundColor = color[counter];
    counter++;
    if (counter === color.length) {
        counter = 0;
    }
})
block1.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'purple';
})

// task 2
let block2 = document.querySelector('.block2');
block2.addEventListener('mouseover', function (){
    this.style.cssText = 'background: yellow; outline: 3px solid blue; color: blue';
    this.textContent = 'Хочеш знати який?'
});

block2.addEventListener('mousedown', function (){
    this.style.cssText = 'background: black; color: white; outline: 3px solid yellow;';
    this.textContent = 'A я тобі не скажу'
});

block2.addEventListener('mouseup', function (){
    this.style.cssText = 'background: yellow; color: black; outline: 3px solid blue; color: blue';
    this.textContent = 'Хочеш знати який?'
});


block2.addEventListener('mouseout', function () {
    this.style.cssText = 'background: purple; color: black; outline: 3px solid orange;';
    this.textContent = 'У мене є секрет';
})

// task 3
let block3 = document.querySelectorAll('.block3');
for (let i = 0; i < block3.length; i++) {
    block3[i].addEventListener('click', function (){
        let url = prompt('Введіть адресу зображення');
        this.style.background = `url('${url}')`;
    });
}

// task 4

let li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function (){
        let color =this.textContent;
        this.style.color = `${color}`;
    });
}




