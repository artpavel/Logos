// setTimeout(function(){
//     document.write('<h2>setTimeout</h2>')
// }, 2000);

// let timeoutID;

// function startTimeout(){
//     timeoutID = setTimeout(() => {
//         document.querySelector('.blockTimeout').innerHTML = '<h2>setTimeout</h2>';
//     }, 2000)
// }

// function stopTimeout(){
//     clearTimeout(timeoutID);
// }

// setInterval(function(){
//     document.write('<h2>setInterval</h2>')
// }, 2000);

// let intervalID;

// function createElement(){
//     let h2 = document.createElement('h2');
//     h2.textContent = 'setInterval';
//     document.querySelector('.blockInterval').append(h2);
//     // if(document.querySelector('.blockInterval').children.length >=5 ){
//     //     clearInterval(intervalID);
//     // }
// }

// function startInterval(){
//     intervalID = setInterval(createElement, 2000);
//     document.querySelector('.start').disabled = true;
//     document.querySelector('.stop').disabled = false;
// }

// function stopInterval(){
//     clearInterval(intervalID);
//     document.querySelector('.start').disabled = false;
//     document.querySelector('.stop').disabled = true;
// }

// let d = new Date();
// console.log('Date', d);
// console.log('getDay', d.getDay());
// console.log('getDate', d.getDate());
// console.log('getMonth', d.getMonth());
// console.log('getFullYear', d.getFullYear());
// console.log('getHours', d.getHours());
// console.log('getMinutes', d.getMinutes());
// console.log('getSeconds', d.getSeconds());
// console.log('getMilliseconds', d.getMilliseconds());
// console.log('getTimezoneOffset', d.getTimezoneOffset());
// console.log('getUTCHours', d.getUTCHours());
// console.log(new Date(2020, 6, 1, 12, 00, 00))

// let setD = new Date(2020, 6, 1, 12, 00, 00);

// let start =  d.getTime();
// console.log('start', start);
// setTimeout(() => {
//     let end = new Date().getTime()
//     console.log('end', end);
//     console.log('Time', end - start);
// }, 1000);

// 1 січня 1970 00,00,00

let setD = new Date(2020, 5, 6, 16, 00, 00);
console.log(setD);
console.log(setD.getTime());

function chectTime() {
    setInterval(() => {
        let currentD = new Date();
        let rizn = setD.getTime() - currentD.getTime();
        let hours = Math.floor((rizn % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((rizn % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((rizn % (1000 * 60)) / 1000);
        document.querySelector('.coutDown').innerHTML = `${hours} : ${minutes} : ${seconds}`
    })
}
chectTime()


// setInterval(() => {
//     let dd = new Date();
//     let hh = dd.getHours();
//     let mm = dd.getMinutes();
//     let ss = dd.getSeconds();
//     if (hh < 10) hh = '0' + hh;
//     if (mm < 10) mm = '0' + mm;
//     if (ss < 10) ss = '0' + ss;
//     document.querySelector('.digital-clock').innerHTML = `${hh} : ${mm} : ${ss}`
// })




/*   секундомер */
function trim(string) { return string.replace(/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, ''); }
var init = 0;
var startDate;
var clocktimer;

function clearFields() {
    init = 0;
    clearTimeout(clocktimer);
    document.clockform.clock.value = '00:00:00.00';
    document.clockform.label.value = '';
}

function clearALL() {
    clearFields();
    document.getElementById('marker').innerHTML = '';
}

function startTIME() {
    var thisDate = new Date();
    var t = thisDate.getTime() - startDate.getTime();
    var ms = t % 1000;
    t -= ms;
    ms = Math.floor(ms / 10);
    t = Math.floor(t / 1000);
    var s = t % 60;
    t -= s;
    t = Math.floor(t / 60);
    var m = t % 60;
    t -= m;
    t = Math.floor(t / 60);
    var h = t % 60;
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    if (ms < 10) ms = '0' + ms;
    if (init == 1) document.clockform.clock.value = h + ':' + m + ':' + s + '.' + ms;
    clocktimer = setTimeout("startTIME()", 10);
}

function findTIME() {
    if (init == 0) {
        startDate = new Date();
        startTIME();
        init = 1;
    } else {
        var str = trim(document.clockform.label.value);
        document.getElementById('marker').innerHTML = (str == '' ? '' : str + ': ') +
            document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
        clearFields();
    }
}


/*

   let timeMinut = parseInt(timeM)*60;
    timer = setInterval(function (){
       let seconds = timeMinut%60;
       let minutes = timeMinut/60%60;
       let hour = timeMinut/60/60%60;
        if (timeMinut <= 0) {
            clearInterval(timer);
            table.innerHTML = 'Game over';
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            // Выводим строку в блок для показа таймера
            table.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000)




*/