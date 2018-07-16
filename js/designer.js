$('.lf a').mouseover(function(){
  $(this).next().show();
}).mouseout(function(){
  $(this).next().hide();
})