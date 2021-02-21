// $(selector).action()

// $(document).ready(function(){})

// $(function(){})

$(document).ready(function(){

// Комбінації селекторів
    // $('*') - select all elements
    // $(this) - select current HTML element
    // $('tag') - select all tag elements
    // $('.class') - select all class elements
    // $('#id') - select id element
    // $('ul li:first-child') - select first li in ul
    // $('[href]') - select all elements with an href attributes
    // $('[target="_blank"]') - select all elements with an target attributes value equal to "_blank"
    
// jQuery Event Methods

    /* MouseEvent 
        - click
        - dblclick
        - mouseover
        - mouseout
        - mousemove
        - mouseleave
        - mousedown
        - mouseup
    */

    /* KeyboardEvent 
        - keydown
        - keyup
        - keypress
    */

    /* FormEvent 
        - focus
        - blur
        - change
        - input
        - submit
    */

    /* Document/Window 
        - scroll
        - resize
        - load
        - unload
    */

    // $('#get').click(function(){
    //     console.log('Click works 1');
    // })

    // $('#get').click(function(){
    //     console.log('Click works 2');
    // })

    // html(), text(), val()

    // $('#get').click(function(){
    //     console.log('HTML: ', $('#box').html());
    //     console.log('Text: ', $('#box').text());
    //     console.log('Value: ', $('#login').val());
    // })

    // $('#get').click(function(){
    //     // $('#box').html('<h1>New Box</h1>');
    //     // $('#box').text('<h1>New Box</h1>');
    //     // $('#login').val('some value');
    // })

    // $('#get').click(function(){
    //     // console.log('ATTR: ', $('#link').attr('href'));
    //     // $('#link').attr('href', 'https://www.google.com');
    //     // $('#link').attr('target', '_blank');
    //     // $('#link').text('google');
    //     // $('#link').attr({
    //     //     'href': 'https://www.google.com',
    //     //     'target': '_blank'
    //     // });
    //     $('#link').prop('href', 'https://www.google.com');
    //     $('#link').prop('target', '_blank');
    // })

    // $('#rem').click(function(){
    //     $('#link').removeAttr('href');
    // })

    // $('#get').click(function(){
    //     console.log($(this));
    // })

    // $('#get').click(() => {
    //     console.log($(this));
    // })

    // empty(), remove()

    // $('#get').click(() => {
    //     $('#box').empty();
    // })

    // $('#get').click(() => {
    //     // $('#box').remove();
    //     // $('p').remove();
    //     // $('p').remove('.text');
    //     $('p.text').remove();
    // })

    // css
    // $('#get').click(() => {
        // $('li').css('color', 'red');
        // $('li').css({
        //     color: 'red',
        //     textAlign: 'center'
        // });
        // $('li:first-child').css('color', 'red');
        // $('li:odd').css('color', 'red');
        // $('li:even').css('color', 'blue');
        // $('li:gt(2)').css('color', 'red');
        // $('li:lt(2)').css('color', 'blue');
        // $('li:eq(2)').css('color', 'yellow');
        // $('li').eq(2).css('color', 'yellow');
        // $('li:contains("item 5")').css('color', 'red');
        // $('li:has("b")').css('color', 'red');
    // })

    $('.add').click(()=>{
        // $('.block').addClass('red');
        // $('.block').addClass('red shadow');
        // $('.block').show();
        // $('.block').fadeIn();
        // $('.block').fadeIn(1000);
        // $('.block').fadeIn(1000, function(){
        //     $(this).addClass('shadow')
        // });
        // $('.block').slideDown()
        // $('.block').fadeIn().animate({
        //     width: '150px',
        //     height: '200px'
        // },500).animate({
        //     width: '100px',
        //     height: '150px'
        // },500)
        $('.block').animate({
            backgroundColor: 'rgb(255, 20, 147)',
            width: '250px'
        },1000, 'easeOutElastic')
    })

    $('.remove').click(()=>{
        // $('.block').removeClass('red');
        // $('.block').removeClass('red shadow');
        // $('.block').hide();
        // $('.block').fadeOut();
        // $('.block').fadeOut(1000);
        // $('.block').slideUp()
        // $('.block').animate({
        //     width: '150px',
        //     height: '200px'
        // },500).animate({
        //     width: '100px',
        //     height: '150px'
        // },500).fadeOut()
        $('.block').animate({
            backgroundColor: 'rgb(255, 20, 147)',
            width: '250px'
        },1000, 'linear')
        

    })

    $('.toggle').click(() => {
        // $('.block').toggleClass('red');
        // $('.block').toggleClass('red shadow');
        // $('.block').toggle();
        // $('.block').fadeToggle();
        // $('.block').slideToggle()
        $('.block').slideToggle(1000)
    })





})
