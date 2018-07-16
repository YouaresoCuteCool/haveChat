$(function(){  
    var p=0,t=0;   
    $(window).scroll(function(e){  
            p = $(this).scrollTop();  
              
            if(t<=p && p>500){//下滚  
                $('.nav-header').slideUp(300);
            }               
            else{//上滚  
                 $('.nav-header').slideDown(300);
            }  
            setTimeout(function(){t = p;},0);         
    });  
}); 
$('.find').mouseover(function(){
  $('.find-content').css({
    'display':'block'
  })
}).mouseout(function(){
  $('.find-content').css({
    'display':'none'
  })
})
 $('.find-content').mouseover(function(){
   $('.find-content').css({
    'display':'block'
  })
}).mouseout(function(){
  $('.find-content').css({
    'display':'none'
  })
})
 $('.bell').parent().mouseover(function(){
   $('.bell-content').css({
    'display':'block'
  });
   $('.bell').css({
    'background-position':'20px -24px'
   })
}).mouseout(function(){
  $('.bell-content').css({
    'display':'none'
  })
  $('.bell').css({
    'background-position':'20px 1px'
   })
})
 $('.bell-content').mouseover(function(){
   $('.bell-content').css({
    'display':'block'
  })
}).mouseout(function(){
  $('.bell-content').css({
    'display':'none'
  })
})
 $('.user').parent().mouseover(function(){
   $('.user-content').css({
    'display':'block'
  });
   $('.user').css({
    'background-position':'20px -24px'
   })
}).mouseout(function(){
  $('.user-content').css({
    'display':'none'
  })
  $('.user').css({
    'background-position':'20px 1px'
   })
})
 $('.user-content').mouseover(function(){
   $('.user-content').css({
    'display':'block'
  })
}).mouseout(function(){
  $('.user-content').css({
    'display':'none'
  })
})
 $('.search').mouseover(function(){
   $('.search').css({
    'background-position':'20px -24px'
   })
}).mouseout(function(){
  $('.search').css({
    'background-position':'20px 1px'
   })
})
var flag=true;
$('.search').click(function(){
  if(flag){
      $('.search-content').css({
         'display':'block'
      })
    }else{
      $('.search-content').css({
         'display':'none'
      })
    }
  flag=!flag;
})


























