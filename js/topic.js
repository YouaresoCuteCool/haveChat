
$('.btn').click(function(){
  if($('.inpt').val().length==0){
    $('.previous').css('display','block');
    var time=setTimeout(function(){
      $('.previous').css('display','none');
    },2000)
  }else if($('.inpt').val().length!=0){
    console.log($('.inpt').val());
    var listBorder=$('<div class="c-fixcon">\
      <ul>\
          <li class="c-o">\
                <div class="s-o">\
                  <span class="user-pic">\
                  <img src="../images/100.jpeg" alt="">\
                  </span>\
                </div>\
                \
                <div class="s-t">\
                  <div>\
                    <a href="">☀️_52985</a> \
                    <span>19个小时前</span>\
                  </div>\
                  <div>'+$(".inpt").val()+'</div>\
                  <div>\
                    <span class="s-bg"></span>\
                    <span class="s-bg-o"></span>\
                  </div>\
                </div>\
              </li>\
      </ul></div>');
    $('.c-list').prepend(listBorder);
    $('.inpt').val("");
  }
})

