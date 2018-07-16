var images=['../images/index_image_1.png','../images/index_image_2.png','../images/index_image_3.png'];
$('.storePic').each(function(n){
	$(this).css('background-image','url('+images[n]+')');
})
$('#header .lf a').mouseover(function(){
  $(this).next().show();
}).mouseout(function(){
  $(this).next().hide();
})
$('#box .storePic a').mouseover(function(){
  $(this).css({
    'color':'white',
    'background-color':'rgba(0,0,0,.4)'
  })
}).mouseout(function(){
  $(this).css({
    'color':'transparent',
    'background-color':'transparent'
  })
})