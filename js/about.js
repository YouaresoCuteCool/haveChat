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
                    this.mark = 3;
                    return
                }
            },
            next(){
                this.mark++;
                if(this.mark === 3){
                    this.mark = 0;
                    return
                }
            },
            autoPlay(){
                this.mark++;
                if(this.mark === 3){
                    this.mark = 0;
                    return
                }
            },
            play(){
                this.time = setInterval(this.autoPlay,3000);
            },
            enter(){
                console.log('enter')
                clearInterval(this.time);
            },
            leave(){
                console.log('leave')
                this.play();
            }
        },
        created(){
            this.play()
        }
    })

  var vm = new Vue({
      el:".text-container", 
      data:{
        show:false
      },
      methods:{
        showIt:function(){
          if(this.show==false){
            this.show=true;
          }else{
            this.show=false;
          }
        }
      }    
     });

var imgs=['../images/1.webp','../images/2.webp',
'../images/3.webp','../images/4.webp','../images/5.webp',
'../images/6.webp','../images/7.webp','../images/8.webp',
'../images/9.webp','../images/10.webp','../images/11.webp',
'../images/12.webp','../images/13.webp','../images/14.webp',
'../images/15.webp','../images/16.webp','../images/17.webp']
$('.personimg').each(function(n){
    var imgperson=$('<img src="'+imgs[n]+'">');
    $(this).append(imgperson);
})
$('.personintro').each(function(n){
    $(this).mouseover(function(){
      $(this).children().children('.introduce').css('display','block');
      $(this).children().children('img').css('display','none');
    }).mouseout(function(){
      $(this).children().children('.introduce').css('display','none');
      $(this).children().children('img').css('display','block');
    })
})




































