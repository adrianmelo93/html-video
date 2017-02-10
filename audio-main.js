
var $boton = $('#boton');
var audioOnload = require('./audioOnloadHandle.js')

$boton.click(audioOnload);

$('#fast').click(function(){
    $('audio')[0].playbackRate += .10;
})
$('#slow').click(function(){
    $('audio')[0].playbackRate -= .10;
})
