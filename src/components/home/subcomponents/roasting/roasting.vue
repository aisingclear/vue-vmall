<template>
    <div id="roasting-scroll">
      I am roasting
      <img id = "mu" src="" alt="">
      <img id = "mu1" src="" alt="">
    </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        a:2
      }
    },
    created(){
      //添加节点
      var oS = document.createElement('script');
      oS.id = 'mi';
      oS.src = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1&jsonpCallback=jp0';
      document.body.appendChild( oS );
      //注册回调函数
      function jp0(vuy){
        //数据渲染
        var im = document.querySelector('#mu');
        im.src = vuy.data.radioList[0].picUrl;
        //删除节点
        document.getElementById("mi").parentNode.removeChild(document.getElementById("mi"));
      }
      window.jp0 = jp0;
    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style lang="scss">
$r:41.4;
#roasting-scroll{
  background: #000;

}
</style>
