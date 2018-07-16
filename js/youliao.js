$('.body-content>div').each(function(n){
	var picbg=[
	'http://pic.topys.cn/uploads/20171127/49911765.gif?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171113/846344012.png?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171120/1390026924.png?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171211/1170726950.jpeg?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20180122/1481318945.jpg?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20180402/2057881154.jpg?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171023/700598104.png?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171127/49911765.gif?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171113/846344012.png?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171120/1390026924.png?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171211/1170726950.jpeg?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20180122/1481318945.jpg?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20180402/2057881154.jpg?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171023/700598104.png?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20180122/1481318945.jpg?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20180402/2057881154.jpg?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171023/700598104.png?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171127/49911765.gif?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171113/846344012.png?x-oss-process=style/topic-pic-webp-2x',
	'http://pic.topys.cn/uploads/20171120/1390026924.png?x-oss-process=style/topic-pic-webp-2x'
	]
	$(this).css("background-image","url("+picbg[n]+")");
})
$('.more .read').click(function(){
	$('.more .read').css("display","none");
    $('.more .anim').css("display","block");
	var addMore=$(`
                <div class="item1">
					<div class="items">
						<a href="">讲道理，这才是杠精出没最多的地方吧……</a>
						<div>
							<span>13</span>
							<a href="">互动 有聊 杠精 新媒体 编辑</a>
						</div>
					</div>
				</div>	
				<div class="item2">
					<div class="items">
						<a href="">讲道理，这才是杠精出没最多的地方吧……</a>
						<div>
							<span>2</span>
							<a href="">互动 有聊 杠精 新媒体 编辑</a>
						</div>
					</div>
				</div>	
				<div class="item3">
					<div class="items">
						<a href="">讲道理，这才是杠精出没最多的地方吧……</a>
						<div>
							<span>0</span>
							<a href="">互动 有聊 杠精 新媒体 编辑</a>
						</div>
					</div>
				</div>	
				<div class="item4">
					<div class="items">
						<a href="">讲道理，这才是杠精出没最多的地方吧……</a>
						<div>
							<span>9</span>
							<a href="">互动 有聊 杠精 新媒体 编辑</a>
						</div>
					</div>
				</div>	
				<div class="item5">
					<div class="items">
						<a href="">讲道理，这才是杠精出没最多的地方吧……</a>
						<div>
							<span>13</span>
							<a href="">互动 有聊 杠精 新媒体 编辑</a>
						</div>
					</div>
				</div>	
				<div class="item6">
					<div class="items">
						<a href="">讲道理，这才是杠精出没最多的地方吧……</a>
						<div>
							<span>3</span>
							<a href="">互动 有聊 杠精 新媒体 编辑</a>
						</div>
					</div>
				</div>	
				<div class="item7">
					<div class="items">
						<a href="">讲道理，这才是杠精出没最多的地方吧……</a>
						<div>
							<span>12</span>
							<a href="">互动 有聊 杠精 新媒体 编辑</a>
						</div>
					</div>
				</div>	
				<div class="item8">
					<div class="items">
						<a href="">讲道理，这才是杠精出没最多的地方吧……</a>
						<div>
							<span>13</span>
							<a href="">互动 有聊 杠精 新媒体 编辑</a>
						</div>
					</div>
				</div>	
	 	`);  	
         var timer=setInterval(function(){
            $('.more .read').css("display","block");
            $('.more .anim').css("display","none");
            $('.body-content').append(addMore);
            clearInterval(timer);
           },600)

})































