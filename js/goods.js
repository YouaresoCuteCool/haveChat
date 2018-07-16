var images=['../images/1026956140.jpg','../images/bag_img_1.png','../images/bag_img_2.png','../images/bag_img_4.png','../images/bag_img_5.png','../images/bag_img_6.png'];
$('.imgItems').each(function(n){
  $(this).css({
    'background-image':'url('+images[n]+')',
    'background-size':'contain'
  });
})
$('.lf a').mouseover(function(){
  $(this).next().show();
}).mouseout(function(){
  $(this).next().hide();
})
$("#box-content").click(function(){
  $("#box-content").hide();
  return false;
})
$("#box-content .modal-content").click(function(){
  return false;
})
$('.imgItems').click(function(){
  $("#box-content").show();
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})

