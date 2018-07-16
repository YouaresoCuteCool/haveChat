$('#more div').click(function(){
  $(this).css('display','none');
  $('#more img').css('display','block');
  var addmore=$(`
   <div class="items">
   <img src="http://pic.topys.cn/uploads/20180627/1827222157.png?x-oss-process=style/article-pic-list-webp-2x" alt="">
   <a href="">名人访谈</a><br>
   <a href="" style="color:black;font-size:22px;height:80px">我终于写出了最强金曲奖马后炮暨新世代年轻人生存指南</a><br>
   <a href="" class="secA">好东西，不怕晚</a>
   <div class="foot-bar">
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-browse.png')">882</span>
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-comment.png')">2</span>
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-praise.png')">5</span>
   </div>
   </div>
   <div class="items">
   <img src="http://pic.topys.cn/uploads/20171116/1901507916.png?x-oss-process=style/article-pic-list-webp-2x" alt="">
   <a href="" class="hoverChange">名人访谈</a><br>
   <a href="" style="color:black;font-size:22px;height:80px">那天晚上，金承志亲口对我们承认：彩虹室内合唱团过气了</a><br>
   <a href=""  class="secA">TOPYS专访上海彩虹室内合唱团指挥金承志，同他聊聊流行文化、严肃音乐、过气等话题。...</a>
   <div class="foot-bar">
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-browse.png')">882</span>
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-comment.png')">2</span>
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-praise.png')">5</span>
   </div>
   </div>
   <div class="items">
   <img src="http://pic.topys.cn/uploads/20180515/1548348544.jpeg?x-oss-process=style/article-pic-list-webp-2x" alt="">
   <a href="" class="hoverChange">名人访谈</a><br>
   <a href="" style="color:black;font-size:22px;height:80px">《水象》创刊号发行半年后，这些问题还没有找到答案</a><br>
   <a href="" class="secA">TOPYS专访《水象》杂志创始人爱米。</a>
   <div class="foot-bar">
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-browse.png')">882</span>
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-comment.png')">2</span>
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-praise.png')">5</span>
   </div>
   </div>
   <div class="items">
   <img src="http://pic.topys.cn/uploads/20180605/656637993.png?x-oss-process=style/article-pic-list-webp-2x" alt="">
   <a href="" class="hoverChange">名人访谈</a><br>
   <a href="" style="color:black;font-size:22px;height:80px">生活何处有BGM，你的音响说了算</a><br>
   <a href="">每款音响都有其独特“人设”。</a>
   <div class="foot-bar">
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-browse.png')">882</span>
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-comment.png')">2</span>
   <span style="background-image:url('http://pic.topys.cn/topys_web/home/img/icon/ic-praise.png')">5</span>
   </div>
   </div>
   `)
  var timer=setInterval(function(){
    $('#more img').css('display','none');
    $('#more div').css('display','block');
    $('.body-content').append(addmore);
    clearInterval(timer);
  },1000)
})