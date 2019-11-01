console.log('Header component!');
import $ from 'jquery'

$('<h1 />')
    .text('Hello from jquery')
    .css({
        textAlign: 'center',
        color: 'red'
    })
    .appendTo($('header'))