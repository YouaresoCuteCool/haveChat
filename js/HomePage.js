
$('.p-one').click(function(){
  $('.p-three').css('border','none');
  $('.p-four').css('border','none');
  $('.p-two').css('border','none');
  $('.p-one').css('border-bottom','1px solid black');
})
$('.p-two').click(function(){
   $('.p-two').css('border-bottom','1px solid black');
   $('.p-one').css('border','none');
   $('.p-three').css('border','none');
   $('.p-four').css('border','none');
   $('.cons1').css('display','none');
      $('.cons2').css({
        'opacity':'1',
        'transition':'opacity 1s ease',
      });
})
$('.p-three').click(function(){
   $('.p-three').css('border-bottom','1px solid black');
   $('.p-one').css('border','none');
   $('.p-two').css('border','none');
   $('.p-four').css('border','none');
   $('.cons1').css('display','none');
   $('.cons2').css('display','none');
    $('.cons3').css({
        'opacity':'1',
        'transition':'opacity 1s ease',
      });
})
$('.p-four').click(function(){
   $('.p-four').css('border-bottom','1px solid black');
   $('.p-one').css('border','none');
   $('.p-two').css('border','none');
   $('.p-three').css('border','none');
   $('.cons1').css('display','none');
   $('.cons2').css('display','none');
   $('.cons3').css('display','none');
    $('.cons4').css({
        'opacity':'1',
        'transition':'opacity 1s ease',
      });
})
$('.draft').click(function(){
  $('.con-box').css('display','none');
  $('.draft').css('background','#eee');
  $('.t-one').css('background','white');
})
$('.t-one').click(function(){
  $('.con-box').css('display','inline-block');
  $('.t-one').css('background','#eee');
  $('.draft').css('background','white');
})



























