$(function(){
  $('#circle').hover(function(){
    var nextX = Math.floor(Math.random() * $(document).width()-100);
    var nextY = Math.floor(Math.random() * $(document).height()-100);
    console.log(nextX + ", " + nextY);
    $('#circle').offset({top: nextY, left: nextX});
  });
  $('#circle').click(function(){
    $('#circle').hide();
    $('.win-display').show();
  });
$('#reset').click(function(){
  $('.win-display').hide();
  $('#circle').show();
  $('#circle').offset({top: 100, left: 0});
});

});
