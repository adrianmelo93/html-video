

module.exports = function() {
  var $texto = $('#texto').val();
  $('audio')[0].src=$texto;
  console.log($texto);
  localStorage.setItem("url", $texto);
  var save = localStorage.getItem('url')
  console.log(save);
}
