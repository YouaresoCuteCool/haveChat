$('.s-li').click(function(){
  console.log($('.s-li'));
  $(this).css({
    'border-left':'1px solid black',
    'border-bottom':'1px solid black',
    'border-top':'1px solid black',
  })
})
$('.s-li').mouseout(function(){
  $(this).css('border','1px solid silver')
})
$('.more').click(function(){
  
  $(this).css('display','none');
  
 var pic=$('<div class="roate">\
       <img src="../images/Rolling.svg" alt="" />\
         </div>');
    $('.load').append(pic);

  var timer=setInterval(function(){
    $('.roate').css('display','none')
        clearInterval(timer);
        $('.hidden-box').css('display','flex');
  },2000);
  
})
