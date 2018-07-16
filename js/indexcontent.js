 /*
    轮播逻辑
    效果 ==> 图片显示第几章的时候，下面的bullet的第几个就要改变成active
            点击相应的bullet可以切换到对应的图片
    */

    //初始化一个vue实例然后挂载到父元素上，并设定数据为图片的数组，
    // 以及后面计数用的mark，mark初始值为0
    var vm = new Vue({
        el:'.carousel',
        data:{
            mark:0,
            img:[
                    '../images/1501690982.jpeg',
                    '../images/463828564.jpeg',
                    '../images/873993900.webp',
                    '../images/1977176690.jpeg',
                    '../images/1680480898.webp'
            ],
            time:null,
            show:true
        },
        methods:{   //添加方法
            change(i){
                this.mark = i;
            },
            prev(){
                this.mark--;
                if(this.mark === -1){
                    this.mark = 5;
                    return
                }
            },
            next(){
                this.mark++;
                if(this.mark === 5){
                    this.mark = 0;
                    return
                }
            },
            autoPlay(){
                this.mark++;
                if(this.mark === 5){
                    this.mark = 0;
                    return
                }
            },
            play(){
                this.time = setInterval(this.autoPlay,3000);
            },
            enter(){               
                clearInterval(this.time);
            },
            leave(){
                this.play();
            }
        },
        created(){
            this.play()
        }
    })




var imgs=['../images/1941318943.webp','../images/1281910905.jpg',
'../images/1974712069.jpg','../images/809632280.jpg',
'../images/1244955676.png','../images/1827222157.png',
'../images/2064041948.jpg','../images/1360982465.png',
'../images/638248047.png','../images/727179517.jpeg',
'../images/1892297906.png','../images/1501690982.jpeg',
'../images/1760884857.png','../images/680506163.png',
'../images/302352570.jpg','../images/750149734.jpg',
];


$('.continuelook').click(function(){
    $('.waitminute').show();
    $('.continuelooka').css('display','none');
    $('.waitminute').fadeOut(2000,function(){
        var newcon = $('<div class="selcontent">\
          <div>\
            <a href=""><img src="../images/2064041948.jpg" alt=""></a>\
            <a href=""><p>轻艺术</p></a>\
            <a href=""><span>Monocle评选出2018年全球最宜<br>居城市，我们让去过的人帮你亲测</span></a>\
            <a href=""><p>一千个人眼里有一千个宜居标准。</p></a>\
            <div class="secfooter"><a href="">\
            <img src="../images/ic-browse.png" alt=""> <span>1693</span>\
            <img src="../images/ic-comment.png" alt=""> <span>1</span>\
            <img src="../images/ic-praise.png" alt=""> <span>1</span></a> <a href="" class="author"><span>by 活腻</span></a></div>\
          </div>\
      </div>\
      <div class="selcontent">\
          <div>\
            <a href=""><img src="../images/1360982465.png" alt=""></a>\
            <a href=""><p>独家合辑</p></a>\
            <a href=""><span>创意界大佬接连被fired，mt胶带发</span></a>\
            <a href=""><p>本期懒人周报同时还由IDG、星巴克、<br>Tiffany、Gucci、安迪沃霍尔、艾美奖联合不赞助播出。...</p></a>\
            <div class="secfooter"><a href="">\
            <img src="../images/ic-browse.png" alt=""> <span>1693</span>\
            <img src="../images/ic-comment.png" alt=""> <span>1</span>\
            <img src="../images/ic-praise.png" alt=""> <span>1</span></a> <a href="" class="author"><span>by 活腻</span></a></div>\
          </div>\
      </div>\
      <div class="selcontent">\
          <div>\
            <a href=""><img src="../images/638248047.png" alt=""></a>\
            <a href=""><p>轻艺术</p></a>\
            <a href=""><span>这条电影节宣传片真是太坏心了</span></a>\
            <a href=""><p>特朗普又躺了个枪。</p></a>\
            <div class="secfooter"><a href="">\
            <img src="../images/ic-browse.png" alt=""> <span>1693</span>\
            <img src="../images/ic-comment.png" alt=""> <span>1</span>\
            <img src="../images/ic-praise.png" alt=""> <span>1</span></a> <a href="" class="author"><span>by 活腻</span></a></div>\
          </div>\
      </div>\
      <div class="selcontent">\
          <div>\
            <a href=""><img src="../images/727179517.jpeg" alt=""></a>\
            <a href=""><p>好广告</p></a>\
            <a href=""><span>史上第一则真·有·毛的除毛广告！</span></a>\
            <a href=""><p>一起让互联网变得毛茸茸的吧</p></a>\
            <div class="secfooter"><a href="">\
            <img src="../images/ic-browse.png" alt=""> <span>1693</span>\
            <img src="../images/ic-comment.png" alt=""> <span>1</span>\
            <img src="../images/ic-praise.png" alt=""> <span>1</span></a> <a href="" class="author"><span>by 活腻</span></a></div>\
          </div>\
      </div>\
      <div class="selcontent">\
          <div>\
            <a href=""><img src="../images/1892297906.png" alt=""></a>\
            <a href=""><p>轻艺术</p></a>\
            <a href=""><span>这条电影节宣传片真是太坏心了</span></a>\
            <a href=""><p>特朗普又躺了个枪。</p></a>\
            <div class="secfooter"><a href="">\
            <img src="../images/ic-browse.png" alt=""> <span>1693</span>\
            <img src="../images/ic-comment.png" alt=""> <span>1</span>\
            <img src="../images/ic-praise.png" alt=""> <span>1</span></a> <a href="" class="author"><span>by 活腻</span></a></div>\
          </div>\
      </div>\
      <div class="selcontent">\
          <div>\
            <a href=""><img src="../images/1501690982.jpeg" alt=""></a>\
            <a href=""><p>轻艺术</p></a>\
            <a href=""><span>这条电影节宣传片真是太坏心了</span></a>\
            <a href=""><p>特朗普又躺了个枪。</p></a>\
            <div class="secfooter"><a href="">\
            <img src="../images/ic-browse.png" alt=""> <span>1693</span>\
            <img src="../images/ic-comment.png" alt=""> <span>1</span>\
            <img src="../images/ic-praise.png" alt=""> <span>1</span></a> <a href="" class="author"><span>by 活腻</span></a></div>\
          </div>\
      </div>)');

            $('.newselectborder').append(newcon);

        // for(var i = 0;i>7;i++){
        //          $('.newselectborder').append(newcon);
        //     }
        // }
         
           $('.continuelooka').css('display','block');
    });
    
})







































