$(document).ready(function () {

    const first = () => {
        $('.block1').slideDown(30000);
    }

    const second = () => {
        $('.t1').text('1')
    }

    const three = () => {
        $('.block1').slideUp(20000);
    }

    const four = () => {
        let arr = [$('#s1').text(), $('.s2').text(),
            $('#second i').text(), $('[title]').text(),
            $('[target="_blank"]').text(), $('#second .extra').text()]
        alert('Слово з другого завдання: ' + arr.join(''))
    }

    first();
    setTimeout(second, 31000);
    setTimeout(three, 32000);
    four();

})








