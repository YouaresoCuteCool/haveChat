$('#modal .box-modal .login-form input[type=text]').focus(function(){
  $(this).css('border','1px solid black');
}).blur(function(){
  $(this).css('border','1px solid #ccc');
})
var images=['icon_weibo.png','icon_qq.png','icon_wechat.png'];
$('#modal .box-modal .login-form .icons .icon').each(function(n){
  $(this).css({
    'background-image':'url(../images/'+images[n]+')',
    'background-size':'28px'
  })
})
$('#modal .box-modal .login-form .icons .icon:first-child').mouseover(function(){
  $(this).css({
    'background-image':'url(../images/icon_weibo_hover.png)',
    'background-size':'28px'
  })
}).mouseout(function(){
  $(this).css({
    'background-image':'url(../images/icon_weibo.png)',
    'background-size':'28px'
  })
})
$('#modal .box-modal .login-form .icons .icon:nth-child(2)').mouseover(function(){
  $(this).css({
    'background-image':'url(../images/icon_qq_hover.png)',
    'background-size':'28px'
  })
}).mouseout(function(){
  $(this).css({
    'background-image':'url(../images/icon_qq.png)',
    'background-size':'28px'
  })
})
$('#modal .box-modal .login-form .icons .icon:last-child').mouseover(function(){
  $(this).css({
    'background-image':'url(../images/icon_wechat_hover.png)',
    'background-size':'28px'
  })
}).mouseout(function(){
  $(this).css({
    'background-image':'url(../images/icon_wechat.png)',
    'background-size':'28px'
  })
})
$('#modal .box-modal .cha').click(function(){
  $('#modal').hide();
})