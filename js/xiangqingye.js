$('.guanzhu').click(function(){
 $('.tool').css('display','block');
 var timer=setInterval(function(){
  $('.tool').css('display','none');
},2000)
})
$('.ltool .del').click(function(){
  $('.ltool').removeClass('ltool-sec');
})
$('.liaotian').click(function(){
  if(flag%2 == 0){
    var flag=0; 
    $('.ltool').addClass('ltool-sec');
  }else{
    $('.ltool').removeClass('ltool-sec');
    setTimeout(function(){
      $('.ltool').addClass('ltool-sec');
    },500)
  }
  flag++;
})
$('textarea').focus(function(){
  $(this).css('border','1px solid black');
})
$('textarea').blur(function(){
  $(this).css('border','1px solid #9b9b9b');
})
$('.huifu1').click(function(){
  $('.modal').css('display','block');
})
$('.modal .bg').click(function(){
  $('.modal .com').css('display','none');
  $(this).css('display','none');
})
$('.send .btn-txt2').click(function(){
  var txt=$('.comment textarea').val();
  console.log(txt);
  var addtxt=$(`
    <div class="item">
    <div class="sculpture">
    <img src="http://thirdqq.qlogo.cn/qqapp/101422809/B92CE265E899C9BB5BD0DDF1EB1C7228/100" alt="">
    </div>
    <div class="more">
    <p class="baseLine"><a href="" class="uName">滴答滴答</a><span class="time">8天前</span></p>
    <p class="content">`+txt+`</p>
    <p class="fun">
    <span class="huifu1"></span>
    <span class="dianzan2"></span>
    </p>
    <div class="huifu">
    <p class="hf">回复给：<a href="" class="tone">@贾叶苏</a></p>
    <p>同问~~~~~~~~~~</p>
    </div>
    </div>
    </div>
    `)
  $('.newComment').append(addtxt);
  $('.comment textarea').val("");
  $('.fun .huifu1').click(function(){
    $('.modal').css('display','block');
    console.log("111");
  })
  $('.fun .dianzan2').click(function(){
    $('.tool2').css('display','block');
    setTimeout(function(){
     $('.tool2').css('display','none');
   },2000)
  })
})
$('.modal .btn-txt').click(function(){
  var txt=$('.modal textarea').val();
  $('.modal').css('display','none');
  console.log(txt);
  var huifu = $(`
    <div class="item">
    <div class="sculpture">
    <img src="http://thirdqq.qlogo.cn/qqapp/101422809/B92CE265E899C9BB5BD0DDF1EB1C7228/100" alt="">
    </div>
    <div class="more">
    <p class="baseLine"><a href="" class="uName">滴答滴答</a><span class="time">8天前</span></p>
    <p class="content">`+txt+`</p>
    <p class="fun">
    <span class="huifu1"></span>
    <span class="dianzan2"></span>
    </p>
    <div class="huifu">
    <p class="hf">回复给：<a href="" class="tone">@贾叶苏</a></p>
    <p>同问~~~~~~~~~~</p>
    </div>
    </div>
    </div>
    `)
  $('.newComment').prepend(huifu);
  $('.fun .huifu1').click(function(){
    $('.modal').css('display','block');
  })
})