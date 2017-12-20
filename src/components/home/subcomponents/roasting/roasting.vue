<template>
 <div id="roasting" ref="scrollTouch">
   <div id="roasting-scroll">
     <ul ref="myul">
       <li v-for="item in auio.roasting">
         <a :href="item.ahref">
           <img :src="item.imgurl" alt="">
         </a>
       </li>
     </ul>
   </div>
   <div class="tab-t">
     <ul id='onli'>
       <li class="on"></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
     </ul>
   </div>
 </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        auio:{},
      }
    },
    created(){
      this.jsonp();
    },
    methods:{
      jsonp:function (){
        //添加节点
        var oS = document.createElement('script');
        oS.id = 'mi';
        oS.src = 'http://aisingclear.com/api/home.js';
        document.body.appendChild( oS );
        //注册回调函数
        var aising = (vuy) => {
          //数据渲染
          this.auio = vuy;
          this.roastingImgUrl = this.auio.roasting.imgurl;
          this.roastingAHref = this.auio.roasting.ahref;
          //删除节点
          document.getElementById("mi").parentNode.removeChild(document.getElementById("mi"));
        };
        window.aising = aising;
      },
      autoroasting:function () {
        var roastingUl = this.$refs.myul;
        var scrollTouchMin = this.$refs.scrollTouch;
        var onli1 = document.getElementById("onli");
        var onli2 = onli1.getElementsByTagName('li');
        var index = 0;
        scrollTouchMin.ontouchstart = function(e){
          var sx = e.changedTouches[0].pageX;
          var sLeft = parseInt( getComputedStyle(roastingUl).marginLeft );
          var sdate =new Date();
          clearInterval(tmar);
          this.ontouchmove = function(e){
            var mx = e.changedTouches[0].pageX;
            roastingUl.style.marginLeft = mx - sx + sLeft + 'px';
          };
          this.ontouchend = function(e){
            var ex = e.changedTouches[0].pageX;
            roastingUl.className = 'tran';
            if(ex-sx > 30 && new Date()-sdate>300){
              index++
            }else if(ex-sx < -30 && new Date()-sdate>300){
              index--
            }else{
              roastingUl.style.marginLeft = sLeft + 'px';
            }
            roastingUl.style.marginLeft = -10*htmlFontSize + 10*htmlFontSize*index + 'px';
            auto();
          };
        }
        addEventListener('transitionend',function(){
          roastingUl.className = '';
          if(index==-7){
            index=0;
          }else if(index == 1){
            index = -6
          }
          for(var i=0;i<onli2.length;i++){
            onli2[i].className = '';
          }
          onli2[Math.abs(index)].className = 'on';
          roastingUl.style.marginLeft = -10*htmlFontSize + 10*htmlFontSize*index + 'px';
        });
        function auto(){
          var tmar = setInterval(function(){
            index--;
            roastingUl.className = 'tran';
            roastingUl.style.marginLeft = -10*htmlFontSize + 10*htmlFontSize*index + 'px';
          },3000);
          window.tmar = tmar;
        }
        auto();
      }
    },
    mounted(){
      this.autoroasting();
    }
  }
</script>

<style lang="scss">
$r:41.4;
#roasting{
  width: 414rem/$r;
  height: 220rem/$r;
  #roasting-scroll{
    background: #000;
    width: 414rem/$r;
    height: 220rem/$r;
    overflow: hidden;
    ul.tran{
      -webkit-transition: margin-left 0.3s;
      -moz-transition: margin-left 0.3s;
      -ms-transition: margin-left 0.3s;
      -o-transition: margin-left 0.3s;
      transition: margin-left 0.3s;
    }
    ul{
      width: 10000px;
      height: 100%;
      margin-left: -414rem/$r;
      li{
        float: left;
        height: 100%;
        a{
          display: block;
          height: 100%;
          img{
            width: 414rem/$r;
            height: 100%;
          }
        }
      }
    }
  }
  .tab-t{
    width: 84rem/$r;
    height: 4rem/$r;
    position: absolute;
    left: 165rem/$r;
    top: 202rem/$r;
    ul{
      width: 100%;
      height: 100%;
      li.on{
        width: 25rem/$r;
      }
      li{
        width:4rem/$r;
        height: 4rem/$r;
        float: left;
        margin-right: 5rem/$r;
        background: #fff;
        -webkit-border-radius: 2rem/$r;
        -moz-border-radius: 2rem/$r;
        border-radius: 2rem/$r;
      }
    }
  }
}
</style>
