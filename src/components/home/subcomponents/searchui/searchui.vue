<template>
    <header class="sear-top">
      <div class="opac" :style="{background:'rgba(255,255,255,'+(0+prop1)+')'}">
        <div class="sear-left">
          <a href="https://www.taobao.com">
            <input type="text" readonly='readonly' placeholder="HUAWEI Mate 10 荣耀V10":style="{backgroundColor:'rgba(238,238,238,'+(0.8+prop1)+')'}">
          </a>
        </div>
        <div class="logi-right">
          <ul>
            <li class="news-right"><a id='buicon' class='' href=""></a></li>
            <li class="logi-girl"><a id="bulogi" class='' href="">登录</a></li>
          </ul>
        </div>
      </div>
    </header>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {

      }
    },
    props:['prop1'],
    watch:{

    },
    methods:{
      changecolor:function(){
        // 监听scroll的变化 动态改变相应的className
        if(document.documentElement.scrollTop>110){
          document.querySelector('#buicon').className='black-l';
          document.querySelector('#bulogi').className='black-r';
        }else{
          document.querySelector('#buicon').className='';
          document.querySelector('#bulogi').className='';
        }
      }
    },
    mounted(){
      window.addEventListener('scroll', this.changecolor)
    }
  }
</script>

<style lang="scss">
$r:41.4;
.sear-top{
  width: 414rem/$r;
  height: 46rem/$r;
  position: fixed;
  top: 0;
  .opac{
    width: 100%;
    height: 100%;
    .logi-right{
      width: 90rem/$r;
      height: 28rem/$r;
      display: inline-block;
      position: absolute;
      top: 8.99rem/$r;
      margin-left: 4px;
      ul{
        width: 100%;
        height: 100%;
        li{
          float: left;
        }
        .news-right{
          width: 34.47rem/$r;
          height: 27.59rem/$r;
          background-image: url(https://res8.vmallres.com/nwap/20171124/images/echannelWap/icon/icon_message.png);
          -webkit-background-size: 27.59rem/$r 27.59rem/$r;
          background-size: 27.59rem/$r 27.59rem/$r;
          background-repeat: no-repeat;
          a{
            display: block;
            width: 100%;
            height: 100%;
          }
          .black-l{
            width: 34.47rem/$r;
            height: 27.59rem/$r;
            background-image: url(https://res8.vmallres.com/nwap/20171124/images/echannelWap/icon/icon_message_black.png);
            -webkit-background-size: 27.59rem/$r 27.59rem/$r;
            background-size: 27.59rem/$r 27.59rem/$r;
            background-repeat: no-repeat;
          }
        }
        .logi-girl{
          font-size: 19rem/$r;
          color: #fff;
          letter-spacing:1px;
          a{
            display: block;
            width: 100%;
            height: 100%;
            color: #fff;
          }
          .black-r{
            display: block;
            width: 100%;
            height: 100%;
            color: #000;
          }
        }
      }
    }
    .sear-left{
      width: 298rem/$r;
      height: 100%;
      margin-left: 18rem/$r;
      display: inline-block;
      a{
        display: block;
        height: 100%;
        input{
          width: 298rem/$r;
          height: 31.391rem/$r;
          border: 0;
          outline: none;
          position: absolute;
          top: 7.295rem/$r;
          border-radius: 15rem/$r;
          text-indent: 42rem/$r;
          font-size: 16rem/$r;
          color: #898989;
          background-image: url(https://res8.vmallres.com/nwap/20171124/images/echannelWap/icon/icon_search.png);
          background-repeat: no-repeat;
          -webkit-background-size: 25rem/$r 25rem/$r;
          background-size: 25rem/$r 25rem/$r;
          background-position: 9rem/$r 4rem/$r;
        }
      }
    }
  }
}
</style>
